interface IconButtonProps {
  icon: React.ReactNode
  onClick?: () => void
  className?: string
  hiddenOn?: 'mobile' | 'tablet' | 'pc' // 특정 화면에서 숨기기
}

export default function IconButton({
  icon,
  onClick,
  className = '',
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-textPrimary hover:text-primaryYellow ${className}`}
    >
      {icon}
    </button>
  )
}
