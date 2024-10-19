import { createContext, useState, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_ENDPOINTS } from "@/config/api";
import { AXIOS_INSTANCE } from "@/config/axios";
import toast from "react-hot-toast";

type User = {
    id?: number;
    name: string;
    email: string;
    phone?: string;
    role?: string;
    address?: string;
};

type UserAuth = {
    isAuthenticated: boolean;
    user: User | null;
    error: string | null;
    signup: (name: string, email: string, password: string , company?: string) => Promise<void>;
    signin: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const signin = async (email: string, password: string) => {
        try {
            const res = await AXIOS_INSTANCE.post(AUTH_ENDPOINTS.LOGIN, {
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            toast.success("Signed In Successfully", { id: "signin" });
            const data = res.data.data;
            // console.log(data);
            // Store tokens in cookies
            // Cookies.set('refreshToken', data.refresh, { expires: 7 }); // 7 days expiry
            // Cookies.set('accessToken', data.access, { expires: data.expired_in_hours / 24 });
            navigate("/user-dashboard");
            setUser(() => ({ email: data.email, name: data.name }));
            setIsAuthenticated(true);
        } catch (error: any) {
            // toast.error("Couldn't signin with the provided credentials", { id: "signin" });
            toast.error(error.response.data.message, { id: "signin" });
            return error;
        }
    };

    const signup = async (email: string, password: string, name: string, company?: string) => {
        try {
            const reqBody = {
                email,
                password,
                name,
                company,
            }
            const res = await AXIOS_INSTANCE.post(AUTH_ENDPOINTS.SIGNUP, reqBody, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            toast.success("Signed Up Successfully", { id: "signup" });
            navigate("/signin");
            console.log(res.data);
            const data = res.data;
            setUser({ ...data.user });
            setIsAuthenticated(true);
            setError(res.data.message);
            toast.error(res.data.message, { id: "signup" });
        } catch (error: any) {
            toast.error("Couldn't sign up", { id: "signup" });
            // console.log(error);
            toast.error(error.response.data.message, { id: "signup" });
            throw error;
        }
    };

    const logout = async () => {
        
    };

    const value = {
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        signin,
        signup,
        logout,
        error,
        setError,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
