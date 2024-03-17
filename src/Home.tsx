import { FC, ReactNode, useEffect, useState } from "react"
//import { Link } from "react-router-dom"

import { StyledScreen } from "./styled"
import { useNameValidator } from "./validator"
import NewNameDialog from "./name.dialog"
import { EMenuState, IMenuItem } from './types'
import Menu from "./menu"
import Form from "./content/Form"
import FileUpload from "./content/FileUpload"
import Chat from "./content/Chat"


interface IHome {
    username: string
    setUsername: (name: string) => void
}

const items = [
  { mode: EMenuState.FORM, title: 'form' },
  { mode: EMenuState.UPLOAD, title: 'files' },
  { mode: EMenuState.CHAT, title: 'chat' },
] satisfies IMenuItem[]

const Home: FC<IHome> = (props) : ReactNode => {
  /* props */
  const { username, setUsername } = props 
  /* states */
  const [isNameDialogOpen, setIsNameDialogOpen] = useState(false)  
  const {errors, register, handleSubmit } = useNameValidator() 
  const [mode, setMode] = useState<EMenuState>(EMenuState.FORM)

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
          <div className="bg-base-100">
            <Menu items={items} handleSelect={handleSelect} currentMode={mode} />
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
    case EMenuState.FORM:
      return <Form />
    case EMenuState.UPLOAD:
      return <FileUpload />
    case EMenuState.CHAT:
      return <Chat /> 
    default:
      return <></>
  }
}
