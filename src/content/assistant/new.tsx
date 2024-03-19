import InputField from '@/components/form/input.field'
import TextareaField from '@/components/form/textarea.field'
import { useNewAssistant } from '@/services/remote.service'
import { IAssistant } from '@/types'
import { useNewAssistantValidator } from '@/validator'
import { FC, useEffect } from 'react'

interface INewAssistantProps {}
const NewAssistant: FC<INewAssistantProps> = () => {

    const { data, trigger } = useNewAssistant()

    useEffect(() => {
        console.log(data)
    }, [data])
    
    const submitHandler = (data: any) => {
        const assistantData = { ...data } satisfies IAssistant
        assistantData.id = 0
        assistantData.gpt_model = 0
        console.log(assistantData)
        trigger(assistantData)
    }

    const { register, handleSubmit, errors } = useNewAssistantValidator ()

    useEffect(() => {
        console.log(errors)
    }, [errors])
    
    return (
        <div className="w-full h-screen">
            <form onSubmit={handleSubmit(submitHandler)} className='flex flex-row gap-2'>
                <div className="card w-full bg-primary text-primary-content my-4 mx-4">
                    <div className="card-body">
                        <h2 className="card-title px-5">Role.</h2>
                        <InputField
                        register={register}
                        errors={errors}
                        title={'Role'}
                        />
                        <InputField
                        register={register}
                        errors={errors}
                        title={'Greeting'}
                        tag={'hello'}
                        /> 
                        <InputField
                        register={register}
                        errors={errors}
                        title={'Task'}
                        />
                         <TextareaField
                        register={register}
                        errors={errors}
                        title={'Explanation'}
                        tag={'instruction'}
                        />  
                        <input type="submit" className="btn btn-secondary mt-4" /> 
                    </div>
                </div>
                <div className="card w-full h-40 bg-primary text-primary-content mt-16 mx-4">
                    <div className="card-body px-4 pt-5">
                        <div className="label">
                            <span className="label-text text-base-100 px-5">Gpt model.</span>
                        </div>
                        <input type="text" className="file-input file-input-bordered w-full max-w-xs text-base-content px-5" />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default NewAssistant
