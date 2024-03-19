import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUserSecret, 
} from '@fortawesome/free-solid-svg-icons'
import { IAssistant } from '@/types'


interface IAssistantListItemProps {
    index: number
    item: IAssistant
    //onCLick: (index: number) => void
}
const AssistantListItem: FC<IAssistantListItemProps> = (props) => {

    const { index, item } = props

    // const handleClick = (e: SyntheticEvent) => {
    //     e.preventDefault()
    //     //onCLick(index)
    // }
    
    return (
        <tr>
            <th>
                <FontAwesomeIcon icon={faUserSecret} />
            </th>
            <th>{index}</th> 
            <td>{item.role}</td> 
            <td>{item.hello}</td> 
            <td>{item.task}</td> 
            <td>{item.gpt_model}</td> 
            <td>{item.instruction}</td>
        </tr>         
    )
}
export default AssistantListItem
