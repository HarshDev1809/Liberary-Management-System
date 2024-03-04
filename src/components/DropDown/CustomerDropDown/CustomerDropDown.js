import { useState } from "react";
import "./CustomerDropDown.css"
import { useNavigate } from "react-router-dom";

function CustomerDropDown(){

    const navigate = useNavigate();

    const [isOpen,setIsOpen] = useState(false);

    const toggleIsOpen = ()=>{
        setIsOpen(!isOpen);
    }

    const goToNewCustomer = ()=>{
        navigate("/create/customer");
    }

    const goToCustomers = ()=>{
        navigate("/customers");
    }

    const goToIssueBook = ()=>{
        navigate("/customers/issue");
    }

    return <div className="customer-drop-down">
        <button onClick={toggleIsOpen}>Customer</button>
        {isOpen && (
            <ul className="drop-down-menu">
                <li><button onClick={goToNewCustomer}>New Customer</button></li>
                <li><button onClick={goToCustomers}>Customers List</button></li>
                <li><button onClick={goToIssueBook}>Issue Book</button></li>
            </ul>
        )}
    </div>

}

export default CustomerDropDown;