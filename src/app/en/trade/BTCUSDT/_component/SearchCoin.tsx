'use client'
import CloseIcon from '@/components/icon/Close'
import SearchIcon from '@/components/icon/Search'
import StarIcon from '@/components/icon/Star'
import Tabs from '@/components/tabs/Tabs'
import { generateCoinList } from '@/lib/dataGenerators'
import { coinListType } from '@/types/model'
import { useEffect, useState } from 'react'

const coinTabs = [
  {
    label: 'USDT',
    content: <div>USDT Content</div>,
  },
  {
    label: 'FDUSD',
    content: <div>FDUSD Content</div>,
  },
  {
    label: 'USDC',
    content: <div>USDC Content</div>,
  },
  {
    label: 'TUSD',
    content: <div>TUSD Content</div>,
  },
  {
    label: 'BNB',
    content: <div>BNB Content</div>,
  },
]

export default function SearchCoin() {
  const [coinList, setCoinList] = useState<coinListType[]>([])
  const [filteredCoinList, setFilteredCoinList] = useState<coinListType[]>([]) // 필터링된 리스트
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const list = generateCoinList(100)
    setCoinList(list)
    setFilteredCoinList(list) // 초기 필터링 리스트 설정
  }, [])

  useEffect(() => {
    // 입력값에 따라 필터링
    const filtered = coinList.filter((coin) =>
      coin.coinName.toLowerCase().includes(inputValue.toLowerCase())
    )
    setFilteredCoinList(filtered)
  }, [inputValue, coinList])

  return (
    <section className='max-1023:hidden market !bg-basicBg card-ui h-full'>
      <div>
        <div className='h-[12px]'></div>
        <div className='search-container'>
          <div className='flex items-center justify-between px-[16px]'>
            <div
              className={`w-full !h-[32px] px-[12px] flex-[1_1] gap-[8px] flex items-center border-inputLine border rounded-[8px] ${
                isFocused ? 'border-textBrand' : ''
              }`}
            >
              <div className=' max-w-[55%] w-[16px] text-disabledText'>
                <SearchIcon size={16} />
              </div>
              <input
                className={`bg-transparent flex-1 outline-none text-small leading-[22px]${
                  inputValue ? 'text-primaryText' : 'text-disabledText'
                }`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                placeholder='Search'
              />
              {inputValue && (
                <div
                  className='max-w-[55%] cursor-pointer text-disabledText'
                  onClick={() => setInputValue('')}
                >
                  <CloseIcon size={16} />
                </div>
              )}
            </div>
            <span></span>
            {isFocused && !inputValue && (
              <div className='text-textBrand text-small ml-[10px] cursor-pointer font-[500]'>
                Cancel
              </div>
            )}
          </div>
        </div>
      </div>
      {isFocused && !inputValue ? (
        <div className=''>
          <div className='px-[16px] mt-[12px] mb-[8px] text-small font-[500]'>
            Top Search
          </div>
          <div>
            {filteredCoinList.slice(0, 10).map((el, index) => {
              return (
                <div
                  key={index}
                  className='order-book-progress hover:font-[600] !h-[24px]'
                >
                  <div className='progress-container items-center'>
                    <div className='row-content !leading-[16px] mt-[4px] mb-[4px]'>
                      <StarIcon size={16} className='text-textDisabled' />
                      <div
                        className={`!text-left  !leading-[16px] pl-[4px] text !text-xsmall !flex-none w-[16px]
                        ${
                          index === 0
                            ? '!text-emphasizeText' // 첫 번째 항목 색상
                            : index === 1
                            ? '!text-[#d0980b]' // 두 번째 항목 색상
                            : index === 2
                            ? '!text-primaryYellow' // 세 번째 항목 색상
                            : '!text-disabledText' // 나머지 항목 기본 색상
                        }
                        
                        `}
                      >
                        {index + 1}
                      </div>
                      <div className='!text-left !leading-[16px] text flex-1 justify-start'>
                        {el.coinName}
                      </div>
                      <div className='text-xsmall leading-[16px] font-[400] px-[4px] bg-input rounded-[2px] h-[16px] ml-[4px]'>
                        {el.multiple}x
                      </div>
                      <div className='text'>{el.lastPrice}</div>
                      <div className='text !text-sell'>{el.changePercent}%</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div className='market-cotainer flex-col flex h-[50px]'>
          <Tabs tabs={coinTabs} />
          <div className='order-book-tb-header flex flex-col mx-[16px] mt-[12px] mb-[8px] '>
            <div className='content flex min-h-[20px] justify-between text-xsmall text-tertiaryText'>
              <div className='item flex items-center justify-start flex-[1_1_0]'>
                Pair
              </div>
              <div className='item text-right flex justify-end flex-[1_1_0]'>
                Last Price
              </div>
              <div className='item flex items-center justify-end flex-[1_1_0]'>
                24h Change
              </div>
            </div>
          </div>
          <div className='list-container flex flex-col grow'>
            <div className='overflow-auto h-[301px] scrollbar-hide'>
              <div className='h-[9360px]'>
                {filteredCoinList.map((el, index) => {
                  return (
                    <div
                      key={index}
                      className='order-book-progress hover:font-[600] !h-[24px]'
                    >
                      <div className='progress-container'>
                        <div className='row-content !leading-[16px] pt-[4px] mb-[4px]'>
                          <StarIcon size={16} className='text-textDisabled' />
                          <div className='!text-left !leading-[16px] text'>
                            {el.coinName}
                          </div>
                          <div className='text-xsmall leading-[16px] font-[400] px-[4px] bg-input rounded-[2px] h-[16px] ml-[4px]'>
                            {el.multiple}x
                          </div>
                          <div className='text'>{el.lastPrice}</div>
                          <div className='text !text-sell'>
                            {el.changePercent}%
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='top-search-cotainer'></div>
    </section>
  )
}
