import InputField from '@/components/form/input.field'
import { useNewChat } from '@/services/remote.service'
import { IChat } from '@/types'
import { useNewChatValidator } from '@/validator'
import { FC, useEffect } from 'react'

interface INewChatProps {}
const NewChat: FC<INewChatProps> = () => {

    const { data, trigger } = useNewChat()

    useEffect(() => {
        console.log(data)
    }, [data])
    
    const submitHandler = (data: any) => {
        const chatData = { ...data } satisfies IChat
        trigger(chatData)
    }

    const { register, handleSubmit, errors } = useNewChatValidator ()

    useEffect(() => {
        console.log(errors)
    }, [errors])

    return (
        <div className="w-full h-screen flex items-start justify-start">
            <div className="card w-96 bg-primary text-primary-content mt-[1rem] ml-[1rem]">
                <form onSubmit={handleSubmit(submitHandler)} className='flex flex-row gap-2'>
                    <div className="card w-full bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title px-5">Channel.</h2>
                            <InputField
                                register={register}
                                errors={errors}
                                title={'Name'}
                            />
                            <InputField
                                register={register}
                                errors={errors}
                                title={'Source'}
                            /> 
                            <input type="submit" className="btn btn-secondary mt-4" /> 
                        </div>
                    </div>
                </form>
            </div>
    </div>
    )
}
export default NewChat
