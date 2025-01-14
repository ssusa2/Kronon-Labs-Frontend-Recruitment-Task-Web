'use client'

import Button from '@/components/button/BaseButton'
import StepperInput from '@/components/input/StepperInput'
import Tabs from '@/components/tabs/Tabs'
import { useState } from 'react'

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
  const [inputValues, setInputValues] = useState({
    price1: '0.00074131',
    price2: '0.00074130',
    amount1: '7',
    amount2: '3',
  })

  const handleChange = (key: string, value: string) => {
    setInputValues((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <section className='orderForm !bg-basicBg card-ui w-full'>
      <Tabs tabs={tabs} />
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
      </div>
    </section>
  )
}
