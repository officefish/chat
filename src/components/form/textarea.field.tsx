import { FC, SyntheticEvent, useEffect, useState } from 'react'
import { FormFieldProps } from './types'

import tw from 'tailwind-styled-components'
import { ErrorSVG } from '../svg'

const StyledTextarea = tw.textarea`
textarea textarea-bordered textarea-md w-full max-w-xs text-base-content px-5
`

const TextareaField: FC<FormFieldProps> = ({
  title,
  tag,
  value,
  placeholder,
  register,
  errors,
  onChange,
}) => {
  tag = tag || title.toLowerCase()
  const [fieldValue, setFieldValue] = useState<string | number | undefined>(value || '')
  const handleChange = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setFieldValue(e.currentTarget.value)
    onChange && onChange(e.currentTarget.value)
  }

  useEffect(() => {
    setFieldValue(value)
  }, [value])

  return (
    <>
        <label className="label" htmlFor={tag}>
            <span className="label-text text-base-100 text-sm px-5">{title}</span>
        </label>
        <StyledTextarea
          {...register(tag)}
          id={tag}
          value={fieldValue}
          onChange={handleChange}
          placeholder={placeholder ? placeholder : `valid ${tag}`}
          className={`
            ${errors[tag] && 'invalid'}
            `}/>
        
        {errors[tag]?.message && (
        <div role="alert" className="alert alert-error">
            <ErrorSVG />
            <span>{errors[tag]?.message?.toString()}</span>
        </div>
        )}
    </>
  )
}
export default TextareaField