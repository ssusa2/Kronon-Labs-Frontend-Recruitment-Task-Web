'use client'

import MoreIcon from '@/components/icon/More'
import Tabs from '@/components/tabs/Tabs'
import { useEffect, useState } from 'react'

const tabs = [
  {
    label: 'Market Trades',
    content: <div>Market Trades Content</div>,
  },
  {
    label: 'My Trades',
    content: <div>My Trades Content</div>,
  },
]

export default function Trades() {
  const [isTablet, setIsTablet] = useState(false)
  const [randomData, setRandomData] = useState<
    { price: number; amount: number; time: string }[]
  >([])

  useEffect(() => {
    const checkMobile = () => setIsTablet(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    setRandomData(generateRandomData(500))
  }, [])

  function generateRandomData(count = 17) {
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

  return (
    <section className='mobile:hidden trades !bg-basicBg card-ui'>
      <Tabs tabs={tabs} actionButton={<MoreIcon size={16} />} />
      <div className='over-book-container'>
        <div className='order-book-tb-header flex flex-col mx-4 mb-1 mt-2'>
          <div className='content flex min-h-[20px] justify-between text-xsmall text-tertiaryText'>
            <div className='item flex items-center justify-start flex-[1_1_0]'>
              Price (USDT)
            </div>
            <div className='item text-right flex justify-end flex-[1_1_0]'>
              Amount (BTC)
            </div>
            <div className='item flex items-center justify-end flex-[1_1_0]'>
              Time
            </div>
          </div>
        </div>
        <div
          className={`list-container flex flex-col grow overflow-auto scrollbar-hide ${
            isTablet ? 'h-[200px]' : 'h-[261px]'
          }`}
        >
          <div className='order-list-container'>
            {randomData.map((el, index) => (
              <div
                key={`${el.price}-${el.amount}-${index}`}
                className='order-book-progress hover:font-[600]'
              >
                <div className='progress-container'>
                  <div className='row-content'>
                    <div
                      className={`text ${
                        index % 2 === 0 ? 'ask-light' : 'bid-light'
                      }`}
                    >
                      {el.price.toFixed(2)}
                    </div>
                    <div className='text'>{el.amount.toFixed(5)}</div>
                    <div className='text'>{el.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
