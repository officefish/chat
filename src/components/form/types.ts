//import { FormEvent } from 'react'

import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
} from 'react-hook-form'
export interface FormProps {
  title: string
  handleSubmit: UseFormHandleSubmit<FieldValues>
  submitHandler: SubmitHandler<FieldValues>
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

export interface FormFieldProps {
  title: string
  tag?: string
  placeholder?: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  value?: string | number
  onChange?: (data: any) => void
}