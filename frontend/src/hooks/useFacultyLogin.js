import { useState } from 'react'
import { useFacultyAuthContext } from './useFacultyAuthContext' 

export const useFacultyLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useFacultyAuthContext()

  const facultylogin = async (name,number,initial,email, password ) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/userFaculty/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name,number,initial,email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user 
      localStorage.setItem('userFaculty', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading 
      setIsLoading(false)
    }
  }

  return { facultylogin, isLoading, error }
}