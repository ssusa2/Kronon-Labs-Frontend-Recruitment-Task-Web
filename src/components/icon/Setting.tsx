import { iconProps } from '@/types/icon'

export default function SettingsIcon({ size = 24, className }: iconProps) {
  const getSizeClass = (size: number): string => {
    const sizeVariants: Record<number, string> = {
      24: 'w-[24px] h-[24px]',
      16: 'w-[16px] h-[16px]',
      12: 'w-[12px] h-[12px]',
    }
    return sizeVariants[size] || 'w-[24px] h-[24px]' // 기본값 처리
  }
  return (
    <svg
      className={`${getSizeClass(size)} ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.8 3h-3.6v2.027c-.66.17-1.285.431-1.858.77L6.91 4.363 4.363 6.91l1.434 1.433a7.157 7.157 0 00-.77 1.858H3v3.6h2.027c.17.66.431 1.285.77 1.858L4.363 17.09l2.546 2.546 1.433-1.434c.573.339 1.197.6 1.858.77V21h3.6v-2.027a7.157 7.157 0 001.858-.77l1.433 1.434 2.546-2.546-1.434-1.434a7.16 7.16 0 00.77-1.857H21v-3.6h-2.027a7.158 7.158 0 00-.77-1.858l1.434-1.433-2.546-2.546-1.434 1.434a7.156 7.156 0 00-1.857-.77V3zm-4.5 9a2.7 2.7 0 115.4 0 2.7 2.7 0 01-5.4 0z'
        fill='currentColor'
      />
    </svg>
  )
}
