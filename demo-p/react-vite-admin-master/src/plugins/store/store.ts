import { createContext, Dispatch } from "react";
import {USER, USER_MODIFY_ACTION} from "./actions/index";
export type STORE_TYPE = {
  user?: USER
}

export const Storage = {
  get<T>(val: string): T | undefined {
    const value = localStorage.getItem(val);
    return value ? JSON.parse(value) : undefined
  },
  set(val: string, value: Record<string, any>) {
    localStorage.setItem(val, JSON.stringify(value))
  }
}

export const store:STORE_TYPE = {
  user: Storage.get('user')
}

export const reducer = (state: STORE_TYPE, action: USER_MODIFY_ACTION) => {
  switch (action.type) {
    case 'CHANGE_USER':
      Storage.set('user', action.user)
      return {
        ...store,
        user: action.user
      }
    default:
      return state
  }
}

export const StoreContext = createContext<{ store: STORE_TYPE, dispatch: Dispatch<USER_MODIFY_ACTION>} | null>(null)