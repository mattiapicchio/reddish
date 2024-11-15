'use client'

import { Input } from './Input'
import { cn } from '@/utils/cn'
import { InputHTMLAttributes } from 'react'

type InputWithLabelProps = {
  className?: string
  inputClassName?: string
  label: string
  title: string
  type?: string
  placeholder: string
} & InputHTMLAttributes<HTMLInputElement>

export default function InputWithLabel({
  className,
  inputClassName,
  label,
  title,
  type = 'text',
  placeholder,
  ...inputProps
}: InputWithLabelProps) {
  return (
    <div className={cn('grid w-full max-w-sm items-center gap-1.5', className)}>
      <label htmlFor={title} className="text-label text-brand-orange">
        {label}
      </label>
      <Input
        className={cn('text-brand-blue', inputClassName)}
        type={type}
        id={title}
        placeholder={placeholder}
        {...inputProps}
      />
    </div>
  )
}
