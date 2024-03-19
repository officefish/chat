import { FC, SyntheticEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faComments, 
} from '@fortawesome/free-solid-svg-icons'
import { IChat } from '@/types'


interface IChatListItemProps extends IChat {
    index: number
    onCLick: (index: number) => void
}
const ChatListItem: FC<IChatListItemProps> = (props) => {

    const { name, source, index, onCLick } = props

    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault()
        onCLick(index)
    }
    
    return (
        <tr onClick={handleClick} className='cursor-pointer'>
            <th>
                <FontAwesomeIcon icon={faComments} />
            </th>
            <th>{index}</th> 
            <td>{name}</td> 
            <td>{source}</td> 
        </tr>         
    )
}
export default ChatListItem
