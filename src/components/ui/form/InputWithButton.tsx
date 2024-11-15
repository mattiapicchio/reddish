import { cn } from '@/utils/cn'
import { Button, ButtonProps } from '../Button'
import { Input } from './Input'

type InputWithButtonProps = {
  className?: string
  inputClassName?: string
  inputType?: string
  text: string
  variant?: ButtonProps['variant']
  type?: 'submit' | 'button' | 'reset'
  placeholder: string
  value?: string
  buttonDisabled?: boolean
  ref?: React.RefObject<HTMLInputElement>
  onButtonClick?: () => void
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputWithButton({
  className,
  type = 'submit',
  inputType = 'text',
  text = '',
  placeholder,
  variant = 'default',
  value,
  buttonDisabled = false,
  onButtonClick,
  onInputChange,
  ref,
  ...inputProps
}: InputWithButtonProps) {
  return (
    <div className={cn('flex w-full max-w-sm items-center space-x-2', className)} ref={ref}>
      <Input
        type={inputType}
        placeholder={placeholder}
        {...inputProps}
        onChange={onInputChange}
        value={value}
      />
      <Button type={type} variant={variant} onClick={onButtonClick} disabled={buttonDisabled}>
        {text}
      </Button>
    </div>
  )
}
