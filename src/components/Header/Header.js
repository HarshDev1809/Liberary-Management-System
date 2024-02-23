import "./Header.css";

function Header(props) {

  const isSignedIn = props.isSignedIn;

  return (
    <div className='header'>
      <div>
        <p>Library Management System</p>
      </div>
      {(isSignedIn) ? <button type='button'>Sign Out</button> : "" }
    </div>
  );
}

export default Header;