import { useNavigate } from "react-router-dom";
import HomePageButton from "../HomePageButton/HomePageButton";
import "./HomePageMain.css";

function HomePageMain() {
  const navigate = useNavigate();

  const goToCreateBook = () => {
    navigate("/create/book");
  };

  const goToCreateCustomer = () => {
    navigate("/create/customer");
  };
  return (
    <div className="home-page-main">
      <HomePageButton
        buttonName={"Create Book"}
        clickedFunction={goToCreateBook}
      />
      <HomePageButton
        buttonName={"Create Customer"}
        clickedFunction={goToCreateCustomer}
      />
      <HomePageButton
        buttonName={"Create Book"}
        clickedFunction={goToCreateBook}
      />
      <HomePageButton
        buttonName={"Create Customer"}
        clickedFunction={goToCreateCustomer}
      />
      <HomePageButton
        buttonName={"Create Book"}
        clickedFunction={goToCreateBook}
      />
      <HomePageButton
        buttonName={"Create Customer"}
        clickedFunction={goToCreateCustomer}
      />
      <HomePageButton
        buttonName={"Create Book"}
        clickedFunction={goToCreateBook}
      />
      <HomePageButton
        buttonName={"Create Customer"}
        clickedFunction={goToCreateCustomer}
      />
      <HomePageButton
        buttonName={"Create Book"}
        clickedFunction={goToCreateBook}
      />
      <HomePageButton
        buttonName={"Create Customer"}
        clickedFunction={goToCreateCustomer}
      />
    </div>
  );
}

export default HomePageMain;
