'use client'

import { OrderBookItemType } from '@/app/en/trade/BTCUSDT/_component/OrderBook'
import { atom } from 'recoil'

export const orderBookItemState = atom<OrderBookItemType | null>({
  key: 'orderBookItemState',
  default: null,
})
