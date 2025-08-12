import axios from "axios";
export const API_URL = "http://192.168.0.102:8000";


export const fetchWorkshop = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/workshops`);
        return response.data;
    } catch (error) {
        console.error('Error fetching workshops:', error);
        throw error; 
    }
};
