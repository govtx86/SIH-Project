<template>
  <div ref="container" class="cy-wrap"></div>
</template>

<script setup lang="ts">
import type { AddressStats, GraphData } from '~/types'
import { shortAddr } from '~/utils/format'

const props = defineProps<{ elements: GraphData }>()

const emit = defineEmits<{
  (e: 'node:click', data: AddressStats): void
  (e: 'edge:click', data: any): void
}>()

const container = ref<HTMLDivElement>()
let cy: any = null

const STYLE: any[] = [
  {
    selector: 'node',
    style: {
      'background-color': '#7a87a5',
      'border-color': '#0f1626',
      'border-width': 2,
      width: 26,
      height: 26,
      label: 'data(label)',
      'font-size': 10,
      color: '#dfe8f7',
      'text-valign': 'bottom',
      'text-margin-y': 4,
      'text-wrap': 'none',
      'text-max-width': 130,
    },
  },
  { selector: 'node.suspect', style: { 'background-color': '#ef4444', width: 46, height: 46, 'font-size': 11, 'border-color': '#7f1d1d' } },
  { selector: 'node.exchange', style: { 'background-color': '#8b5cf6', width: 34, height: 34, 'border-color': '#3b1d8c' } },
  {
    selector: 'edge',
    style: {
      width: 1.6,
      'line-color': '#3b82f6',
      'line-opacity': 0.55,
      'target-arrow-color': '#3b82f6',
      'target-arrow-shape': 'triangle',
      'arrow-scale': 0.7,
      'curve-style': 'bezier',
      label: 'data(label)',
      'font-size': 9,
      'text-rotation': 'autorotate',
      color: '#8ea0c0',
      'text-background-color': '#141c30',
      'text-background-opacity': 0.8,
      'text-background-padding': 2,
      'text-background-radius': 4,
    },
  },
  { selector: 'edge.in', style: { 'line-color': '#22c55e', 'target-arrow-color': '#22c55e', 'line-style': 'dashed' } },
]

function toElements(g: GraphData) {
  const byAddr = new Map(g.nodes.map((n) => [n.data.address, n.data]))
  const nodes = g.nodes.map((n) => ({
    data: {
      ...n.data,
      id: n.data.address,
      class: n.data.isSuspect ? 'suspect' : n.data.isExchange ? 'exchange' : 'wallet',
      label: n.data.isSuspect ? 'SUSPECT' : shortAddr(n.data.address, 7, 5),
    },
  }))
  const edges = g.edges.map((e) => {
    const sourceClass = e.data.direction === 'in' ? 'in' : 'out'
    return {
      data: {
        ...e.data,
        id: e.data.id,
        class: sourceClass,
        label: `${e.data.amount}\n${shortAddr(e.data.source, 5, 3)} → ${shortAddr(e.data.target, 5, 3)}`,
      },
    }
  })
  return { nodes, edges }
}

function rebuild(elements = props.elements) {
  if (!cy) return
  cy.elements().remove()
  cy.add(toElements(elements))
  const layout = cy.layout({
    name: 'cose',
    animate: 'end',
    animationDuration: 600,
    padding: 60,
    idealEdgeLength: 130,
    nodeOverlap: 18,
    nodeRepulsion: 7500,
    gravity: 0.1,
    randomize: false,
  })
  layout.run()
}

function onResize() {
  if (cy) {
    cy.resize()
    cy.fit(undefined, 40)
  }
}

onMounted(async () => {
  const cytoscape = (await import('cytoscape')).default
  cy = cytoscape({
    container: container.value,
    elements: toElements(props.elements),
    style: STYLE,
  })
  cy.on('tap', 'node', (evt: any) => emit('node:click', evt.target.data()))
  cy.on('tap', 'edge', (evt: any) => emit('edge:click', evt.target.data()))
  window.addEventListener('resize', onResize)
  rebuild(props.elements)
})

watch(() => props.elements, (v) => rebuild(v), { deep: true })

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  cy?.destroy()
  cy = null
})

defineExpose({ fit: () => cy?.fit(undefined, 40) })
</script>

<style scoped>
.cy-wrap {
  height: 520px;
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  background:
    radial-gradient(circle at 20% 20%, #101b31, transparent 60%),
    #0b1222;
}
</style>