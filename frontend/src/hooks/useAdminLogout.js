import { useAdminAuthContext } from "./useAdminAuthContext"
import { useNavigate } from "react-router-dom";

export const useAdminLogout = () => {
    const { dispatch } = useAdminAuthContext()
    const navigate = useNavigate();

    const Adminlogout = () => {
        // remove user
        localStorage.removeItem('userAdmin')

        // dispatch logout 
        dispatch({ type: 'LOGOUT' })
        navigate('/');
    }

    return { Adminlogout }
}