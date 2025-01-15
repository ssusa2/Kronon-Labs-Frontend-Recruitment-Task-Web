import Button from '@/components/button/BaseButton'

export default function MobileOrderForm() {
  return (
    <div className='!bg-basicBg fixed w-full bottom-0 hidden mobile:block z-50'>
      <div className='p-[16px] gap-[16px] w-full flex'>
        <Button
          variant='buy'
          className='w-full text-mobile-sm h-[40px] rounded-[8px]'
        >
          Buy
        </Button>
        <Button
          variant='sell'
          className='w-full text-mobile-sm h-[40px] rounded-[8px]'
        >
          Sell
        </Button>
      </div>
    </div>
  )
}
