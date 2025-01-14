import Title from '@/components/card/Title'
import DoubleDropDown from '@/components/icon/DoubleDropDown'

interface marketActivityItemType {
  coinName: string
  time: string
  moveKind:
    | 'New 24hr High'
    | '[Mid] 5min Rise'
    | '[Small] 2hr Rise'
    | 'Rally'
    | 'Pullback'
  percent: string
  iconType: 'New' | 'Mid' | 'Small' | 'Rally' | 'Pullback'
}

function generateRandomMarketActivityData(
  count: number
): marketActivityItemType[] {
  const coinNames = ['BTC', 'ETH', 'XRP', 'ADA', 'SOL', 'BNB', 'DOGE', 'DOT']
  const moveKinds: marketActivityItemType['moveKind'][] = [
    'New 24hr High',
    '[Mid] 5min Rise',
    '[Small] 2hr Rise',
    'Rally',
    'Pullback',
  ]
  const iconTypes: marketActivityItemType['iconType'][] = [
    'New',
    'Mid',
    'Small',
    'Rally',
    'Pullback',
  ]

  const data: marketActivityItemType[] = []

  for (let i = 0; i < count; i++) {
    const coinName = coinNames[Math.floor(Math.random() * coinNames.length)]
    const time = new Date(Date.now() - Math.floor(Math.random() * 3600000)) // 현재 시간에서 최대 1시간 전까지
      .toISOString()
      .slice(11, 19) // 'HH:mm:ss' 형식
    const moveKind = moveKinds[Math.floor(Math.random() * moveKinds.length)]
    const percent = (Math.random() * (10 - 0.1) + 0.1).toFixed(2) + '%' // 0.1% ~ 10% 범위
    const iconType = iconTypes[Math.floor(Math.random() * iconTypes.length)]

    data.push({
      coinName,
      time,
      moveKind,
      percent,
      iconType,
    })
  }

  return data
}

export default function MarketActivity() {
  const marketList = generateRandomMarketActivityData(50)

  return (
    <section className='max-1023:hidden marketActivity !bg-basicBg card-ui w-full'>
      <Title
        text='Top Movers'
        actionButton={
          <DoubleDropDown className='text-iconNormal rotate-180' size={16} />
        }
      />
      <div className='list-container px-[16px]'>
        <div className='move-kind-header'></div>
        <div className='list h-[82px] overflow-scroll scrollbar-hide'>
          {marketList.map((el) => {
            return (
              <div className='row-content !bg-transparent text-xsmall py-[5px]'>
                <div className='text-left flex-[1_1_0] leading-[16px]'>
                  <div className='coin text-primaryText'>
                    {el.coinName}/USDT
                  </div>
                  <div className='time text-tertiaryText'>{el.time}</div>
                </div>
                <div className='center text-end flex-[1_1_0] min-w-[96px] leading-[16px]'>
                  <div className='percent text-buy'>+{el.percent}%</div>
                  <div className='move-kind text-tertiaryText'>
                    {el.moveKind}
                  </div>
                </div>
                <div className='w-[56px] flex flex-end justify-center items-center'>
                  <div className='h-[16px] w-[40px] bg-buy rounded-[4px] flex justify-center items-center'>
                    ---
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
