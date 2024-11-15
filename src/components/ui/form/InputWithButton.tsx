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
}

export function InputWithButton({
  className,
  type = 'submit',
  inputType = 'text',
  text = '',
  placeholder,
  variant = 'default',
  ...inputProps
}: InputWithButtonProps) {
  return (
    <div className={cn('flex w-full max-w-sm items-center space-x-2', className)}>
      <Input type={inputType} placeholder={placeholder} {...inputProps} />
      <Button type={type} variant={variant}>
        {text}
      </Button>
    </div>
  )
}
