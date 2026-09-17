<template>
  <div>
    <NuxtRouteAnnouncer />
    <header class="app-header">
      <div class="brand">
        <div class="logo">◉</div>
        <div>
          <div style="font-weight: 700; font-size: 15px;">ChainPulse <span class="muted" style="font-weight:400;">· Litecoin Testnet</span></div>
          <div class="sub">Testnet transaction graph — Neo4j graph + Turso relational</div>
        </div>
      </div>
      <ClientOnly>
        <button class="btn" @click="refreshHealth">
          <span :class="['pill', healthOk ? (health?.mode === 'neo4j' ? 'pill-ok' : 'pill-warn') : 'pill-danger']">
            {{ healthOk ? (health?.mode === 'neo4j' ? `Neo4j · ${fmtCompact(health?.services?.neo4j?.nodes ?? 0)} nodes` : 'Demo mode · in-memory graph') : 'offline' }}
          </span>
        </button>
      </ClientOnly>
    </header>
    <main class="page">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { fmtCompact } from './utils/format'

const health = ref<any>(null)
const healthOk = ref(true)

async function refreshHealth() {
  try {
    health.value = await $fetch('/api/health')
    healthOk.value = true
  } catch {
    healthOk.value = false
  }
}

refreshHealth()
</script>