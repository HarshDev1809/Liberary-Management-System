import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import "./CustomerDetail.css";
import Loader from "../../components/Loader/Loader";
import { getCustomerApi } from "../../api/customer";
import CustomerDetailIcon from "../../components/CustomerDetailIcon/CustomerDetailIcon";
import RightPanelLoader from "../../components/RightPanelLoader/RightPanelLoader";

function CustomerDetails() {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [displayedCustomers, setDisplayedCustomers] = useState([]);
  const customerDetail = {};

  const showCustomers = (data) => {
    return (
      <div className="right-panel">
        {data.map((customer) => {
          return <CustomerDetailIcon customer={customer} />;
        })}
      </div>
    );
  };

  const fetchCustomers = async () => {
    const response = await getCustomerApi(customerDetail);
    setCustomers(response.data);
    setDisplayedCustomers(response.data);
    setIsLoading(false);
  };

  const updateName = (e) => {
    setName(e.target.value);
    customerDetail.name = e.target.value;
    const fetchedCustomer = customers.filter((customer) => {
      if (customer.name.toLowerCase().includes(e.target.value)) {
        return customer;
      }
    });
    setDisplayedCustomers(fetchedCustomer);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
    const fetchedCustomer = customers.filter((customer) => {
      if (customer.emailId.toLowerCase().includes(e.target.value)) {
        return customer;
      }
    });
    setDisplayedCustomers(fetchedCustomer);
  };

  // const updatePhoneNumber = (e) => {
  //   setPhoneNumber(e.target.value);
  //   customerDetail.phoneNumber = e.target.value;
  //   const fetchedCustomer = customers.filter((customer) => {
  //     if (customer.phoneNumber === e.target.value) {
  //       return customer;
  //     }
  //   });
  //   if (e.target.value === "") {
  //     setDisplayedCustomers(customers);
  //     return;
  //   }
  //   setDisplayedCustomers(fetchedCustomer);
  // };

  useEffect(() => {
    fetchCustomers();
    return () => {};
  }, []);

  return (
    <div className="customer-details">
      <Header isSignedIn={true} />
      <SideBar />
      <div className="customer-details-div">
        <div>
          <h1>Customer Details</h1>
        </div>
        <div className="sub-div">
          <div className="left-panel">
            <form>
              <div>
                <label for="nameInput">Name : </label>
                <input
                  type="text"
                  id="nameInput"
                  placeholder="Name"
                  value={name}
                  onChange={updateName}
                ></input>
              </div>
              {/* <div>
                <label for="phoneInput">Phone Number : </label>
                <input
                  type="number"
                  id="phoneInput"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={updatePhoneNumber}
                ></input>
              </div> */}
              <div>
                <label for="emailInput">Email Id : </label>
                <input
                  type="email"
                  id="emailInput"
                  placeholder="Name"
                  value={email}
                  onChange={updateEmail}
                ></input>
              </div>
            </form>
          </div>
          {isLoading ? <RightPanelLoader /> : showCustomers(displayedCustomers)}
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
