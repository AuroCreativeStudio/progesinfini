import axios from "axios";
export const API_URL = "http://192.168.0.102:8000";

export const postContactForm = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/api/contacts`,data);
        return response.data;
    } catch (error) {
        console.error('Error fetching Contact:', error);
        throw error; 
    }
};