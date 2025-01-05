import { createContext, useReducer } from 'react'

export const FacultyAuthContext = createContext()

export const facultyAuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { userFaculty: action.payload }
    case 'LOGOUT':
      return { userFaculty: null }
    default:
      return state
  }
}

export const FacultyAuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(facultyAuthReducer, { 
    userFaculty: null
  })

  console.log('FacultyAuthContext state:', state)
  
  return (
    <FacultyAuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </FacultyAuthContext.Provider>
  )

}
