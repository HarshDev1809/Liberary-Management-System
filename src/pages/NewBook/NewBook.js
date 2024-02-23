import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

function NewBook(){
    return <div className="new-book">
        <Header isSignedIn = {true}/>
        <SideBar />
        <h1> new book</h1>
    </div>
}

export default NewBook;