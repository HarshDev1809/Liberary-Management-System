import { useState } from "react";
import "./BookDropDown.css"

function BookDropDown(){

    const [isOpen,setIsOpen] = useState(false);

    const toggleIsOpen = ()=>{
        setIsOpen(!isOpen);
    }

    return <div className="book-drop-down">
        <button onClick={toggleIsOpen}>Books</button>
        {isOpen && (
            <ul className="drop-down-menu">
                <li><button href="/create/book">New Book</button></li>
            </ul>
        )}
    </div>

}

export default BookDropDown;