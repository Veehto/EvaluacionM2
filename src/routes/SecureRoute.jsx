import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const SecureRoute = ({ children, allowedRoles }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    };

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/" />;
    };

    return children;
};

export default SecureRoute;
