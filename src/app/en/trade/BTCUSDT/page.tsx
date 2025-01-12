import CoinInfo from './_component/CoinInfo'

export default function CoinPage() {
  return (
    <div className='trading-layout grid w-full'>
      <CoinInfo />
      <section className='max-1023:hidden market '>마켓</section>
      <section className='mobile:hidden orderBook'>오더북</section>
      <section className='orderForm'>오더폼</section>
      <section className='mobile:hidden trades '>트레이드</section>
      <section className='chart'>차트</section>
      <section className='max-1023:hidden marketActivity '>
        마켓액티비티
      </section>
      <section className='basicTable'>베이직테이블</section>
      <section className='mobile:hidden footer '>푸터</section>
      <section className='hidden left'></section>
      <section className='hidden right'></section>
    </div>
  )
}
