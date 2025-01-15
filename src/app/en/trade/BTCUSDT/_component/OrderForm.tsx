'use client'

import Button from '@/components/button/BaseButton'
import StepperInput from '@/components/input/StepperInput'
import Tabs from '@/components/tabs/Tabs'
import { useScreenSizeCheck } from '@/hooks/useScreenSize'
import { useOrderBook } from '@/lib/Context'
import { useEffect, useState } from 'react'

const tabs = [
  {
    label: 'Spot',
    content: <div>Spot Content</div>,
  },
  {
    label: 'Cross',
    content: <div>Cross Content</div>,
  },
  {
    label: 'Isolated',
    content: <div>Isolated Content</div>,
  },
  {
    label: 'Grid',
    content: <div>Grid Content</div>,
  },
]

export default function OrderForm() {
  const { selectedOrderBook } = useOrderBook()
  const isTablet = useScreenSizeCheck(1024)
  const [activeTab, setActiveTab] = useState('buy')
  const [inputValues, setInputValues] = useState({
    price1: '0.00074131',
    price2: '0.00074130',
    amount1: '7',
    amount2: '3',
  })

  useEffect(() => {
    // selectedOrderBook 값이 변경될 때 inputValues 업데이트
    if (selectedOrderBook) {
      setInputValues((prev) => ({
        ...prev,
        price1: selectedOrderBook.price.toFixed(5),
        price2: selectedOrderBook.price.toFixed(5),
        amount2: selectedOrderBook.amount.toFixed(5),
      }))
    }
  }, [selectedOrderBook])

  const handleChange = (key: string, value: string) => {
    setInputValues((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <section className='orderForm !bg-basicBg card-ui w-full mobile:hidden'>
      <Tabs tabs={tabs} />
      {isTablet && (
        <div className='buy-sell-tabs pt-[10px] px-[16px]'>
          <div className='flex items-center border border-gray-700 rounded-lg w-full'>
            <button
              className={`px-4 py-2 w-full text-sm font-medium transition-colors duration-200 rounded-l-lg ${
                activeTab === 'buy'
                  ? 'bg-buy text-white'
                  : 'bg-transparent text-gray-400'
              }`}
              onClick={() => setActiveTab('buy')}
            >
              Buy
            </button>
            <button
              className={`px-4 py-2 text-sm w-full font-medium transition-colors duration-200 rounded-r-lg ${
                activeTab === 'sell'
                  ? 'bg-sell text-white border-l border-gray-700'
                  : 'bg-transparent text-gray-400'
              }`}
              onClick={() => setActiveTab('sell')}
            >
              Sell
            </button>
          </div>
        </div>
      )}
      <div className='order-form-containter w-full px-[16px] pb-[12px]'>
        <div className='header-wrap items-center flex h-[42px] justify-between'>
          <div className='text-small leading-[22px] flex items-center justify-between font-[500]  gap-[16px]'>
            <div className='text-primaryText leading-[16px] whitespace-nowrap cursor-pointer'>
              Limit
            </div>
            <div className='text-disabledText cursor-pointer'>Market</div>
            <div className='text-disabledText cursor-pointer'>Stop Limit</div>
          </div>
        </div>
        {isTablet ? (
          <div className='order-form-layout relative w-full '>
            <div className='form-container relative flex justify-between w-full gap-[16px]'>
              <div className='form-left flex-1  flex flex-col gap-[8px]'>
                <StepperInput
                  label='Price'
                  step='0.00000001'
                  min='0.00000001'
                  suffix='USDT'
                  value={inputValues.price1}
                  onChange={(value) => handleChange('price1', value)}
                />
                <StepperInput
                  label='Amount'
                  step='1'
                  min='1'
                  suffix='NEIRO'
                  value={inputValues.amount1}
                  onChange={(value) => handleChange('amount1', value)}
                />
                <div className='flex items-center h-[10px]'>
                  <div className='slider h-[1px] w-full bg-inputLine'></div>
                </div>
                <div className='checkbox-container text-xsmall'>TP/SL</div>
                <div className='trade-container w-full'>
                  <div className='trade-fee flex-col'>
                    <div className='flex justify-between text-xsmall text-primaryText'>
                      <p className='!text-tertiaryText'>Avbl</p>
                      <p className=''>- USDT</p>
                    </div>
                    <div className='flex justify-between text-xsmall text-primaryText'>
                      <p className='!text-tertiaryText'>
                        Max {activeTab == 'buy' ? 'Buy' : 'Sell'}
                      </p>
                      <p>-- NEIRO</p>
                    </div>
                  </div>
                  <Button
                    className='w-full rounded-[8px] mt-[8px] h-[36px]'
                    variant={`${activeTab == 'buy' ? 'buy' : 'sell'}`}
                  >
                    Log In
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='order-form-layout relative w-full '>
            <div className='form-container relative flex justify-between w-full gap-[16px]'>
              <div className='form-left flex-1 max-w-[50%] flex flex-col gap-[8px]'>
                <StepperInput
                  label='Price'
                  step='0.00000001'
                  min='0.00000001'
                  suffix='USDT'
                  value={inputValues.price1}
                  onChange={(value) => handleChange('price1', value)}
                />
                <StepperInput
                  label='Amount'
                  step='1'
                  min='1'
                  suffix='NEIRO'
                  value={inputValues.amount1}
                  onChange={(value) => handleChange('amount1', value)}
                />
                <div className='flex items-center h-[10px]'>
                  <div className='slider h-[1px] w-full bg-inputLine'></div>
                </div>
                <div className='checkbox-container text-xsmall'>TP/SL</div>
                <div className='trade-container w-full'>
                  <div className='trade-fee flex-col'>
                    <div className='flex justify-between text-xsmall text-primaryText'>
                      <p className='!text-tertiaryText'>Avbl</p>
                      <p className=''>- USDT</p>
                    </div>
                    <div className='flex justify-between text-xsmall text-primaryText'>
                      <p className='!text-tertiaryText'>Max Buy</p>
                      <p>-- NEIRO</p>
                    </div>
                  </div>
                  <Button
                    className='w-full rounded-[8px] mt-[8px] h-[36px]'
                    variant='buy'
                  >
                    Log In
                  </Button>
                </div>
              </div>
              <div className='form-right flex-1 max-w-[50%] flex flex-col gap-[8px]'>
                <StepperInput
                  label='Price'
                  step='0.00000001'
                  min='0.00000001'
                  suffix='USDT'
                  value={inputValues.price2}
                  onChange={(value) => handleChange('price2', value)}
                />
                <StepperInput
                  label='Amount'
                  step='1'
                  min='1'
                  suffix='NEIRO'
                  value={inputValues.amount2}
                  onChange={(value) => handleChange('amount2', value)}
                />
                <div className='flex items-center h-[10px]'>
                  <div className='slider h-[1px] w-full bg-inputLine'></div>
                </div>
                <div className='checkbox-container text-xsmall'>TP/SL</div>
                <div className='trade-container w-full'>
                  <div className='trade-fee flex-col'>
                    <div className='flex justify-between text-xsmall text-primaryText'>
                      <p className='!text-tertiaryText'>Avbl</p>
                      <p className=''>- USDT</p>
                    </div>
                    <div className='flex justify-between text-xsmall text-primaryText'>
                      <p className='!text-tertiaryText'>Max Buy</p>
                      <p>-- NEIRO</p>
                    </div>
                  </div>
                  <Button
                    className='w-full rounded-[8px] mt-[8px] h-[36px]'
                    variant='sell'
                  >
                    Log In
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
