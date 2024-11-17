import { cn } from '@/utils/cn'
import { Button, ButtonProps } from '@/components/ui/Button'
import { Input } from '@/components/ui/form/Input'
import { SendIcon } from '@/components/icons/SendIcon'

type InputWithButtonProps = {
  className?: string
  inputClassName?: string
  inputType?: string
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
        <SendIcon className="text-white" />
      </Button>
    </div>
  )
}
