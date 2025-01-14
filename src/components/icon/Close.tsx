import { iconProps } from '@/types/icon'

export default function CloseIcon({ size = 24, className }: iconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-[${size}px] h-[${size}px] ${className}`}
    >
      <path
        d='M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
