import axios from "axios";

const api = axios.create({
    baseURL: "https://pms-l909.onrender.com/api/v1",
    withCredentials: true, 
});

export default api;
