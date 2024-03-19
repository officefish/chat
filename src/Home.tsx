import { FC, ReactNode, useEffect, useState } from "react"
//import { Link } from "react-router-dom"

import { StyledScreen } from "./styled"
import { useNameValidator } from "./validator"
import NewNameDialog from "./name.dialog"
import { EMenuState, IMenuBlock } from './types'
import Menu from "./menu"
import Statistics from "./content/statistics"
import Billing from "./content/billing"
import NewAssistant from "./content/assistant/new"
import AssistantList from "./content/assistant/list"
import Chat from "./content/chat/current"
import NewChat from "./content/chat/new"
import ChatList from "./content/chat/list"
import NewFile from "./content/file/new"
import AllFiles from "./content/file/list"


interface IHome {
    username: string
    setUsername: (name: string) => void
}

const blocks = [
  { 
    summary: 'assistants', 
    open: true,
    items: [
      { mode: EMenuState.ASSISTANTS_NEW, title: 'new assistant' },
      { mode: EMenuState.ASSISTANTS_LIST, title: 'all assistants' },
    ],
  },
  { 
    summary: 'files', 
    open: false,
    items: [
      { mode: EMenuState.FILES_NEW, title: 'new file' },
      { mode: EMenuState.FILES_LIST, title: 'all files' },
    ],
  },
  { 
    summary: 'chats', 
    open: false,
    items: [
      { mode: EMenuState.CHATS_NEW, title: 'new chat' },
      { mode: EMenuState.CHATS_LIST, title: 'all chats' },
      { mode: EMenuState.CHATS_CURRENT, title: 'current chat' },
    ],
  },
  { 
    summary: 'statistics', 
    open: false,
    items: [
      { mode: EMenuState.STATS, title: 'statistics' },
    ],
  },
  { 
    summary: 'billing', 
    open: false,
    items: [
      { mode: EMenuState.BILLING, title: 'billing' },
    ],
  },


] satisfies IMenuBlock[]

const Home: FC<IHome> = (props) : ReactNode => {
  /* props */
  const { username, setUsername } = props 
  /* states */
  const [isNameDialogOpen, setIsNameDialogOpen] = useState(false)  
  const {errors, register, handleSubmit } = useNameValidator() 
  const [mode, setMode] = useState<EMenuState>(EMenuState.ASSISTANTS_NEW)

  /* use effect */
  useEffect(() => {
    if (!username || !username.length) {
        setIsNameDialogOpen(true)
    } else {
        setIsNameDialogOpen(false)
    }
  }, [username])

  /* handlers */
  const submitHandler = (data:any) => {
    setUsername(data.name)
  }  
  const handleSelect = (mode: EMenuState) => {
    console.log(mode)
    setMode(mode)
  }

  return (
      <StyledScreen>
        {!isNameDialogOpen && (<div className="w-screen h-screen grig grid grid-cols-5">
          <div className="bg-base-100 mt-11 pl-2">
            <Menu blocks={blocks} handleSelect={handleSelect} currentMode={mode} />
          </div>
          <div className="col-span-4">
            {renderAdminMode(mode)}
          </div>
        </div>)}
        <NewNameDialog
        errors={errors}
        handleSubmit={handleSubmit}
        register={register}
        isOpen={isNameDialogOpen}
        setIsOpen={setIsNameDialogOpen}
        submitHandler={submitHandler}
      />
      </StyledScreen>
  )
}

export default Home

const renderAdminMode = (mode: EMenuState) => {
  switch (mode) {
    case EMenuState.ASSISTANTS_NEW:
      return <NewAssistant />
    case EMenuState.ASSISTANTS_LIST:
      return <AssistantList />
    case EMenuState.CHATS_CURRENT:
      return <Chat />
    case EMenuState.CHATS_NEW:
      return <NewChat />
    case EMenuState.CHATS_LIST:
      return <ChatList />
    case EMenuState.FILES_LIST:
      return <AllFiles />    
    case EMenuState.FILES_NEW:
        return <NewFile />
    case EMenuState.STATS:
      return <Statistics /> 
    case EMenuState.BILLING:
        return <Billing /> 
    default:
      return <></>
  }
}
