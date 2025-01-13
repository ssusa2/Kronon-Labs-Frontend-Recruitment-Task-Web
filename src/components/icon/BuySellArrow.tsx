import { iconProps } from '@/types/icon'

export default function BuySellArrowIcon({ size = 24, className }: iconProps) {
  return (
    <svg
      className={`w-[${size}px] h-[${size}px] ${className}`}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 2.999l7.071 7.071-1.768 1.768-4.054-4.055V21h-2.5V7.784l-4.053 4.054-1.768-1.768 7.07-7.071H12z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
