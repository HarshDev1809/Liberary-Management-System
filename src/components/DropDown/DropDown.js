import { useState } from "react";
import "./DropDown.css"


function DropDown(){

    const [isOpen,setIsOpen] = useState(false);

    const toggleIsOpen = ()=>{
        setIsOpen(!isOpen);
    }

    return <div className="drop-down">
        <button onClick={toggleIsOpen}>Books</button>
        {isOpen && (
            <ul className="drop-down-menu">
                <li><button href="/create/book">New Book</button></li>
            </ul>
        )}
    </div>

}

export default DropDown;