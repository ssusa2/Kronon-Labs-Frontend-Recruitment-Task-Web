import { iconProps } from '@/types/icon'

export default function MoonIcon({ size = 24, className }: iconProps) {
  return (
    <svg
      className={`w-[${size}px] h-[${size}px] ${className}`}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20 12.67A6.233 6.233 0 0111.33 4 8.015 8.015 0 1020 12.67z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
