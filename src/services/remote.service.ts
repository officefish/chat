import { useEffect } from "react"
import { IStandartResponse, useAxiosGetTrigger, useAxiosPostTrigger } from "./axios.service"

export const useNewAssistant = () => {
    const { data, trigger, serverError } = useAxiosPostTrigger<IStandartResponse>({
      route: 'messenger/assistants',
    })
  
    return { data, trigger, serverError }
}

export const useNewChat = () => {
  const { data, trigger, serverError } = useAxiosPostTrigger<IStandartResponse>({
    route: 'messenger/channels',
  })

  return { data, trigger, serverError }
}

export const useUploadFiles = () => {
    const { data, trigger, serverError } = useAxiosPostTrigger<IStandartResponse>({
      route: 'upload',
    })
  
    return { data, trigger, serverError }
}

export const useChat = (miniseconds: number) => {
    const { data, trigger, serverError } = useAxiosGetTrigger<IStandartResponse>({
      route: 'chat',
    })

    useEffect(() => {
        // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
        const timeoutId = setTimeout(() => {
          trigger()
          console.log('request')
        }, miniseconds)
    
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId)
      }, [miniseconds]) // Empty dependency array ensures the effect runs only once
    
  
    return { data, serverError }
}

export const useSendMessage = () => {
    const { data, trigger, serverError } = useAxiosPostTrigger<IStandartResponse>({
      route: 'chat',
    })
  
    return { data, trigger, serverError }
}