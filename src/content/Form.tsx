import { usePostForm } from '@/services/remote.service'
import { FC, SyntheticEvent, useEffect } from 'react'

interface IFormProps {}
const Form: FC<IFormProps> = () => {

    const { data, trigger } = usePostForm()

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
                <form onSubmit={handleSubmit} className="card-body">
                    <h2 className="card-title px-5">Put some data!</h2>
                    <div className="label">
                        <span className="label-text text-base-100 px-5">Field 1</span>
                    </div>
                    <input type="text" className="file-input file-input-bordered w-full max-w-xs text-base-content px-5" />
                    <div className="label">
                        <span className="label-text text-base-100 px-5">Field 1</span>
                    </div>
                    <input type="text" className="file-input file-input-bordered w-full max-w-xs text-base-content px-5" />
                    <div className="label">
                        <span className="label-text text-base-100 px-5">Field 1</span>
                    </div>
                    <input type="text" className="file-input file-input-bordered w-full max-w-xs text-base-content px-5" />
                    <div className="label">
                        <span className="label-text text-base-100 px-5">Field 1</span>
                    </div>
                    <input type="text" className="file-input file-input-bordered w-full max-w-xs text-base-content px-5" />
                    <div className="label">
                        <span className="label-text text-base-100 px-5">Field 1</span>
                    </div>
                    <input type="text" className="file-input file-input-bordered w-full max-w-xs text-base-content px-5" />
                    <input type="submit" className="btn btn-secondary" /> 
                </form>
            </div>
        </div>
    )
}
export default Form
