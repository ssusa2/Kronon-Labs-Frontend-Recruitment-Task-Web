'use client'

import {
  MarketActivityItemType,
  OrderBookItemType,
  coinListType,
} from '@/types/model'

export const generateCoinList = (count: number): coinListType[] => {
  const coins: coinListType[] = []
  const coinNames = [
    'BTC',
    'ETH',
    'BNB',
    'XRP',
    'ADA',
    'DOGE',
    'SOL',
    'DOT',
    'MATIC',
    'SHIB',
    'LTC',
    'AVAX',
    'UNI',
    'LINK',
    'ATOM',
    'XMR',
    'XTZ',
    'NEAR',
    'ALGO',
    'AAVE',
    'EOS',
    'MANA',
    'SAND',
    'APE',
    'AXS',
    'GALA',
    'FLOW',
    'CRV',
    'MKR',
    'FTM',
    'QNT',
    'CHZ',
    'KSM',
    'RUNE',
    'ENJ',
    'SNX',
    'ZIL',
    'BAT',
    'LRC',
    'COMP',
    '1INCH',
    'CRO',
    'HNT',
    'CEL',
    'YFI',
    'ZRX',
    'ICX',
    'ANKR',
    'DGB',
    'HOT',
    'RVN',
    'QTUM',
    'ONT',
    'IOTA',
    'SC',
    'AR',
    'STG',
    'AI',
    'COOKIE',
    'PNUT',
    'NEIRO',
    'DEXE',
    'FTT',
    'TFUEL',
    'COW',
    'ZEN',
    'ACT',
    'AIXBT',
    'ZENITH',
  ]

  for (let i = 0; i < count; i++) {
    const coinName =
      coinNames[Math.floor(Math.random() * coinNames.length)] + '/USDT'
    const isFavorite = Math.random() < 0.5
    const multiple = Math.floor(Math.random() * 10) + 1
    const lastPrice = parseFloat((Math.random() * 20).toFixed(4))
    const changePercent = parseFloat(
      ((Math.random() * 20 - 10) * -1).toFixed(2)
    )

    coins.push({
      isFavorite,
      coinName,
      multiple,
      lastPrice,
      changePercent,
    })
  }

  return coins
}

/**
 *
 * @param count pc :17 | tablet: 3
 * @returns
 */
export const generateRandomOrderBookData = (count = 17) => {
  const data: OrderBookItemType[] = []

  for (let i = 0; i < count; i++) {
    const price = parseFloat(
      (Math.random() * (100000 - 50000) + 50000).toFixed(2)
    ) // 50000 ~ 100000
    const amount = parseFloat(
      (Math.random() * (0.01 - 0.0001) + 0.0001).toFixed(5)
    ) // 0.0001 ~ 0.01
    const total = parseFloat((price * amount).toFixed(5)) // price * amount

    data.push({
      price,
      amount,
      total,
    })
  }

  return data
}

export const generateRandomTradeData = (count = 17) => {
  return Array.from({ length: count }, () => {
    const price = parseFloat(
      (Math.random() * (100000 - 50000) + 50000).toFixed(2)
    )
    const amount = parseFloat(
      (Math.random() * (0.01 - 0.0001) + 0.0001).toFixed(5)
    )
    const now = new Date()
    const randomTimeOffset = Math.floor(Math.random() * 10000) // 최대 10초 차이
    const time = new Date(now.getTime() - randomTimeOffset)
      .toISOString()
      .slice(11, 19) // 'HH:mm:ss' 형식

    return { price, amount, time }
  })
}

export const generateCandleStickData = (
  days = 60
): { x: Date; y: number[] }[] => {
  const data = []
  const startDate = new Date() // 오늘 날짜 기준
  startDate.setDate(startDate.getDate() - days)

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(startDate)
    currentDate.setDate(startDate.getDate() + i)

    const open = parseFloat((Math.random() * (15000 - 1) + 1).toFixed(2)) // 1~15000 범위
    const close = parseFloat((Math.random() * (15000 - 1) + 1).toFixed(2)) // 1~15000 범위
    const high =
      Math.max(open, close) + parseFloat((Math.random() * 50).toFixed(2)) // high는 open, close보다 높아야 함
    const low =
      Math.min(open, close) - parseFloat((Math.random() * 50).toFixed(2)) // low는 open, close보다 낮아야 함

    data.push({
      x: currentDate,
      y: [open, high, low, close],
    })
  }

  return data
}

export const generateRandomMarketActivityData = (
  count: number
): MarketActivityItemType[] => {
  const coinNames = ['BTC', 'ETH', 'XRP', 'ADA', 'SOL', 'BNB', 'DOGE', 'DOT']
  const moveKinds: MarketActivityItemType['moveKind'][] = [
    'New 24hr High',
    '[Mid] 5min Rise',
    '[Small] 2hr Rise',
    'Rally',
    'Pullback',
  ]
  const iconTypes: MarketActivityItemType['iconType'][] = [
    'New',
    'Mid',
    'Small',
    'Rally',
    'Pullback',
  ]

  return Array.from({ length: count }, () => ({
    coinName: coinNames[Math.floor(Math.random() * coinNames.length)],
    time: new Date(Date.now() - Math.floor(Math.random() * 3600000))
      .toISOString()
      .slice(11, 19),
    moveKind: moveKinds[Math.floor(Math.random() * moveKinds.length)],
    percent: `${(Math.random() * (10 - 0.1) + 0.1).toFixed(2)}`,
    iconType: iconTypes[Math.floor(Math.random() * iconTypes.length)],
  }))
}
