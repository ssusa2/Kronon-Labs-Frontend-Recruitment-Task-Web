import { iconProps } from '@/types/icon'

export default function StarIcon({ size = 24, className }: iconProps) {
  return (
    <svg
      className={` w-[${size}px] h-[${size}px] ${className}`}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.173 3.007L12.768 3l2.41 5.11 5.326.831.496 1.495-3.89 4.013.895 5.636-1.298.915-4.735-2.648L7.236 21l-1.296-.923.946-5.632L3 10.436l.496-1.495 5.322-.83 2.355-5.104z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
