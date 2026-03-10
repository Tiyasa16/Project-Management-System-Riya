import axios from "axios";

const API_URL = "https://pms-l909.onrender.com/api/v1/project";


export const createProject = async (projectData) => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.post(
            API_URL,
            projectData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Create Project Error:", error.response?.data || error.message);
        throw error;
    }
};