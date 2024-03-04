import { useNavigate } from "react-router-dom";
import "./CustomerDetailIcon.css"

function CustomerDetailIcon(props) {
    const navigate = useNavigate();
    const openCustomer = ()=>{
        navigate(`/customers/${props.customer._id}`);
    }
  return (
    <div className="customer-detail-icon" onClick={openCustomer}>
      <div>{props.customer.name}</div>
      <div>{props.customer.emailId}</div>
      <div>{props.customer.phoneNumber}</div>
    </div>
  );
}

export default CustomerDetailIcon;