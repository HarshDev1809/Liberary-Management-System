import { useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import "./IssuePage.css";

function IssuePage() {
  const [customerId, setCustomerId] = useState();
  const [bookId, setBookId] = useState();
  const [issueDate, setIssueDate] = useState();
  const [returnDate, setReturnDate] = useState();

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

  return (
    <div className="issue-page">
      <Header isSignedin={true} />
      <SideBar />
      <div className="issue-page-div">
        <div>
          <h1>Issue A Book</h1>
        </div>
        <div className="sub-div">
          <form>
            <div>
              <label for="customerId">Customer Id : </label>
              <input
                id="customerId"
                placeholder="Customer Id"
                onChange={updateCustomerId}
                type="number"
                value={customerId}
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
