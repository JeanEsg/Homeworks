import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [logged, setUser] = useState(null)

    const login = (username) => {
        setUser(username)
    }
    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ logged, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
  };