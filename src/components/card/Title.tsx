'use client'

interface TitleProps {
  text: string
  subtitle?: string
  actionButton?: React.ReactNode
}

export default function Title({ text, subtitle, actionButton }: TitleProps) {
  return (
    <div className='tabs min-h-[42px] h-[42px] border-b border-line flex items-center px-[16px] justify-between '>
      <div className='tab-header flex'>
        <div className='text-textPrimary border-transparent text-small  border-b-[3px] relative'>
          {text}
        </div>
      </div>

      {/* 액션 버튼 */}
      {actionButton && <div>{actionButton}</div>}
    </div>
  )
}
