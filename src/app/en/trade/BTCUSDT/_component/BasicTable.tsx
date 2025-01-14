import Tabs from '@/components/tabs/Tabs'

const tabs = [
  {
    label: 'Open Orders(0)',
    content: <div>Open Orders(0) Content</div>,
  },
  {
    label: 'Order History',
    content: <div>Order History Content</div>,
  },
  {
    label: 'Trade History',
    content: <div>Trade History Content</div>,
  },
  {
    label: 'Funds',
    content: <div>Funds Content</div>,
  },
  {
    label: 'Grid Orders',
    content: <div>Grid Orders Content</div>,
  },
]

export default function BasicTable() {
  return (
    <section className='basicTable !bg-basicBg card-ui h-full'>
      <Tabs tabs={tabs} />
      <div className='px-[16px] w-full h-full '>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='text-small text-primaryText'>
            <span className='text-primary cursor-pointer'>Log In</span> or
            <span className='text-primary cursor-pointer'>
              {' '}
              Register Now
            </span>{' '}
            to trade
          </div>
        </div>
      </div>
    </section>
  )
}
