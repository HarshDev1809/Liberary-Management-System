import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header(props) {

  const navigate = useNavigate();

  const isSignedIn = props.isSignedIn;

  const logOut = ()=>{
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <div className='header'>
      <div>
        <p>Library Management System</p>
      </div>
      {(isSignedIn) ? <button type='button' onClick={logOut}>Sign Out</button> : "" }
    </div>
  );
}

export default Header;