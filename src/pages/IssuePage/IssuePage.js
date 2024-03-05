import { useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import "./IssuePage.css";
import { todayDate } from "../../Modules/date";
import { issueBookApi } from "../../api/customer";

function IssuePage() {
  const [customerId, setCustomerId] = useState();
  const [bookId, setBookId] = useState();
  const [issueDate, setIssueDate] = useState(todayDate(0));
  const [returnDate, setReturnDate] = useState(todayDate(7));

  const details = {
    customerId : customerId,
    bookId : bookId,
    issueDate : issueDate,
    returnDate : returnDate
  }


  const updateCustomerId = (e) => {
    setCustomerId(e.target.value);
  };

  const updateBookId = (e) => {
    setBookId(e.target.value);
  };

  const updateIssueDate = (e) => {
    setIssueDate(e.target.value);
  };

  const updateReturnDate = (e) => {
    setReturnDate(e.target.value);
  };

  const issueBook = async(e) =>{
    e.preventDefault();
    const response = await issueBookApi(details);
    console.log(response);
    console.log("hello")
  }

  return (
    <div className="issue-page">
      <Header isSignedin={true} />
      <SideBar />
      <div className="issue-page-div">
        <div>
          <h1>Issue A Book</h1>
        </div>
        <div className="sub-div">
          <form onSubmit={issueBook}>
            <div>
              <label for="customerId">Customer Id : </label>
              <input
                id="customerId"
                placeholder="Customer Id"
                onChange={updateCustomerId}
                type="number"
                value={customerId}
                required
              ></input>
            </div>
            <div>
              <label for="bookId">Book Id : </label>
              <input
                id="bookId"
                placeholder="Book Id"
                onChange={updateBookId}
                type="number"
                value={bookId}
                required
              ></input>
            </div>
            <div>
              <label for="issueDate">Issue Date : </label>
              <input
                id="issueDate"
                placeholder="Issue Date"
                onChange={updateIssueDate}
                type="date"
                value={issueDate}
                required
              ></input>
            </div>
            <div>
              <label for="returnDate">Return Date : </label>
              <input
                id="returnDate"
                placeholder="Return Date"
                onChange={updateReturnDate}
                type="date"
                value={returnDate}
                required
              ></input>
            </div>
            <button type="submit">Issue Book</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IssuePage;
