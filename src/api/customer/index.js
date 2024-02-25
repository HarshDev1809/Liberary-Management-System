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