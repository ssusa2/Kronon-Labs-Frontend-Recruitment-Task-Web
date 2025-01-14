import CoinInfo from '@/app/en/trade/BTCUSDT/_component/CoinInfo'
import Chart from '@/app/en/trade/BTCUSDT/_component/Chart'
import OrderBook from '@/app/en/trade/BTCUSDT/_component/OrderBook'
import SearchCoin from '@/app/en/trade/BTCUSDT/_component/SearchCoin'
import OrderForm from '@/app/en/trade/BTCUSDT/_component/OrderForm'
import Trades from '@/app/en/trade/BTCUSDT/_component/Trades'
import MarketActivity from '@/app/en/trade/BTCUSDT/_component/MarketActivity'

export default function CoinPage() {
  return (
    <div className='trading-layout grid w-full'>
      <CoinInfo />
      <SearchCoin />
      <OrderBook />
      <OrderForm />
      <Trades />
      <Chart />
      <MarketActivity />

      <section className='basicTable'>베이직테이블</section>
      <section className='mobile:hidden footer '>푸터</section>
      <section className='hidden left'></section>
      <section className='hidden right'></section>
    </div>
  )
}
