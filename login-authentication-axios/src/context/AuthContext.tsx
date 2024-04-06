import { SetStateAction, createContext, useState } from "react";

// ----------------- Types -----------------
type AuthContextType = null | {
    auth: authType,
    setAuth: React.Dispatch<SetStateAction<authType>>
}

interface AuthContextProviderType {
    children: React.ReactNode
}

type authType = null | {
    email: string,
    password: string,
    accessToken: string,
    role: string
}

// Auth Context
const AuthContext = createContext<AuthContextType>(null)
export default AuthContext

// Wrapper for Auth Context
export const AuthContextProvider: React.FC<AuthContextProviderType> = ({children}) => {

    const [auth, setAuth] = useState<authType>(null)
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}