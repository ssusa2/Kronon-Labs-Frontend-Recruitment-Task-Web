import DropDownIcon from '../icon/DropDown'

interface MenuItemType {
  label: string
  hasDropdown: boolean
}

export default function Menu() {
  const menuItems: MenuItemType[] = [
    { label: 'Buy Crypto', hasDropdown: false },
    { label: 'Markets', hasDropdown: false },
    { label: 'Trade', hasDropdown: true },
    { label: 'Futures', hasDropdown: true },
    { label: 'Earn', hasDropdown: false },
    { label: 'Square', hasDropdown: true },
    { label: 'More', hasDropdown: true },
  ]

  return (
    <ul className='flex max-1023:hidden text-sm'>
      {menuItems.map((item) => (
        <li
          key={item.label}
          className='group hover:text-textBrand cursor-pointer flex items-center text-small leading-[22px] font-[500]	px-[12px]'
        >
          {item.label}
          {item.hasDropdown && (
            <DropDownIcon size={16} className='group-hover:rotate-180' />
          )}
        </li>
      ))}
    </ul>
  )
}
