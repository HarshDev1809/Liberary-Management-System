import { useNavigate } from "react-router-dom";
import "./BookDetailBar.css"

function BookDetailBar(props) {

    const navigate = useNavigate();

    const goToBookDetail = ()=>{
        navigate(`/books/${props.book._id}`);
    }

  return (
    <div className="book-detail-bar" onClick={goToBookDetail}>
        <div className="title">
            <h4>{props.book.title}</h4>
        </div>
        <div className="author">
            <p>{props.book.author}</p>
        </div>
        <div className="edition">
            <small>{`${props.book.edition} Edition`}</small>
        </div>
        <div className="uId">
            <small>{props.book.uId}</small>
        </div>
    </div>
  );
}

export default BookDetailBar;
