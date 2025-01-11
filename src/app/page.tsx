import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='mobile:text-textBuy tablet:text-blue-700 pc:text-red-700'>
        Hello
      </div>
      <p>default</p>
      <p className='font-light'>Light (300)</p>
      <p className='font-normal'>Regular (400)</p>
      <p className='font-medium'>Medium (500)</p>
      <p className='font-semibold'>Semi Bold (600)</p>
      <p className='font-bold'>Bold (700)</p>
    </>
  )
}
