interface ButtonProps {
  children: React.ReactNode // 버튼 내용
  onClick?: () => void // 클릭 이벤트 핸들러
  type?: 'button' | 'submit' | 'reset' // 버튼 타입
  className?: string // Tailwind 클래스를 추가로 전달받을 수 있음
  disabled?: boolean // 비활성화 여부
  variant?: 'primary' | 'secondary' | 'buy' | 'sell' // 버튼 스타일
}

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  variant = 'primary',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mobile:px-[10px] px-[12px] rounded transition duration-200 hover:opacity-80 text-small font-medium leading-[22px] h-[32px] min-w-[52px] min-h-[32px]
      ${
        variant === 'primary'
          ? 'bg-btnBg text-textOnYellow'
          : variant === 'secondary'
          ? 'bg-bg3 text-primaryText'
          : variant === 'buy'
          ? 'bg-buy text-white'
          : 'bg-sell text-white'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  )
}
