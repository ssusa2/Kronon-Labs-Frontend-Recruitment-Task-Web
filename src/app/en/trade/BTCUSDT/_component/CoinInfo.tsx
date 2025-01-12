'use client'
import StarIcon from '@/components/icon/Star'
import React from 'react'

export default function CoinInfo() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    // 브라우저 환경에서만 실행
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  console.log('isMobile', isMobile)

  return (
    <section className='subHeader card-ui'>
      <div className='text-white px-4 mobile:py-[12px] mobile:px-[16px] flex items-center mobile:items-start'>
        {/* <!-- Left Section: Coin Info --> */}
        <div className='flex items-center mobile:flex-col mobile:items-start mobile:flex-[1_1_0%]'>
          <div className='flex'>
            <div className='flex items-center'>
              <div className='text-disabledText border-disabledText w-[24px] h-[24px] border mr-[8px] rounded-lg flex justify-center items-center'>
                <StarIcon size={16} />
              </div>
              <div className='flex flex-col mr-[16px] mobile:flex-row mobile:justify-center'>
                <h1 className='text-lg font-bold mobile:text-mobile-lg mobile:leading-[24px]'>
                  BTC{isMobile && <br />}
                  <span className='mobile:text-small'>/USDT</span>
                </h1>
                <span className='text-xsmall text-tertiaryText mobile:text-mobile-xs'>
                  Bitcoin Price ↗
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='nowPrice text-textSell'>94,280.02</div>
            <div className='subPrice mobile:hidden'>$94,309.87</div>
          </div>
          {isMobile && (
            <div className='flex'>
              <div className='tickerPriceText !text-red-500'>-434.33</div>
              <div className='tickerPriceText !text-red-500 mobile:ml-[12px]'>
                -0.46%
              </div>
            </div>
          )}
        </div>

        {isMobile ? (
          <div className='flex-[1_1_0%]'>
            <div className='grid grid-cols-2 gap-x-[16px] gap-y-[24px]'>
              <div className='max-w-[80px]'>
                <div className='tickerItemLabel'>24h High</div>
                <div className='tickerPriceText'>$95,050.94</div>
              </div>
              <div className='max-w-[80px]'>
                <div className='tickerItemLabel'>24h Volume</div>
                <div className='tickerItemLabel'>(BTC)</div>
                <div className='tickerPriceText'>6,858.63</div>
              </div>
              <div className='max-w-[80px]'>
                <div className='tickerItemLabel'>24h Low</div>
                <div className='tickerPriceText'>$93,711.19</div>
              </div>
              <div className='max-w-[80px]'>
                <div className='tickerItemLabel'>24h Volume</div>
                <div className='tickerItemLabel'>(USDT)</div>
                <div className='tickerPriceText'>713.96M</div>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex gap-[16px] mx-[16px] overflow-x-auto whitespace-nowrap scrollbar-hide'>
            <div className=''>
              <div className='tickerItemLabel'>24h Change</div>
              <div className='tickerPriceText !text-red-500'>
                -434.33 -0.46%
              </div>
            </div>
            <div className=''>
              <div className='tickerItemLabel'>24h High</div>
              <div className='tickerPriceText'>$95,050.94</div>
            </div>
            <div className=''>
              <div className='tickerItemLabel'>24h Low</div>
              <div className='tickerPriceText'>$93,711.19</div>
            </div>
            <div className=''>
              <div className='tickerItemLabel'>24h Volume (BTC)</div>
              <div className='tickerPriceText'>6,858.63</div>
            </div>
            <div className=''>
              <div className='tickerItemLabel'>24h Volume (USDT)</div>
              <div className='tickerPriceText'>$647,706,511.29</div>
            </div>
            <div className=''>
              <div className='tickerItemLabel'>Token Tags</div>
              <div className='flex gap-[16px] symbol-tags'>
                <span className='tag  '>POW</span>
                <span className='tag '>Payments</span>
                <span className='tag '>Vol</span>
                <span className='tag '>Hot</span>
                <span className='tag '>Price Protection</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {isMobile && (
        <div className='flex gap-[16px] symbol-tags ml-[16px] mb-[8px]'>
          <span className='tag  '>POW</span>
          <span className='tag '>Payments</span>
          <span className='tag '>Vol</span>
          <span className='tag '>Hot</span>
          <span className='tag '>Price Protection</span>
        </div>
      )}
    </section>
  )
}
