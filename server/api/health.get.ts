import { hasNeo4j, countNodes, cypher_health, usedDatabaseName } from '../utils/neo4j'
import { hasTurso } from '../utils/turso'

export default defineEventHandler(async () => {
  const checks: Record<string, { available: boolean; connected?: boolean; detail?: string; database?: string; nodes?: number }> = {}

  checks.neo4j = { available: hasNeo4j() }
  if (hasNeo4j()) {
    try {
      await cypher_health()
      checks.neo4j.connected = true
      checks.neo4j.database = await usedDatabaseName()
      checks.neo4j.nodes = await countNodes()
    } catch (err) {
      checks.neo4j.connected = false
      checks.neo4j.detail = (err as Error).message
    }
  }

  checks.turso = { available: hasTurso() }

  return {
    ok: true,
    mode: hasNeo4j() ? 'neo4j' : 'memory',
    services: checks,
    time: new Date().toISOString(),
  }
})