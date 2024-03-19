import { useChat, useSendMessage } from '@/services/remote.service'
import { FC, SyntheticEvent, useEffect, useState } from 'react'

interface IChatProps {}
const Chat: FC<IChatProps> = () => {
    
    const { data } = useChat(1000)

    const [, setMessages] = useState<any | null>() 

    useEffect(() => {
        //console.log(data)
        setMessages(data)
    }, [data])

    const { trigger } = useSendMessage()

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        trigger('some data')
    }
    
    return (
        <div>
            <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
            </div>
            <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
            </div>
            <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
            </div>
            <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
            </div>
            <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
            </div>
            <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
            </div>
            <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
            </div>
            <div className='absolute left-0 bottom-0 w-screen h-48 flex justify-center'>
                <form onSubmit={handleSubmit} className='pl-[20%] flex flex-col gap-4 w-[80%]'>
                    <textarea className="textarea textarea-primary"/>
                    <div className='w-full text-center pt-4'>
                        <input type='submit' className="btn btn-primary" /> 
                    </div>
                </form>
            </div>
        </div>
       
    ) 
}
export default Chat


