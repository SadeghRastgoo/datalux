import { FC } from "react"

export interface newItemInterface {
  name: string
  state: string
  employee: number | string
}

export interface appFunctionalitiesInterface {
  changeAppActionState: (stateAction: string) => void
  getAppActionState: () => string
  getAppData: () => appDataInterface[]
  addNewItem: (inputs: newItemInterface) => void
  deleteItem: (itemId: number, itemName: string) => void
  toastify: (companyName: string, action: string, type: string) => void
}

export interface appDataInterface {
  title: string
  headers: string[]
  data: {id: number, name: string, state: string, employee: number | string}[]
}