import DownArrowIcon from '../icon/DownArrow'
interface StepperInputProps {
  label: string
  step: string | number
  min: string | number
  suffix: string
  value: string
  onChange: (value: string) => void
}

export default function StepperInput({
  label,
  step,
  min,
  suffix,
  value,
  onChange,
}: StepperInputProps) {
  const stepString = step.toString()
  const decimalPlaces = stepString.includes('.')
    ? stepString.split('.')[1].length
    : 0

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    if (+newValue >= +min || newValue === '') {
      onChange(newValue)
    }
  }

  return (
    <div className='form flex relative pl-[8px] pr-[32px] gap-[8px] group hover:border-primaryHover border-line border-[1px] items-center  text-primaryText flex-nowrap  h-[40px] rounded-[8px] appearance-none'>
      <div className='prefix text-tertiaryText text-small font-[500] leading-[22px]'>
        {label}
      </div>
      <input
        className='text-small relative leading-[22px] font-[500] caret-primaryYellow flex-1 min-w-0 w-auto inline-block border-none outline-none text-end bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
        value={value}
        step={step}
        min={min}
        type='number'
        onChange={handleInputChange} // 입력 이벤트 처리
      />
      <div className=' suffix text-primaryText text-small font-[500] leading-[22px]'>
        {suffix}
      </div>
      <div className='absolute py-[1px] top-0 bottom-0 flex flex-col end-0  h-full border-l-[1px] border-inputLine'>
        <div
          className='up  items-center cursor-pointer flex h-[50%] justify-center px-[4px]'
          onClick={() => onChange((+value + +step).toFixed(decimalPlaces))}
        >
          <DownArrowIcon
            className='rotate-180 hover:text-primaryText text-iconNormal'
            size={16}
          />
        </div>
        <div
          onClick={() => {
            onChange(Math.max(+value - +step, +min).toFixed(decimalPlaces))
          }}
          className='down border-t-[1px] cursor-pointer border-inputLine  items-center flex h-[50%] justify-center px-[4px]'
        >
          <DownArrowIcon
            size={16}
            className='hover:text-primaryText text-iconNormal'
          />
        </div>
      </div>{' '}
    </div>
  )
}
