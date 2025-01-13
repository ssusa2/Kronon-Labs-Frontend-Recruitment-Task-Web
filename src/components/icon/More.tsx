import { iconProps } from '@/types/icon'

export default function MoreIcon({ size = 24, className }: iconProps) {
  return (
    <svg
      className={`w-[${size}px] h-[${size}px] ${className}`}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 10h4v4h-4v-4zM17 10h4v4h-4v-4zM3 10h4v4H3v-4z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
