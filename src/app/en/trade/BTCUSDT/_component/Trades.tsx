import MoreIcon from '@/components/icon/More'
import Tabs from '@/components/tabs/Tabs'

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
  function generateRandomData(count = 17) {
    const data = []

    for (let i = 0; i < count; i++) {
      const price = parseFloat(
        (Math.random() * (100000 - 50000) + 50000).toFixed(2)
      ) // 50000 ~ 100000
      const amount = parseFloat(
        (Math.random() * (0.01 - 0.0001) + 0.0001).toFixed(5)
      ) // 0.0001 ~ 0.01

      // 현재 시간에서 밀리초 단위로 약간의 변동 추가
      const now = new Date()
      const randomTimeOffset = Math.floor(Math.random() * 10000) // 최대 10초 차이
      const time = new Date(now.getTime() - randomTimeOffset)
        .toISOString()
        .slice(11, 19) // 'HH:mm:ss' 형식으로 출력

      data.push({
        price,
        amount,
        time,
      })
    }

    return data
  }

  const randomData = generateRandomData(500)

  return (
    <section className='mobile:hidden trades !bg-basicBg card-ui'>
      <Tabs tabs={tabs} actionButton={<MoreIcon size={16} />} />
      <div className='over-book-container'>
        <div className='order-book-tb-header flex flex-col mx-[16px] mb-[4px] mt-[8px]'>
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
        <div className='list-container flex flex-col grow'>
          <div className='overflow-auto h-[301px] scrollbar-hide'>
            <div className='h-[9360px]'>
              <div className='order-list-container'>
                {randomData.map((el, index) => {
                  return (
                    <div
                      key={index}
                      className='order-book-progress hover:font-[600]'
                    >
                      <div className='progress-container'>
                        <div className='row-content'>
                          <div
                            className={`${
                              index % 2 == 0 ? 'ask-light' : 'bid-light'
                            }`}
                          >
                            {el.price.toFixed(2)}
                          </div>
                          <div className='text'>{el.amount.toFixed(5)}</div>
                          <div className='text'>{el.time}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
