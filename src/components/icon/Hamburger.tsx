import { iconProps } from '@/types/icon'

export default function HamburgerMenuIcon({ size = 24, className }: iconProps) {
  return (
    <svg
      className={`w-[${size}px] h-[${size}px] ${className}`}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4 4h16v3H4V4zm0 6.5h16v3H4v-3zM20 17H4v3h16v-3z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
