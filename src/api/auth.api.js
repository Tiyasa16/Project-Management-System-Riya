import axios from "axios";

const BASE_URL = "https://pms-l909.onrender.com/api/v1";

export const loginUser = async (data) => {
    const response = await axios.post(
        `${BASE_URL}/auth/login`,
        data,
        { withCredentials: true }
    );

   
    const token = response.data.data.accessToken;
    localStorage.setItem("token", token);
    console.log("Login response:", response.data);
    return response.data;
    
};