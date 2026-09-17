<template>
  <div class="card" style="position: sticky; top: 84px;">
    <div class="card-title">Inspection</div>

    <div v-if="!selected" class="muted" style="font-size: 13px;">
      Click an address or a transaction edge in the graph to inspect it here.
    </div>

    <template v-else-if="selected.kind === 'node'">
      <div class="row" style="margin-bottom: 12px; flex-wrap: wrap;">
        <span class="pill" :class="nodePill">{{ nodePillText }}</span>
        <span v-if="node.isExchange && node.exchangeName" class="pill badge-exch">{{ node.exchangeName }}</span>
        <span v-if="node.isSuspect" class="pill badge-suspect">SUSPECT</span>
      </div>
      <div v-if="node.isSuspect && node.ownerName" class="row" style="gap: 8px; margin-bottom: 10px;">
        <span style="color: var(--muted); font-size: 11px; text-transform: uppercase; letter-spacing: .06em;">Holder name</span>
        <b style="font-size: 14px;">{{ node.ownerName }}</b>
      </div>
      <div class="mono" style="font-size: 12px; word-break: break-all; color: var(--muted); margin-bottom: 14px;">{{ node.address }}</div>

      <div class="kv">
        <div><span>Balance</span><b class="mono">{{ fmtLtc(node.balance) }} LTC</b></div>
        <div><span>Received</span><b class="mono">{{ fmtLtc(node.totalReceived) }} LTC</b></div>
        <div><span>Sent</span><b class="mono">{{ fmtLtc(node.totalSent) }} LTC</b></div>
        <div><span>Transactions</span><b>{{ node.txCount }}</b></div>
        <div><span>In / Out degree</span><b>{{ degrees?.in ?? 0 }} · {{ degrees?.out ?? 0 }}</b></div>
        <div><span>First seen</span><b class="mono">{{ fmtDate(node.firstSeen) }}</b></div>
        <div><span>Last seen</span><b class="mono">{{ fmtDate(node.lastSeen) }}</b></div>
      </div>

      <template v-if="kyc">
        <div class="kyc-block">
          <div class="card-title" style="margin: 0 0 10px;">KYC identity on {{ kyc.exchange }}</div>
          <div class="kv">
            <div><span>Account holder</span><b>{{ kyc.user.name }}</b></div>
            <div><span>Email</span><b class="mono">{{ kyc.user.email }}</b></div>
            <div><span>Country</span><b>{{ kyc.user.country }}</b></div>
            <div><span>Verification</span><b>{{ kyc.user.verificationLevel }}</b></div>
            <div><span>ID type</span><b>{{ kyc.user.idType }}</b></div>
            <div><span>ID number</span><b class="mono">{{ kyc.user.idNumber }}</b></div>
            <div><span>Phone</span><b class="mono">{{ kyc.user.phone }}</b></div>
            <div><span>Date of birth</span><b class="mono">{{ kyc.user.dob }}</b></div>
            <div><span>Registered</span><b class="mono">{{ kyc.user.registeredAt.slice(0, 10) }}</b></div>
          </div>
          <div class="muted" style="font-size: 12px; margin-top: 8px;">Exchange HQ: {{ kyc.exchangeCountry }}</div>
        </div>
      </template>
    </template>

    <template v-else-if="selected.kind === 'edge'">
      <div class="row" style="gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
        <span class="pill" :class="selected.data.direction === 'in' ? 'pill-ok' : 'pill-warn'">
          {{ selected.data.direction === 'in' ? 'inflow → suspect' : 'outflow ← suspect' }}
        </span>
      </div>
      <div class="kv">
        <div><span>Amount</span><b class="mono">{{ fmtLtc(selected.data.amount) }} LTC</b></div>
        <div><span>Fee</span><b class="mono">{{ fmtLtc(selected.data.fee) }} LTC</b></div>
        <div><span>Timestamp</span><b class="mono">{{ fmtDate(selected.data.timestamp) }}</b></div>
        <div><span>Relative to suspect</span><b>{{ selected.data.direction === 'in' ? 'received' : 'sent' }}</b></div>
      </div>
      <div class="mono" style="font-size: 12px; word-break: break-all; margin: 10px 0;">tx {{ shortAddr(selected.data.hash, 14, 10) }}</div>
      <div class="flow-line">
        <span class="mono flow-addr">{{ shortAddr(selected.data.source, 10, 6) }}</span>
        <span style="color: var(--accent);">→</span>
        <span class="mono flow-addr">{{ shortAddr(selected.data.target, 10, 6) }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { AddressStats, KYCRecord } from '~/types'
import { fmtLtc, fmtDate, shortAddr } from '~/utils/format'

const props = defineProps<{
  selected: { kind: 'node'; data: AddressStats } | { kind: 'edge'; data: any } | null
  kytByAddress: Map<string, KYCRecord>
  edgesCount: Map<string, { in: number; out: number }>
}>()

const node = computed(() => (props.selected?.kind === 'node' ? props.selected.data : null)!)
const degrees = computed(() => (node.value ? props.edgesCount.get(node.value.address) ?? null : null))
const kyc = computed(() => (node.value ? props.kytByAddress.get(node.value.address) ?? null : null))

const nodePill = computed(() => {
  if (node.value?.isExchange) return 'badge-exch'
  if (node.value?.isSuspect) return 'badge-suspect'
  return 'badge-wallet'
})

const nodePillText = computed(() => {
  if (node.value?.isExchange) return 'EXCHANGE WALLET'
  if (node.value?.isSuspect) return 'SUSPECT'
  return 'PRIVATE WALLET'
})
</script>

<style scoped>
.kv { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; }

@media (max-width: 480px) { .kv { grid-template-columns: 1fr; } }

.kv > div { display: flex; flex-direction: column; gap: 2px; font-size: 12px; }

.kv span { color: var(--muted); text-transform: uppercase; letter-spacing: .06em; font-size: 10px; }

.kv b { font-size: 13px; font-weight: 600; }

.kyc-block { margin-top: 16px; padding: 14px; background: rgba(139,92,246,.06); border: 1px solid rgba(139,92,246,.35); border-radius: 10px; }

.flow-line { display: flex; align-items: center; gap: 10px; margin-top: 8px; }

.flow-addr { background: #0b1222; border: 1px solid #1c2a47; border-radius: 8px; padding: 6px 10px; font-size: 12px; }
</style>