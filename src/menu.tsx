import { FC, SyntheticEvent } from 'react'
//import { useBackendAddressStore } from '@/client/providers'

import { EMenuState, IMenuItem } from './types'

interface IAdminMenu {
  items: IMenuItem[]
  handleSelect: (mode: EMenuState) => void
  currentMode: EMenuState
}

const Menu: FC<IAdminMenu> = (props) => {
  const { items, handleSelect, currentMode } = props

  return (
    <nav className="menu px-4 py-0 text-base-content">
      <li className="bg-base-300">
        <details open>
          <summary className="group">Main menu</summary>
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
        </details>
      </li>
    </nav>
  )
}
export default Menu

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