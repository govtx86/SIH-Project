# ChainPulse — Litecoin Testnet Transaction Graph

A self-contained Nuxt 4 application that generates a Litecoin **testnet** transaction graph around any
wallet address, marks the addresses that belong to known (simulated) exchanges, and shows the KYC
identity linked to each exchange address. The transaction graph is persisted in **Neo4j AuraDB (cloud)**
and the exchange/KYC records in **Turso (cloud)**. Everything lives inside the Nuxt app — the Nitro API
layer talks to both cloud databases over plain HTTPS, so the whole thing deploys to
**Cloudflare Workers** as a single bundle.

```
User enters LTC-testnet address
        │
        ▼
POST /api/analyze
  ① simulateSuspectGraph()  → deterministic tx cluster (seeded by the address)
  ② upsert nodes/edges       → Neo4j AuraDB  (Address / :Exchange / :Suspect labels, SENT_TO rels)
  ③ persist exchange+KYC     → Turso         (exchanges, exchange_addresses, kyc_records)
        │
        ▼
front-end: Cytoscape graph with exchange wallets highlighted + KYC on click
```

## Why Neo4j over HTTPS?

Cloudflare Workers cannot open arbitrary Bolt (TCP) connections. Neo4j **AuraDB** exposes the
[Query API](https://neo4j.com/docs/query-api/current/) (`https://<instance>.databases.neo4j.io/db/neo4j/query/v2`)
over HTTPS on port 443 with Basic auth — fully supported on Workers. This app uses that API, so no
Bolt driver / TCP tunnelling is needed.

If the Neo4j/Turso credentials are not configured, the app silently falls back to **demo mode**
(in-memory graph + in-memory KYC) so it always runs — great for local previews.

## Quick start

### 1. Install & run locally (no databases — demo mode)

```bash
npm install
npm run dev          # http://localhost:3000
```

Click **Use demo address** (or paste any `m… / n… / 2… / tltc1…` address) and Analyze.
The header badge shows `Demo mode · in-memory graph`.

### 2. Connect Neo4j AuraDB + Turso

Create a `.env` from the template:

```bash
cp .env.example .env
```

| Variable | Where |
| --- | --- |
| `NUXT_NEO4J_HOST` | AuraDB instance id, e.g. `abcd1234.databases.neo4j.io` |
| `NUXT_NEO4J_USER` / `NUXT_NEO4J_PASSWORD` | Aura credentials (Create DB → password) |
| `NUXT_NEO4J_DATABASE` | usually `neo4j` |
| `NUXT_TURSO_URL` / `NUXT_TURSO_TOKEN` | Turso database URL (`https://org-db.turso.io`) + token |

Restart `npm run dev` — `/api/health` reports `mode: "neo4j"` and the analyze button persists to the
cloud databases. The Neo4j schema is created lazily on first analyze (no manual setup files).

> AuraDB tier: the Query API is available on Free and paid tiers. Create the DB at
> [console.neo4j.io](https://console.neo4j.io).

## Deploy to Cloudflare Workers

```bash
npm run deploy:cf        # builds with the cloudflare_module preset, then wrangler deploy
```

`wrangler.toml` already points `main` at `.output/server/index.mjs` and serves
`.output/public` through the `ASSETS` binding.

Set the secrets (never commit these):

```bash
npx wrangler secret put NUXT_NEO4J_PASSWORD
npx wrangler secret put NUXT_TURSO_URL
npx wrangler secret put NUXT_TURSO_TOKEN
```

Notable config already in `wrangler.toml`:

```toml
main = ".output/server/index.mjs"
compatibility_date = "2025-09-01"
compatibility_flags = ["nodejs_compat"]
assets = { directory = ".output/public", binding = "ASSETS", not_found_handling = "single-page-application" }
```

Local Worker preview:

```bash
npm run build:cf
npx wrangler dev --port 8787
```

## How the simulation works

- **Deterministic:** every address seeds its own PRNG (FNV-1a + xmur3 + mulberry32), so re-analyzing
  an address always produces the same cluster. Exchange addresses come from a *fixed global registry*
  (seeded once), so they are stable across every suspect.
- **Cluster shape:** the address receives deposits from other wallets, then sends funds to some of the
  simulated exchange wallets — some directly, some via an intermediate address — plus a few small
  payments to leaf wallets. A random but deterministic flow, nothing more.
- **Exchanges:** 14 simulated venues with **generated fictional names** (e.g. `Quartz Trade`, `Nimbus Markets` — never real exchanges), each with 2–4 deterministic testnet addresses; a fraction become KYC-linked.
- **Suspect / identity names:** edit `suspect-names.txt` (project root, one name per line, `#` comments allowed). The names are used for the suspect's holder name and KYC account holders. If the file is empty or missing, random generated names are used instead. Rebuild/reload to apply changes (names are baked at build time).
- **KYC:** each linked exchange address carries a fake verifiable identity (name, email, country, ID type + masked number, verification level, phone, DOB, registration date), stored in Turso and labeled `:Exchange` in the graph.

## Risk model

There is no risk/threat analysis — the app only generates a transaction graph and highlights known
exchange addresses. The suspect's address is simply labelled `:Suspect`, exchange wallets
`:Exchange`, and everything else is a private wallet.

## API

| Route | Description |
| --- | --- |
| `POST /api/analyze` | `{ address }` → generate tx graph, persist to Neo4j + Turso, return `{ graph, kyt, suspect, … }` |
| `GET /api/graph/:address` | Read the ≤2-hop cluster around an address from Neo4j |
| `GET /api/kyt/:address` | KYC record + exchange for an address (404 if none) |
| `GET /api/address/:address` | Merged view: graph node + KYC |
| `GET /api/exchanges` | Exchange directory (Turso-backed, or in-memory registry) |
| `GET /api/health` | Store connectivity + mode + node count |

## Data model

**Neo4j (graph):**

```cypher
(:Address {address, balance, total_received, total_sent, tx_count, first_seen, last_seen})
(:Suspect)         -- label on the analyzed address
(:Exchange)        -- label on exchange wallets, {exchange}
(:Address)-[:SENT_TO {hash, amount, fee, timestamp}]->(:Address)
```

**Turso (relational):** `exchanges`, `exchange_addresses`, `kyc_records`.

## Stack

- [Nuxt 4](https://nuxt.com) / Nitro — API + SSR in one deployable
- [Cytoscape.js](https://js.cytoscape.org) — client-side graph rendering (cose layout)
- [Neo4j AuraDB](https://neo4j.com/cloud/platform/aura-graph-database/) — Query API over HTTPS
- [Turso](https://turso.tech) — libsql HTTP `/v2/pipeline` API
- [Cloudflare Workers](https://developers.cloudflare.com/workers) — `cloudflare_module` Nitro preset