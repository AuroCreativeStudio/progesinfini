import axios from "axios";
import { API_URL } from "../config";

export const postEnquireForm = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/api/enquires`,data);
        return response.data;
    } catch (error) {
        console.error('Error fetching Enquires:', error);
        throw error; 
    }
};