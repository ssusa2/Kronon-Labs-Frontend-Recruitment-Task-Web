import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/en/trade/BTCUSDT?type=spot')
}
