import { iconProps } from '@/types/icon'

export default function HelpIcon({ size = 24, className = '' }: iconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      className={`w-[${size}px] h-[${size}px] ${className}`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.5 3H19v18H6.5v-2.5H4V16h2.5v-2.75H4v-2.5h2.5V8H4V5.5h2.5V3zm6.25 4.75c-.69 0-1.25.56-1.25 1.25v.5H9V9a3.75 3.75 0 116.402 2.652L14 13.053V14.5h-2.5v-2.482l2.134-2.134a1.25 1.25 0 00-.884-2.134zM11.5 19v-2.5H14V19h-2.5z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
