import { createContext, useState, ReactNode, useContext } from "react";
import { logoutUser, signinUser } from "../helpers/api.communicators";

type User = {
    id?: number;
    name: string;
    phone: string;
    role?: string;
    address?: string;
};

type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    signin: (name: string, phone: string) => Promise<void>;
    logout: () => Promise<void>;
};

export const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signin = async (name: string, phone: string) => {
        const data = await signinUser(name, phone);
        if (data) {
            setUser({ name: data.name, phone: data.phone });
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
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
