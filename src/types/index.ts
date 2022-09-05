import { FC } from "react"

export interface newItemInterface {
  name: string
  state: string
  employee: number | string
}

export interface appFunctionalitiesInterface {
  changeAppActionState: (stateAction: string) => void
  toggleDarkMode: () => void
  getAppActionState: () => string
  getAppData: () => appDataInterface[]
  addNewItem: (inputs: newItemInterface) => void
  deleteItem: (itemId: number, itemName: string) => void
  editItem: (itemId: number | undefined, newData: { name: string, state: string, employee: number }) => void
  setSelectedData: (data: {id: number,name: string, state: string, employee: number | string}) => void
  getSelectedData: () => {id: number | undefined, name: string, state: string, employee: number | string}
  toastify: (companyName: string, action: string, type: string) => void
}

export interface appDataInterface {
  title: string
  headers: string[]
  data: {id: number, name: string, state: string, employee: number | string}[]
}