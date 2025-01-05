import { useFacultyAuthContext } from "./useFacultyAuthContext";
import { useNavigate } from "react-router-dom";

export const useFacultyLogout = () => {
    const { dispatch } = useFacultyAuthContext();
    const navigate = useNavigate();

    const facultyLogout = () => {
        // remove user 
        localStorage.removeItem('userFaculty');

        // dispatch logout 
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    };

    return { facultyLogout };
};