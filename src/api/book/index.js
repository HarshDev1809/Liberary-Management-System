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

export const getBookByIdApi = async(id) => {
    try{
        const response = await axios.get(`http://localhost:8000/api/books/${id}`);
        return response;
    }catch(err){
        return err.response;
    }
}

export const editBookApi = async(id,newDetails) => {
    try{
        const token = sessionStorage.getItem("token");
        const response = await axios.put(`http://localhost:8000/api/books/edit/${id}`,newDetails,{
        headers: {
            "x-access-token": token,
    }},)
    return response;
    }catch(err){
        return err.response
    }
}