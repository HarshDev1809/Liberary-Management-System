import Header from "../../components/Header/Header";
import SignIn from "../../components/SignIn/SignIn";


function LandingPage(){
    return <div className="landing-page">
        <Header isSignedIn = {false}/>
        <SignIn />
    </div>
}

export default LandingPage;