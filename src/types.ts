enum EMenuState {
  FORM,
  UPLOAD,
  CHAT,
}

interface IMenuItem {
  mode: EMenuState
  title: string
}

export type { IMenuItem }
export { EMenuState }
