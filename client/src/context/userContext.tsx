import { createContext, useState, ReactNode, useContext } from "react";

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

    const signin = async () => {
    };

    const logout = async () => {};

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
