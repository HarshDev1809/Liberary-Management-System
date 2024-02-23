import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

function NewCustomer(){
    return <div className="new-customer">
        <Header isSignedIn = {true} />
        <SideBar />
        <h1>new customer</h1>
    </div>
}

export default NewCustomer;