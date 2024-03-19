//import { usePostForm } from '@/services/remote.service'
import { IAssistant } from '@/types'
import { FC } from 'react'
import AssistantListItem from './item'
//import { SyntheticEvent, useEffect } from 'react'

const data = [
    {
        role: "role 1",
        hello: "hello 1",
        task: "task 1",
        instruction: "instruction 1",
        gpt_model: 3,
    },
    {
        role: "role 2",
        hello: "hello 2",
        task: "task 2",
        instruction: "instruction 2",
        gpt_model: 3,
    },
    {
        role: "role 3",
        hello: "hello 3",
        task: "task 3",
        instruction: "instruction 3",
        gpt_model: 3,
    },
    {
        role: "role 4",
        hello: "hello 4",
        task: "task 4",
        instruction: "instruction 4",
        gpt_model: 3,
    },
    {
        role: "role 5",
        hello: "hello 5",
        task: "task 5",
        instruction: "instruction 5",
        gpt_model: 3,
    },
] satisfies IAssistant[]


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
        <div className="w-full h-screen flex items-start justify-start">
           <div className="overflow-x-auto mt-[5.6rem] ml-[1rem]">
                <table className="table table-zebra bg-neutral">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th> 
                            <th>role</th> 
                            <th>greeting</th> 
                            <th>task</th> 
                            <th>gpt model</th> 
                            <th>explanation</th> 
                        </tr>
                    </thead> 
                    <tbody>
                        {data?.map((item, i) => (
                            <AssistantListItem key={i} index={i} item={item} />
                        ))}          
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AssistantList
