import { useState } from 'react'
import { useAdminAuthContext } from './useAdminAuthContext' 

export const useAdminLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAdminAuthContext()

  const adminlogin = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/userAdmin/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user 
      localStorage.setItem('userAdmin', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading 
      setIsLoading(false)
    }
  }

  return { adminlogin, isLoading, error }
}