//import { usePostForm } from '@/services/remote.service'
import { FC } from 'react'
//import { SyntheticEvent, useEffect } from 'react'
import { IFile } from '@/types'
import FileListItem from './item'

const data = [
    {
        id: "uuid-1111-1111-1111",
        file: "file1.json",
    },
    {
        id: "uuid-2222-2222-2222",
        file: "file2.json",
    },
    {
        id: "uuid-3333-3333-3333",
        file: "file3.json",
    },
    {
        id: "uuid-4444-4444-4444",
        file: "file4.json",
    },
    {
        id: "uuid-5555-5555-5555",
        file: "file5.json",
    },
] satisfies IFile[]

interface IFileListProps {}
const AllFiles: FC<IFileListProps> = () => {

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
                            <th>id</th> 
                            <th>file</th> 
                        </tr>
                    </thead> 
                    <tbody>
                        {data?.map((item, i) => (
                            <FileListItem key={i} index={i} id={item.id} file={item.file} />
                        ))}          
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AllFiles
