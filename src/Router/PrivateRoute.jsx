import { Navigate } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider"
import { useContext } from "react";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="block mx-auto loading loading-dots loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
}

export default PrivateRoute