import { useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import "./NewCustomer.css";
import { createNewCustomerApi } from "../../api/customer";
import { useNavigate } from "react-router-dom";

function NewCustomer() {

    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [emailId,setEmailId] = useState("");
    const customerDetail = {
        name : name,
        phoneNumber : phoneNumber,
        emailId : emailId
    }

    const updateName = (e)=>{
        setName(e.target.value);
    }

    const updatePhoneNumber = (e)=>{
        if(e.target.value.length > 10){
            window.alert("Phone Number Can only be of 10 Digits! PLease Enter a Valid Phone Number");
            return;
        }
        setPhoneNumber(e.target.value);
    }

    const updateEmailId = (e)=>{
        setEmailId(e.target.value)
    }

    const createCustomer = async(e)=>{
        e.preventDefault();
        if(customerDetail.phoneNumber.length !== 10){
            window.alert("Please Enter a Valid Phone Number. Phone Number must be Of 10 Digits!")
            return;
        }
        try{
            const response = await createNewCustomerApi(customerDetail);
            if(response.message){
                window.alert(response.message);
                return}
                else{
                    if(window.confirm("Customer Created. Add new Customer?")){
                        setName("");
                        setPhoneNumber("");
                        setEmailId("");
                    }
                    else{
                        navigate("/home");
                    }
                }
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className="new-customer">
      <Header isSignedIn={true} />
      <SideBar />
      <div className="new-customer-div">
        <div>
          <h1>Create New Customer</h1>
        </div>
        <form onSubmit={createCustomer}>
          <div>
            <h4>Enter Customer Details</h4>
          </div>
          <div>
            <label for="customerName">Name : </label>
            <input
              id="customerName"
              type="text"
              placeholder="Customer Name"
              value = {name}
              onChange={updateName}
              required
            ></input>
          </div>
          <div>
            <label for="customerNumber">Number : </label>
            <input
              id="customerNumber"
              type="number"
              placeholder="Customer Number"
              value = {phoneNumber}
              step={0}
              minLength={10}
              maxLength={10}
              required
              onChange={updatePhoneNumber}
            ></input>
          </div>
          <div>
            <label for="customerEmail">Email ID : </label>
            <input
              id="customerEmail"
              type="email"
              placeholder="Customer Email"
              value = {emailId}
              onChange={updateEmailId}
              required
            ></input>
          </div>
            <button>Create</button>
        </form>
      </div>
    </div>
  );
}

export default NewCustomer;
