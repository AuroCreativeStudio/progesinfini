import axios from "axios";
import { API_URL } from "../config";

export const fetchBlog = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/blogs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Blogs:', error);
        throw error; 
    }
};
