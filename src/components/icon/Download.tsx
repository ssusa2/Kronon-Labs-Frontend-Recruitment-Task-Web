import { iconProps } from '@/types/icon'

export default function DownloadIcon({ size = 24, className }: iconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={`w-[${size}px] h-[${size}px] ${className}`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.5 6V9H4.5V3H5H7.5H16H19V6V9H16V6H7.5ZM5 21H4.5V15H7.5V18H16V15H19V18V21H16H7.5H5ZM13.5088 12.0024L16.0176 12.0078L12.0088 16.0166L8 12.0078L10.5088 11.9832V8H13.5088V12.0024Z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
