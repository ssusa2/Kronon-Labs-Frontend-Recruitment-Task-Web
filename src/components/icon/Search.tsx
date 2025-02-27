import { iconProps } from '@/types/icon'

export default function SearchIcon({ size = 24, className }: iconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-[${size}px] h-[${size}px] ${className}`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
