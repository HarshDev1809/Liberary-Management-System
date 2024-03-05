import { useState } from "react";
import "./BookDropDown.css"
import { useNavigate } from "react-router-dom";
import { NavigationSharp } from "@mui/icons-material";

function BookDropDown(){

    const [isOpen,setIsOpen] = useState(false);
    const navigate = useNavigate()

    const toggleIsOpen = ()=>{
        setIsOpen(!isOpen);
    }

    const goToNewBook = ()=>{
        navigate("/create/book")
    }

    const goToBookList = ()=>{
        navigate("/books");
    }

    return <div className="book-drop-down">
        <button onClick={toggleIsOpen}>Books</button>
        {isOpen && (
            <ul className="drop-down-menu">
                <li><button onClick={goToNewBook}>New Book</button></li>
                <li><button onClick={goToBookList}>Book List</button></li>
            </ul>
        )}
    </div>

}

export default BookDropDown;