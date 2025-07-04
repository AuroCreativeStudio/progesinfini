import axios from "axios";
import { API_URL } from "../config";

export const fetchFacilitator = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/facilitator`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Facilitator:', error);
        throw error; 
    }
};
