import Image from 'next/image'

export default function Logo() {
  return (
    <div className='pr-3'>
      <Image
        src='/images/logo.png'
        alt='Binance Logo'
        width={120}
        height={64}
      />
    </div>
  )
}
