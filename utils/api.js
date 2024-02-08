import axios from "axios";

export const getProducts = async (url, params) => {
    try{
        const response = await axios.get(url);
        return response.data;
    } 
    catch (error) {
        console.log(error)
    }
    
}
