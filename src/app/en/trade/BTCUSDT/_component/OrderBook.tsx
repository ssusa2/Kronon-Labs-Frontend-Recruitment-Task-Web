'use client'
import Title from '@/components/card/Title'
import BuyOrderIcon from '@/components/icon/BuyOrder'
import SellOrderIcon from '@/components/icon/SellOrder'
import OrderBookIcon from '@/components/icon/OrderBook'
import Tabs from '@/components/tabs/Tabs'
import React, { useEffect, useState } from 'react'
import MoreIcon from '@/components/icon/More'
import DownArrowIcon from '@/components/icon/DownArrow'
import MoreArrowIcon from '@/components/icon/MoreArrow'
import BuySellArrowIcon from '@/components/icon/BuySellArrow'

export default function OrderBook() {
  /**
   *
   * @param count pc :17 | tablet: 3
   * @returns
   */
  function generateRandomData(count = 17) {
    const data = []

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

  const [isTablet, setIsTablet] = useState(false)
  useEffect(() => {
    // 브라우저 환경에서만 실행
    const checkMobile = () => setIsTablet(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  const randomData = generateRandomData(isTablet ? 3 : 17)

  return (
    <section className='orderBook mobile:hidden !bg-basicBg card-ui orderBook'>
      <Title
        text='Order Book'
        actionButton={
          <div className='text-disabledText hover:text-primaryText cursor-pointer'>
            <MoreIcon size={16} />
          </div>
        }
      />
      <div className='over-book-container'>
        <div className='order-book-header'>
          <div className='icon-container'>
            <OrderBookIcon size={16} />
            <BuyOrderIcon size={16} className='opacity-40' />
            <SellOrderIcon size={16} className='opacity-40' />
          </div>
          <div className='unit-container text-primaryText cursor-pointer text-xsmall min-w-[40px] pl-[8px] flex items-center'>
            <div>0.01</div>
            <div className='text-disabledText hover:text-primaryText'>
              <DownArrowIcon size={16} />
            </div>
          </div>
        </div>
        <div className='order-book-tb-header flex flex-col mx-[16px] mb-[4px]'>
          <div className='content flex min-h-[20px] justify-between text-xsmall text-tertiaryText'>
            <div className='item flex items-center justify-start flex-[1_1_0]'>
              Price (USDT)
            </div>
            <div className='item text-right flex justify-end flex-[1_1_0]'>
              Amount (BTC)
            </div>
            <div className='item flex items-center justify-end flex-[1_1_0]'>
              Total
            </div>
          </div>
        </div>
        <div className='order-list-container'>
          {randomData.map((el, index) => {
            return (
              <div key={index} className='order-book-progress hover:font-[600]'>
                <div className='progress-container'>
                  <div className='row-content'>
                    <div className='ask-light'>{el.price.toFixed(2)}</div>
                    <div className='text'>{el.amount.toFixed(5)}</div>
                    <div className='text'>{el.total.toFixed(5)}</div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className='order-book-ticker flex h-[36px] px-[16px] items-center'>
            <div className='contract-price status-sell text-base h-[20px] mr-[4px] flex items-center'>
              <div className='mt-[-3px]'>91,288.70</div>
              <BuySellArrowIcon size={16} />
            </div>
            <div className='mark-price text-tertiaryText flex flex-[1_1] text-left text-xsmall'>
              $91,240.04
            </div>
            <div className='more w-[16px] h-[16px] text-disabledText hover:text-primaryText'>
              <MoreArrowIcon size={16} />
            </div>
          </div>
          {randomData.map((el, index) => {
            return (
              <div key={index} className='order-book-progress hover:font-[600]'>
                <div className='progress-container'>
                  <div className='row-content'>
                    <div className='bid-light'>{el.price.toFixed(2)}</div>
                    <div className='text'>{el.amount.toFixed(5)}</div>
                    <div className='text'>{el.total.toFixed(5)}</div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className='order-book-compare flex px-[16px] mt-[4px]'>
            <div className='order-percent-container'>
              <div className='order-kind'>B</div>
              <div className='order-percent status-buy ml-[2px]'>32.91%</div>
            </div>
            <div className='compare-bar-container px-[8px] gap-[1px] flex flex-[1_1] items-center justify-between'>
              <div
                className='bar mr-[1px] bg-buy !w-[39%] rounded-l-lg

'
              ></div>
              <div
                className='bar bg-sell !w-[61%] rounded-r-lg

'
              ></div>
            </div>
            <div className='order-percent-container'>
              <div className='order-percent status-sell mr-[2px]'>61.91%</div>
              <div className='order-kind'>S</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}