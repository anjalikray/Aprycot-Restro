import axios from 'axios'

export const signinUser = async (name: string, number: string) => {
    const response = await axios.post("/user/signin", { name, number });
    if (response.status !== 200) {
        throw new Error("Unable to login");
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
