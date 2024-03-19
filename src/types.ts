enum EMenuState {
  ASSISTANTS_NEW,
  ASSISTANTS_LIST,
  CHATS_NEW,
  CHATS_CURRENT,
  CHATS_LIST,
  FILES_NEW,
  FILES_LIST,
  STATS,
  BILLING
}

interface IMenuItem {
  mode: EMenuState
  title: string
}

interface IMenuBlock {
  summary: string
  items: IMenuItem[]
  open: boolean
}

interface IMenu {
   blocks: IMenuBlock[]  
}

export type { IMenuItem, IMenuBlock, IMenu }
export { EMenuState }

export interface IAssistant {
  id?: number | string
  role: string
  hello: string
  task: string
  instruction: string
  gpt_model?: number 
}
