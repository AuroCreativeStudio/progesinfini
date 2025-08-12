import axios from "axios";
export const API_URL = "http://192.168.0.102:8000";


export const postEnquireForm = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/api/enquires`,data);
        return response.data;
    } catch (error) {
        console.error('Error fetching Enquires:', error);
        throw error; 
    }
};