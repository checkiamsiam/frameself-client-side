import { login } from "./action.type.constants"

export const setUser = (user) => {
  return {
    type : login , 
    payload : user ,
  }
}