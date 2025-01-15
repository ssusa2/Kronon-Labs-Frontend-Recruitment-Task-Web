export interface coinListType {
  isFavorite: boolean
  coinName: string
  multiple: number
  lastPrice: number
  changePercent: number
}

export interface OrderBookItemType {
  price: number
  amount: number
  total: number
}

export interface MarketActivityItemType {
  coinName: string
  time: string
  moveKind:
    | 'New 24hr High'
    | '[Mid] 5min Rise'
    | '[Small] 2hr Rise'
    | 'Rally'
    | 'Pullback'
  percent: string
  iconType: 'New' | 'Mid' | 'Small' | 'Rally' | 'Pullback'
}
