import Button from '../button/BaseButton'
import IconButton from '../button/IconButton'
import DownloadIcon from '../icon/Download'
import GlobeIcon from '../icon/Globe'
import HamburgerMenuIcon from '../icon/Hamburger'
import HelpIcon from '../icon/Help'
import MoonIcon from '../icon/Moon'
import SearchIcon from '../icon/Search'
import SettingsIcon from '../icon/Setting'

export default function Actions() {
  return (
    <div className='flex items-center'>
      <IconButton
        icon={<SearchIcon />}
        className='mobile:hidden header-right-item'
      />

      <div className='header-right-item h-[64px] mobile:!hidden'>
        <Button variant='secondary'>Log In</Button>
      </div>
      <div className='header-right-item h-[64px] !pl-0'>
        <Button>Sign Up</Button>
      </div>

      <IconButton
        icon={<DownloadIcon />}
        className='header-right-item mobile:hidden tablet:hidden'
      />
      <IconButton
        icon={<GlobeIcon />}
        hiddenOn='mobile'
        className='header-right-item mobile:hidden tablet:hidden'
      />
      <IconButton
        icon={<HamburgerMenuIcon size={24} />}
        className='header-right-item tablet:hidden pc:hidden'
      />
      <IconButton
        icon={<HelpIcon />}
        className='mobile:hidden h-center ml-[6px]'
      />

      <IconButton
        icon={<SettingsIcon className='min-w-[35px]' />}
        className='pl-[10px] mr-[5px]'
      />
      <IconButton
        icon={<MoonIcon />}
        className='header-right-item !pr-0 tablet:hidden mobile:hidden'
      />
    </div>
  )
}
