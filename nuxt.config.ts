import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

function readSuspectNames(): string[] {
  const file = resolve(process.cwd(), 'suspect-names.txt')
  if (!existsSync(file)) return []
  return readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
}

const suspectNames = readSuspectNames()

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    neo4jHost: '',
    neo4jUser: 'neo4j',
    neo4jPassword: '',
    neo4jDatabase: 'neo4j',
    tursoUrl: '',
    tursoToken: '',
    suspectNames,
  },

  nitro: process.env.DEPLOY_TARGET === 'cloudflare'
    ? { preset: 'cloudflare_module' }
    : {},

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})