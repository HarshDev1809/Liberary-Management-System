import axios from "axios";

export const createNewBookApi = async(bookDetails) => {
    try{
        const token = sessionStorage.getItem("token");
        const response = await axios.post(`http://localhost:8000/api/books/create`,bookDetails,{
            headers: {
                "x-access-token": token,
              },
        })
        return response;
    }catch(err){
        return err.response.data
    }
}

export const getBooksApi = async() => {
    try{
        const response = await axios.get(`http://localhost:8000/api/books`);
        return response;
    }catch(err){
        return err.response.data;
    }
}