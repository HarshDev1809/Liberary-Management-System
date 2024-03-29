import axios from "axios";

export const createNewCustomerApi = async(customerDetails) => {
    try{
        const token = sessionStorage.getItem("token");
        const response = await axios.post(`http://localhost:8000/api/customers/register`,customerDetails,{
            headers: {
                "x-access-token": token,
              },
        })
        console.log(response)
        return response;
    }catch(err){
        return err.response.data
    }
}

export const getCustomerApi = async(query) => {
    try{
        const token = sessionStorage.getItem("token");
        const response = await axios.get(`http://localhost:8000/api/customers/user`,{
        params : query
        })
        console.log(response)
        return response;
    }catch(err){
        return err.response.data
    }
}

export const getCustomerByIdApi = async(id)=>{
    try{
        const response = await axios.get(`http://localhost:8000/api/customers/user/${id}`)
        return response;
    }catch(err){
        return err
    }
}

export const issueBookApi = async(details)=>{
    try{
        const token = sessionStorage.getItem("token");
        const response = await axios.put(`http://localhost:8000/api/customers/issue`,details,{
            headers: {
                "x-access-token": token,
              }
        })
        return response;
    }catch(err){
        return err
    }
}