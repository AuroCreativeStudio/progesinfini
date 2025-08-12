import axios from "axios";
export const API_URL = "http://192.168.0.102:8000";

export const fetchBlog = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/blogs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Blogs:', error);
        throw error; 
    }
};
