//import { usePostForm } from '@/services/remote.service'
import { FC } from 'react'
//import { SyntheticEvent, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFile, 
} from '@fortawesome/free-solid-svg-icons'
import { IFile } from '@/types'


interface IFileListItemProps extends IFile {
    index: number
}
const FileListItem: FC<IFileListItemProps> = (props) => {

    const { id, file, index } = props
    
    return (
        <tr>
            <th>
                <FontAwesomeIcon icon={faFile} />
            </th>
            <th>{index}</th> 
            <td>{id}</td> 
            <td>{file}</td> 
        </tr>         
    )
}
export default FileListItem
