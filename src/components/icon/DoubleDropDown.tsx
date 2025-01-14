import { iconProps } from '@/types/icon'

export default function DoubleDropDown({ size = 24, className }: iconProps) {
  return (
    <svg
      className={`w-[${size}px] h-[${size}px] ${className}`}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      //   style='transition: 0.3s; cursor: pointer; transform: rotate(180deg);'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 11.071L12.071 4l.025.025.025-.025 7.071 7.071-2.12 2.121-4.976-4.974-4.975 4.974L5 11.072zm0 7L12.071 11l.025.025.025-.025 7.071 7.071-2.12 2.121-4.976-4.975-4.975 4.975L5 18.072z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
