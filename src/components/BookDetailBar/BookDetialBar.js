function BookDetailBar(props) {
  return (
    <div className="book-detail-bar">
      <div>
        <div>
          <img src={props.book.coverUrl} alt="Book Cover"></img>
        </div>
        <div>
          <p>{`${props.book.edition} Edition`}</p>
        </div>
      </div>
      <div>
        <div>
          <p>{props.book.title}</p>
        </div>
        <div>
          <p>{props.book.author}</p>
        </div>
        <div>
          <p>{props.book.uId}</p>
        </div>
      </div>
      <div>{props.book.tags.map(()=>)}</div>
    </div>
  );
}

export default BookDetailBar;
