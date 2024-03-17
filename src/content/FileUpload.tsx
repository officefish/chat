import { useUploadFiles } from '@/services/remote.service'
import { FC, SyntheticEvent, useEffect } from 'react'

interface IFileUploadProps {}
const FileUpload: FC<IFileUploadProps> = () => {
    
    const { data, trigger } = useUploadFiles()

    useEffect(() => {
        console.log(data)
    }, [data])

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('handleSubmit')
        trigger()
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="card w-96 bg-primary text-primary-content">
                <form onSubmit={handleSubmit}  className="card-body">
                    <h2 className="card-title px-5">File Upload!</h2>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    <input type="submit" className="btn btn-secondary" /> 
                </form>
            </div>
        </div>
    )
}
export default FileUpload
