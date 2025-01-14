import CoinInfo from '@/app/en/trade/BTCUSDT/_component/CoinInfo'
import Chart from '@/app/en/trade/BTCUSDT/_component/Chart'
import OrderBook from '@/app/en/trade/BTCUSDT/_component/OrderBook'
import SearchCoin from '@/app/en/trade/BTCUSDT/_component/SearchCoin'
import OrderForm from '@/app/en/trade/BTCUSDT/_component/OrderForm'
import MobileOrderForm from '@/app/en/trade/BTCUSDT/_component/MobileOrderForm'
import Trades from '@/app/en/trade/BTCUSDT/_component/Trades'
import MarketActivity from '@/app/en/trade/BTCUSDT/_component/MarketActivity'
import BasicTable from '@/app/en/trade/BTCUSDT/_component/BasicTable'

export default function CoinPage() {
  return (
    <div className='trading-layout grid w-full'>
      <CoinInfo />
      <SearchCoin />
      <OrderBook />
      <OrderForm />
      <MobileOrderForm />
      <Trades />
      <Chart />
      <MarketActivity />
      <BasicTable />

      {/* <section className='mobile:hidden footer '>푸터</section> */}
      <section className='hidden left'></section>
      <section className='hidden right'></section>
    </div>
  )
}
