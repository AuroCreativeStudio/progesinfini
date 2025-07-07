import axios from "axios";
import { API_URL } from "../config";

export const postContactForm = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/api/contacts`,data);
        return response.data;
    } catch (error) {
        console.error('Error fetching Contact:', error);
        throw error; 
    }
};