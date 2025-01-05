import { createContext, useReducer } from 'react'

export const AdminAuthContext = createContext()

export const adminAuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { userAdmin: action.payload }
    case 'LOGOUT':
      return { userAdmin: null }
    default:
      return state
  }
}

export const AdminAuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminAuthReducer, { 
    userAdmin: null
  })

  console.log('AdminAuthContext state:', state)
  
  return (
    <AdminAuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AdminAuthContext.Provider>
  )

}