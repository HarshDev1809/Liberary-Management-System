import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

function CustomerDetails(){



    return <div className="customer-details">
        <Header isSignedIn={true} />
        <SideBar />
        <div className="customer-details-div">
            
        </div>
    </div>

}

export default CustomerDetails;