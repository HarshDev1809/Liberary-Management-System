import "./BookDetailBar.css"

function BookDetailBar(props) {
  return (
    <div className="book-detail-bar">
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
