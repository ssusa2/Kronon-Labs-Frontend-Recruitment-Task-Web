'use client'

import { useEffect, useState } from 'react'
import Title from '@/components/card/Title'
import DoubleDropDown from '@/components/icon/DoubleDropDown'
import { generateRandomMarketActivityData } from '@/lib/dataGenerators'
import { MarketActivityItemType } from '@/types/model'

export default function MarketActivity() {
  const [marketList, setMarketList] = useState<MarketActivityItemType[]>([])

  useEffect(() => {
    setMarketList(generateRandomMarketActivityData(50))
  }, [])

  return (
    <section className='marketActivity card-ui w-full max-1023:hidden !bg-basicBg'>
      <Title
        text='Top Movers'
        actionButton={
          <DoubleDropDown
            className='text-iconNormal icon-hover rotate-180'
            size={16}
          />
        }
      />
      <div className='list-container px-4'>
        <div className='move-kind-header'></div>
        <div className='list h-[82px] overflow-y-scroll scrollbar-hide'>
          {marketList.map((el, index) => (
            <div
              key={`${el.coinName}-${index}`}
              className='row-content py-1 text-xsmall !bg-transparent flex items-center'
            >
              <div className='flex-[1_1_0] text-left'>
                <div className='coin text-primaryText'>{el.coinName}/USDT</div>
                <div className='time text-tertiaryText'>{el.time}</div>
              </div>
              <div className='flex-[1_1_0] text-end min-w-[96px]'>
                <div className='percent text-buy'>+{el.percent}%</div>
                <div className='move-kind text-tertiaryText'>{el.moveKind}</div>
              </div>
              <div className='w-14 flex justify-center items-center'>
                <div className='h-4 w-10 bg-buy rounded flex justify-center items-center'>
                  ---
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
