//import { usePostForm } from '@/services/remote.service'
import { FC } from 'react'
//import { SyntheticEvent, useEffect } from 'react'

interface IStatisticProps {}
const Statistics: FC<IStatisticProps> = () => {

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
           Statistics
        </div>
    )
}
export default Statistics
