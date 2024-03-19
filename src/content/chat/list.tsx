//import { usePostForm } from '@/services/remote.service'
import { IChat } from '@/types'
import { FC } from 'react'
import ChatListItem from './item'
//import { SyntheticEvent, useEffect } from 'react'

const data = [
    {
        name: "channel 1",
        source: "telegram",
    },
    {
        name: "channel 2",
        source: "whatsup",
    },
    {
        name: "channel 3",
        source: "vk.com",
    },
    {
        name: "channel4",
        source: "discord",
    },
    {
        name: "channel5",
        source: "profi.ru",
    },
] satisfies IChat[]

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

    const handleClick = (index: number) => {
        console.log(index)
    }
    
    return (
        <div className="w-full h-screen flex items-start justify-start">
           <div className="overflow-x-auto mt-[5.6rem] ml-[1rem]">
                <table className="table table-zebra bg-neutral">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th> 
                            <th>name</th> 
                            <th>source</th> 
                        </tr>
                    </thead> 
                    <tbody>
                        {data?.map((item, i) => (
                            <ChatListItem onCLick={handleClick} key={i} index={i} name={item.name} source={item.source}/>
                        ))}          
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ChatList
