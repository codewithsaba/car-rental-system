import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(
        () => localStorage.getItem("isLoggedIn") === "true"
    );

    function loginUser(email) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);

        setIsLoggedIn(true);
    }

    function logoutUser() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");

        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                loginUser,
                logoutUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}