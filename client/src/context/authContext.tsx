import { createContext, useState, ReactNode, useContext } from "react";
import { logoutUser, signinUser, signupUser } from "../Helpers/api.communicators";

type User = {
    id?: number;
    name: string;
    email: string;
    phone?: string;
    role?: string;
    address?: string;
};

type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    signup: (name: string, email: string, password: string) => Promise<void>;
    signin: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signin = async (email: string, password: string) => {
        const data = await signinUser(email, password);
        if (data) {
            setUser({ email: data.name, name: data.name });
            setIsLoggedIn(true);
        }
    };

    const signup = async (name: string, email: string, password: string) => {
        const data = await signupUser(name ,email, password);
        if (data) {
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
        }
    };

    const logout = async () => {
        const data = await logoutUser();
        if (data) {
            setUser(null);
            setIsLoggedIn(false);
            window.location.reload();
        }
    };

    const value = {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        signin,
        signup,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
