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
  ...inputProps
}: InputWithButtonProps) {
  return (
    <div className={cn('flex w-full max-w-sm items-center space-x-2', className)}>
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
