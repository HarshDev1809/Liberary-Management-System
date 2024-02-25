import { useNavigate } from "react-router-dom";
import SideBarButton from "../SideBarButton/SideBarButton";
import "./SideBar.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropDown from "../DropDown/DropDown";
import { useState } from "react";
import BookDropDown from "../DropDown/BookDropDown/BookDropDown";
import CustomerDropDown from "../DropDown/CustomerDropDown/CustomerDropDown";


function SideBar(){

return <div className="side-bar">

  <BookDropDown />
  <CustomerDropDown />
    

    {/* <button>button 1</button>
    <button>button 2</button>
    <button>button 3</button>
    <button>button 4</button>
    <button>button 5</button> */}
    {/* <SideBarButton /> */}
    {/* <SideBarButton  /> */}
    {/* <SideBarButton goTo = {goToCreateBook} buttonName = {"Create Book"} />
    <SideBarButton goTo = {goToCreateBook} buttonName = {"Create Book"} />
    <SideBarButton goTo = {goToCreateBook} buttonName = {"Create Book"} />
    <SideBarButton goTo = {goToCreateBook} buttonName = {"Create Book"} />
    <SideBarButton goTo = {goToCreateBook} buttonName = {"Create Book"} />
    <SideBarButton goTo = {goToCreateBook} buttonName = {"Create Book"} /> */}
    
</div>
}

export default SideBar;