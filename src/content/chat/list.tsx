//import { usePostForm } from '@/services/remote.service'
import { FC } from 'react'
//import { SyntheticEvent, useEffect } from 'react'

interface IChatListProps {}
const ChatList: FC<IChatListProps> = () => {

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
           Chats list
        </div>
    )
}
export default ChatList
