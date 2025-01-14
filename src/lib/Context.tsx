import React, { createContext, useContext, useState, ReactNode } from 'react'

// OrderBook 데이터 타입 정의
interface OrderBookItem {
  price: number
  amount: number
  total: number
}

interface OrderBookContextType {
  selectedOrderBook: OrderBookItem | null
  setSelectedOrderBook: (item: OrderBookItem) => void
}

const OrderBookContext = createContext<OrderBookContextType | undefined>(
  undefined
)

// Provider 컴포넌트 생성
export const OrderBookProvider = ({ children }: { children: ReactNode }) => {
  const [selectedOrderBook, setSelectedOrderBook] =
    useState<OrderBookItem | null>(null)

  return (
    <OrderBookContext.Provider
      value={{ selectedOrderBook, setSelectedOrderBook }}
    >
      {children}
    </OrderBookContext.Provider>
  )
}

// Custom Hook 생성 (더 간단하게 사용)
export const useOrderBook = () => {
  const context = useContext(OrderBookContext)
  if (!context) {
    throw new Error('useOrderBook must be used within an OrderBookProvider')
  }
  return context
}
