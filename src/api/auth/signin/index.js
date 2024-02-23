import axios from "axios";

export const signInApi = async(userDetails) => {
    try{
        const response = await axios.post(`http://localhost:8000/api/auth/signin`,userDetails);
        return response;
    }catch(err){
        return err;
    }
}