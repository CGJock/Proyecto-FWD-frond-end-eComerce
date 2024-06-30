import { Navigate } from "react-router-dom";


//high order component
const ProtectedRoutes = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user")) || null; //si no esxiste el local storage, user = null
    if (user === "ADMIN") {
        return children
    } else{
        return <Navigate to = "/login" />
    }
}

    export default ProtectedRoutes