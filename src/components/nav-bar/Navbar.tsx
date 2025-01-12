import Actions from './Actions'
import Logo from './Logo'
import Menu from './Menu'

export default function Navbar() {
  return (
    <header className='h-[64px] text-textPrimary mobile:px-[16px] px-[24px] flex items-center justify-between bg-bg1'>
      <div className='flex items-center'>
        <Logo />
        <Menu />
      </div>
      <Actions />
    </header>
  )
}
