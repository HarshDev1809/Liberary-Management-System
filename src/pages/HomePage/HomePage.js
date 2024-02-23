import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import HomePageButton from "../../components/HomePageButton/HomePageButton";
import SideBar from "../../components/SideBar/SideBar";
import HomePageMain from "../../components/HomePageMain/HomePageMain";

function HomePage(){

    return <div className="home-page">
        <Header isSignedIn = {true}/>
        {/* <SideBar /> */}
        <HomePageMain />
    </div>
}

export default HomePage;