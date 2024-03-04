import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import { getCustomerByIdApi } from "../../api/customer";
import { useNavigate, useParams } from "react-router-dom";
import "./Customer.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Customer(){

    const navigate = useNavigate();
    const {id} = useParams();

    const [name, setName] = useState("");
    const [uId, setUId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailId, setEmailId] = useState("");
    const [books, setBooks] = useState("");
    const [fine, setFine] = useState("");

    const fetchCustomer = async()=>{
        try{
            const {data} = await getCustomerByIdApi(id);
            setName(data.name);
            setUId(data.uId);
            setPhoneNumber(data.phoneNumber);
            setEmailId(data.emailId);
            setBooks(data.booksIssued);
            setFine(data.fine);
        }catch(err){
            console.log("hello");
        }

    }

    const backButton = ()=>{
        navigate(-1)
    }

    useEffect(()=>{
        fetchCustomer();
        return ()=>{}
    })

    return <div className="customer">
        <Header isSignedIn = {true} />
        <SideBar />
        <div className = "customer-div">
            <div className="section-heading">
                <h1>Customer</h1>
            </div>
            <div className="sub-div">
                <div className="back-btn">
                <ArrowBackIosIcon onClick = {backButton} />
                </div>
                <div className="customer-detail-div">
                    <div className="name">{name}</div>
                    <div className="uId h-10">
                        <small>{uId}</small>
                    </div>
                    <div className="phone-number h-10">
                        <p>{phoneNumber}</p>
                    </div>
                    <div className="email-id h-10">
                        <p>{emailId}</p>
                    </div>
                    <div className="fine h-10">
                        <p>{`₹${fine}`}</p>
                    </div>
                    <div className="books">
                        <p>{books}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Customer;