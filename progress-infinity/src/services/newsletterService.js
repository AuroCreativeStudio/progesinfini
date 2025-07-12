import axios from "axios";
import { API_URL } from "../config";

export const postNewsletter = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/api/newsletters`,data);
        return response.data;
    } catch (error) {
        console.error('Error fetching newsletters:', error);
        throw error; 
    }
};