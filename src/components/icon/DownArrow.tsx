import { iconProps } from '@/types/icon'

export default function DownArrowIcon({ size = 24, className }: iconProps) {
  return (
    <svg
      className={`w-[${size}px] h-[${size}px] ${className}`}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
