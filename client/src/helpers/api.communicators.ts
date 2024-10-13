import axios from 'axios'

export const signinUser = async (email: string, password: string) => {
    const response = await axios.post("/user/signin", { email, password });
    if (response.status !== 200) {
        throw new Error("Unable to login");
    }
    const data = await response.data;
    return data;
};

export const signupUser = async (name: string , email: string, password: string) => {
    const response = await axios.post("/user/signup", { name , email, password });
    if (response.status !== 201) {
        throw new Error("Unable to signup");
    }
    const data = await response.data;
    return data;
};

export const logoutUser = async () => {
    const response = await axios.get("/user/logout");
    if (response.status !== 200) {
        throw new Error("Unable to logout");
    }
    const data = await response.data;
    return data;
};
