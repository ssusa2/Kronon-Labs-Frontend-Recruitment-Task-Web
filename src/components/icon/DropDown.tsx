import { iconProps } from '@/types/icon'

export default function DropDownIcon({ size = 24, className }: iconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={` w-[${size}px] h-[${size}px] ${className}`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
