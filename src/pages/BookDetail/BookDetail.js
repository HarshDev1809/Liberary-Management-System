import { ArrowBackIos } from "@mui/icons-material";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getBookByIdApi } from "../../api/book";
import "./BookDetail.css";

function BookDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [uId, setUId] = useState();
  const [author, setAuthor] = useState();
  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [bookCount, setBookCount] = useState();
  const [bookUrl, setBookUrl] = useState();
  const [issuedTo, setIssuedTo] = useState();
  const [isLoading, setIsLoading] = useState();

  const fetchBook = async () => {
    try {
      const { data } = await getBookByIdApi(id);
      setTitle(data.title);
      setUId(data.uId);
      setAuthor(data.author);
      setTags(data.tags);
      setPrice(data.price);
      setDescription(data.description);
      setBookCount(data.bookCount);
      setBookUrl(data.coverUrl);
      setIssuedTo(data.issuedTo);
      console.log(bookUrl);
    } catch (err) {
      console.log(err);
    }
  };

  const goToEditBookPage = ()=>{
    navigate("")
  }

  useEffect(() => {
    fetchBook();
    return () => {};
  }, []);

  const backButton = () => {
    navigate(-1);
  };

  return (
    <div className="book-detail">
      <Header isSignedIn={true} />
      <SideBar />
      <div className="book-detail-div">
        <div>
          <h1>Book Details</h1>
        </div>
        <div className="sub-div">
          <div className="back-btn">
            <ArrowBackIos onClick={backButton} />
          </div>
          <div className="panel">
            <div className="left-panel">
              <img src={bookUrl} alt="Book Image" />
            </div>
            <div className="right-panel">
              <div className="title-div">
                <p>{title}</p>
              </div>
              <div className="author-div h-10">
                <p>{author}</p>
              </div>
              <div className="uid-div h-10">
                <small>{uId}</small>
              </div>
              <div className="description-div">
                <p>{description}</p>
              </div>
              <div className="tags-div h-10">
                <p>{`tags : ${tags}`}</p>
              </div>
              <div className="price-div h-10">
                <p>
                  <b>Price :</b> ₹ {price}
                </p>
              </div>
              <div className="book-count-div h-10">
                <p>Book Count : {bookCount}</p>
              </div>
              <div className="issued-to">
                <p>{issuedTo}</p>
              </div>
            </div>
          </div>
          <div className="button-div">
          <button type="button" onClick={goToEditBookPage}>Edit</button>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default BookDetail;
