import { useState } from "react";
import "./SignIn.css";
import { signInApi } from "../../api/auth/signin";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [userName, changeUserName] = useState();
  const [password, changePassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const userDetails = {
    userName: userName,
    password: password,
  };

  const updateUserName = (e) => {
    changeUserName(e.target.value);
  };

  const updatePassword = (e) => {
    changePassword(e.target.value);
  };

  const signIn = async (e) => {
    setErrorMessage("");
    e.preventDefault();
    try {
      const response = await signInApi(userDetails);
      if (response.response) {
        setErrorMessage(response.response.data.message);
      } else {
        const token = response.data.accessToken;
        sessionStorage.setItem("token", token);
        navigate("/home");
      }
    } catch (err) {
      console.log("Something Went Wrong!");
    }
  };

  return (
    <div className="sign-in">
      <div className="form-div">
        <div>
          <p>Sign In</p>
        </div>
        <form onSubmit={signIn}>
          <input
            type="text"
            onChange={updateUserName}
            value={userName}
            placeholder="USER NAME"
          ></input>
          <input
            type="password"
            onChange={updatePassword}
            value={password}
            placeholder="PASSWORD"
          ></input>
          <button type="submit">Sign In</button>
          <span>{errorMessage}</span>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
