import axios from "axios";
import { API_URL } from "../config";

export const fetchWorkshop = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/workshops`);
        return response.data;
    } catch (error) {
        console.error('Error fetching workshops:', error);
        throw error; 
    }
};
