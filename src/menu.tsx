import { FC, SyntheticEvent, useEffect, useState, PropsWithChildren } from 'react'
//import { useBackendAddressStore } from '@/client/providers'

import { EMenuState, IMenuBlock, IMenuItem } from './types'

interface IAdminMenu {
  blocks: IMenuBlock[]
  handleSelect: (mode: EMenuState) => void
  currentMode: EMenuState
}

const Menu: FC<IAdminMenu> = (props) => {
  const { handleSelect, currentMode, blocks } = props
  return (
    <nav className="menu px-4 py-0 text-base-content">
      {blocks?.map((block, i) => (
        <MenuBlock 
          key={i}
          currentMode={currentMode} 
          handleSelect={handleSelect}
          summary={block.summary}
          items={block.items} 
          open={block.open}
        />
      ))}
    </nav>
  )
}
export default Menu

interface MenuBlockProps {
  currentMode: EMenuState
  items: IMenuItem[]
  handleSelect: (mode: EMenuState) => void
  summary: string
  open:boolean
} 

const MenuBlock: FC<MenuBlockProps> = (props) => {
  
  const { items, handleSelect, currentMode, summary, open } = props
  
  return (
      <li className="bg-base-300">
        <Details startOpen={open} title={summary}>
          <ul>
            {items.map((item, i) => (
              <MenuItem
                title={item.title}
                mode={item.mode}
                handleClick={handleSelect}
                key={i}
                active={item.mode === currentMode}
              />
            ))}
          </ul>
        </Details>
      </li>
  )
} 

interface DetailsProps extends PropsWithChildren {
  title: string
  startOpen: boolean
}

const Details: FC<DetailsProps> = (props) =>{
  const { title, children, startOpen } = props
  const [open, setOpen] = useState(startOpen)
  const onClick = (e: SyntheticEvent) => {
    e.preventDefault()
    setOpen(!open)
  }
  return (
    <details {...(open ? { open: true } : {})}>
      <summary className='group' onClick={onClick}>{title}</summary>
      {open && children}
    </details>
  )
}

interface MenuItemProps {
  mode: EMenuState
  title: string
  handleClick: (mode: EMenuState) => void
  active: boolean
}
  
const MenuItem: FC<MenuItemProps> = (props) => {
    //
    const { mode, title, handleClick, active } = props

    const onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
      e.preventDefault()
      handleClick(mode)
    }
  
    return (
      <li className="my-1 group">
        <button className={`btn btn-sm text-center ${active ? "btn-primary" : ""}`} onClick={onClick}>{title}</button>
      </li>
    )
}