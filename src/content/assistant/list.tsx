//import { usePostForm } from '@/services/remote.service'
import { FC } from 'react'
//import { SyntheticEvent, useEffect } from 'react'

interface IAssistantListProps {}
const AssistantList: FC<IAssistantListProps> = () => {

    // const { data, trigger } = usePostForm()

    // useEffect(() => {
    //     console.log(data)
    // }, [data])
    
    // const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     console.log('handleSubmit')
    //     trigger()
    // }
    
    return (
        <div className="w-full h-screen flex items-center justify-center">
           Assistants list
        </div>
    )
}
export default AssistantList
