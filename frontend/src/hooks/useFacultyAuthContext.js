import { FacultyAuthContext } from "../context/FacultyAuthContext"
import { useContext } from "react"

export const useFacultyAuthContext = () => {
    const context = useContext(FacultyAuthContext)

    if (!context) {
        throw Error('useFacultyAuthContext must be used inside an FacultyAuthContextProvider')
    }

    return context
}