<template>
  <div>
    <section class="hero">
      <h1>Litecoin Testnet — Transaction Graph</h1>
      <p class="muted">
        Generate a transaction graph around any Litecoin testnet address and see which addresses belong to
        known (simulated) exchanges, with their linked KYC identity.
      </p>
    </section>

    <section class="card search-card">
      <div class="search-row">
        <input
          v-model="suspect"
          class="addr-input mono"
          placeholder="Enter a Litecoin testnet address (starts with m, n, 2 or tltc1…)"
          spellcheck="false"
          autocomplete="off"
          @keyup.enter="runAnalyze"
        />
        <button class="btn btn-primary" :disabled="loading || !canAnalyze" @click="runAnalyze">
          <template v-if="loading">Analyzing…</template>
          <template v-else>Analyze</template>
        </button>
      </div>
      <div class="search-actions">
        <button class="btn" :disabled="loading" @click="setDemo">Use demo address</button>
        <span v-if="!isDemoAndValid" class="muted" style="font-size: 12px;">Testnet formats: m…, n…, 2…, tltc1…</span>
        <span v-else class="pill pill-ok">valid testnet address</span>
      </div>
      <div v-if="error" class="error-box">{{ error }}</div>
    </section>

    <div v-if="recent.length" class="card">
      <div class="card-title">Recent analyses</div>
      <div class="row" style="flex-wrap: wrap;">
        <button v-for="r in recent" :key="r" class="btn" style="padding: 6px 10px; font-size: 12px;" @click="suspect = r; runAnalyze()">
          <span class="mono">{{ shortAddr(r) }}</span>
        </button>
      </div>
    </div>

    <template v-if="result">
      <div class="card">
        <div class="card-row">
          <div class="card-title" style="margin: 0;">Transaction graph</div>
          <div class="row">
            <span class="muted" style="font-size: 12px;">{{ result.graph.nodes.length }} addresses · {{ result.graph.edges.length }} transactions</span>
            <button class="btn" style="padding: 6px 10px; font-size: 12px;" @click="downloadJson">Export JSON</button>
          </div>
        </div>
        <div class="graph-wrap">
          <GraphView
            :elements="result.graph"
            @node:click="selected = { kind: 'node', data: $event }"
            @edge:click="selected = { kind: 'edge', data: $event }"
          />
          <div class="legend">
            <span><i class="dot" style="background:#ef4444;"></i> suspect</span>
            <span><i class="dot" style="background:#8b5cf6;"></i> exchange (KYC)</span>
            <span><i class="dot" style="background:#7a87a5;"></i> private wallet</span>
            <span><i class="dot" style="background:#3b82f6;"></i> tx edge</span>
          </div>
        </div>
        <div class="mode-line muted">
          storage: <span class="mono">{{ result.storageMode }}</span>
          <template v-if="result.tursoConnected"> · relational KYC: <span class="mono" style="color: var(--ok);">turso</span></template>
          <template v-else> · relational KYC: <span class="mono" style="color: var(--warn);">memory fallback</span></template>
        </div>
      </div>

      <div style="margin-top: 18px;">
        <DetailsPanel :selected="selected" :kyt-by-address="kytByAddress" :edges-count="edgesByAddress" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { AddressStats, AnalyzeResponse } from '~/types'
import { shortAddr } from '~/utils/format'

const DEMO_ADDRESS = 'mnAhTmaJ1kz98cCyJk3k4jB9f6oXQ7jY2a'

const suspect = ref('')
const loading = ref(false)
const error = ref('')
const result = ref<AnalyzeResponse | null>(null)
const selected = ref<{ kind: 'node'; data: AddressStats } | { kind: 'edge'; data: any } | null>(null)

const recent = ref<string[]>([])

function loadRecent() {
  try {
    recent.value = JSON.parse(localStorage.getItem('rdr-recent') ?? '[]')
  } catch {
    recent.value = []
  }
}

function addRecent(addr: string) {
  const list = [addr, ...recent.value.filter((a) => a !== addr)].slice(0, 5)
  recent.value = list
  localStorage.setItem('rdr-recent', JSON.stringify(list))
}

loadRecent()

useHead({ title: 'ChainPulse · Litecoin Testnet Transaction Graph' })

const isDemoAndValid = computed(() => /^(tltc1|[mn2])/.test(suspect.value))
const canAnalyze = computed(() => suspect.value.trim().length >= 20)

async function runAnalyze() {
  const address = suspect.value.trim()
  if (!address || loading.value) return
  loading.value = true
  error.value = ''
  try {
    result.value = await $fetch<AnalyzeResponse>('/api/analyze', {
      method: 'POST',
      body: { address },
    })
    selected.value = null
    addRecent(address)
  } catch (err: any) {
    error.value = err?.data?.statusMessage ?? err?.message ?? 'Analysis failed'
  } finally {
    loading.value = false
  }
}

function setDemo() {
  suspect.value = DEMO_ADDRESS
  runAnalyze()
}

const kytByAddress = computed(() => new Map((result.value?.kyt ?? []).map((k) => [k.address, k])))

const edgesByAddress = computed(() => {
  const map = new Map<string, { in: number; out: number }>()
  for (const e of result.value?.graph.edges ?? []) {
    const d = e.data
    if (!map.has(d.target)) map.set(d.target, { in: 0, out: 0 })
    if (!map.has(d.source)) map.set(d.source, { in: 0, out: 0 })
    map.get(d.source)!.out++
    map.get(d.target)!.in++
  }
  return map
})

function downloadJson() {
  if (!result.value) return
  const blob = new Blob([JSON.stringify(result.value, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `chainpulse-${result.value.suspect}.json`
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.hero { margin-bottom: 20px; }

.hero h1 { font-size: 26px; letter-spacing: -.01em; }

.hero p { margin: 8px 0 0; max-width: 760px; }

.search-card { padding: 20px; }

.search-row { display: flex; gap: 12px; }

.addr-input {
  flex: 1;
  background: #0b1222;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  padding: 12px 14px;
  font-size: 14px;
  outline: none;
  transition: border-color .15s ease;
}

.addr-input:focus { border-color: var(--accent); }

.search-actions { display: flex; align-items: center; gap: 14px; margin-top: 12px; }

.card-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }

.graph-wrap { position: relative; }

.card + .card { margin-top: 18px; }

.mode-line { margin-top: 14px; font-size: 12px; }
</style>