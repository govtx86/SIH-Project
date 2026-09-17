export interface SimTx {
  hash: string
  from: string
  to: string
  amount: number
  fee: number
  timestamp: number
  blockHeight: number
}

export interface AddressStats {
  address: string
  isExchange: boolean
  exchangeName?: string
  ownerName?: string
  isSuspect: boolean
  totalReceived: number
  totalSent: number
  balance: number
  txCount: number
  firstSeen: number
  lastSeen: number
}

export interface GraphNode {
  data: AddressStats
}

export interface GraphEdge {
  data: {
    id: string
    source: string
    target: string
    hash: string
    amount: number
    fee: number
    timestamp: number
    direction: 'in' | 'out'
  }
}

export interface GraphData {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

export interface KYCRecord {
  address: string
  exchange: string
  exchangeCountry: string
  user: {
    name: string
    email: string
    country: string
    idType: string
    idNumber: string
    verificationLevel: string
    phone: string
    dob: string
    registeredAt: string
  }
}

export interface AnalyzeResponse {
  graph: GraphData
  kyt: KYCRecord[]
  suspect: string
  storageMode: 'neo4j' | 'memory'
  tursoConnected: boolean
  generatedAt: number
}

export interface ExchangeInfo {
  slug: string
  name: string
  country: string
  category: string
  addresses: string[]
  kycAccounts: number
}
