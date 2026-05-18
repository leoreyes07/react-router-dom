import React from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";


const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);

    const login = ({ username }, from) => {
        setUser({ username });
        navigate(from || '/profile');
    };

    const logout = () => {
        setUser(null)
        navigate('/');
    };

    const auth = { user, login, logout };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}

function AuthRoute(props) {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return props.children;
}

export {
    AuthProvider,
    useAuth,
    AuthRoute,
}