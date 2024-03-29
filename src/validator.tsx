import {
    useForm,
  } from 'react-hook-form'
  import { z } from 'zod'
  import { zodResolver } from '@hookform/resolvers/zod'

export function useNameValidator() {
    const name = {
      name: z
        .string({
          required_error: 'Name is required',
          invalid_type_error: 'Name must be a string',
        })
        .min(4, { message: 'Must be 4 or more characters long' })
        .max(24, { message: 'Must be 24 or less characters long' }),
    }

    const schema = z.object({
      ...name,
    })
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(schema),
    })
  
    return { register, handleSubmit, errors }
  }

  export function useNewAssistantValidator() {
    
    const schema = z.object({
      role: z.string(),
      hello: z.string(),
      task: z.string(),
      instruction: z.string(),
    })
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(schema),
    })
  
    return { register, handleSubmit, errors }
  }

  export function useNewChatValidator() {
    
    const schema = z.object({
      name: z.string(),
      source: z.string(),
    })
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(schema),
    })
  
    return { register, handleSubmit, errors }
  }