'use client'

import MoreIcon from '@/components/icon/More'
import Tabs from '@/components/tabs/Tabs'
import { useScreenSizeCheck } from '@/hooks/useScreenSize'
import { generateRandomTradeData } from '@/lib/dataGenerators'
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
  const isTablet = useScreenSizeCheck(1024)

  const [randomData, setRandomData] = useState<
    { price: number; amount: number; time: string }[]
  >([])

  useEffect(() => {
    setRandomData(generateRandomTradeData(500))
  }, [])

  return (
    <section className='mobile:hidden trades !bg-basicBg card-ui'>
      <Tabs tabs={tabs} actionButton={<MoreIcon size={16} />} />
      <div className='over-book-container'>
        <div className='order-book-tb-header flex flex-col mx-4 mb-1 mt-2'>
          <div className='content flex min-h-[20px] justify-between text-xsmall text-tertiaryText'>
            <div className='item flex items-center justify-start flex-[1_1_0]'>
              Price (USDT)
            </div>
            <div className='item text-rights flex justify-end flex-[1_1_0]'>
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
