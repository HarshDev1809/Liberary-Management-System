import { useEffect,useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import { editBookApi, getBookByIdApi } from "../../api/book";
import "./EditBookPage.css"
import { useNavigate } from "react-router-dom";

function EditBookPage(){

    const {id} = useParams();
    const navigate = useNavigate()

    const [edition,SetEdition] = useState("First");
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [tags, setTags] = useState([]);
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [bookCount, setBookCount] = useState();
    const [bookUrl, setBookUrl] = useState();
    const [issuedTo, setIssuedTo] = useState();
    const [isLoading, setIsLoading] = useState();

    const bookDetails = {
      title : title,
      author : author,
      description : description,
      tags : tags,
      price : price,
      edition : edition,
      bookCount : bookCount,
      coverUrl : bookUrl
  }

    const fetchBook = async()=>{
        try {
            const { data } = await getBookByIdApi(id);
            setTitle(data.title);
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
    }

    const updateAuthor = (e)=>{
      setAuthor(e.target.value);
  }

  const updateDescription = (e)=>{
      setDescription(e.target.value);
  }

  const updateBookCount = (e)=>{
      setBookCount(e.target.value);
  }

  const updateEdition = (e)=>{
      SetEdition(e.target.value);
  }

  const updatePrice = (e)=>{
      setPrice(e.target.value);
  }

  const updateTags = (e)=>{
      const {value,checked} = e.target
      if(checked){
          setTags(previousTags => [...previousTags,e.target.value])
      }else {
          setTags(previousTags => previousTags.filter(val => val !== value));
      }
  }

  const updateTitle = (e)=>{
      setTitle(e.target.value)
  }

  const updateCoverUrl = (e) =>{
      setBookUrl(e.target.value);
  }

  const editBook = async(e)=>{
    e.preventDefault();
  if(!bookDetails.price || bookDetails.price == 0){
      window.alert("Please Enter the Price of the Book!")
      return;
  }
      try{
        const response = await editBookApi(id,bookDetails);
        if(response.message){
            window.alert(response.message);
            return
        }else{
            // if(window.confirm('Book Added. Add Another book ?')){
            //     // setAuthor("");
            //     // setBookCount(1);
            //     // setCoverUrl("");
            //     // setDescription("");
            //     // setPrice(0);
            //     // setTags([]);
            //     // setTitle("");
            //     // SetEdition("First")
            //     window.location.reload();
            // }else{
            //     navigate("/home");
            // }
            window.alert("Book Edited Successfully");
            navigate("/home");
        }
    }catch(err){
        console.log(err);
    }
  }
  
    useEffect(()=>{
        fetchBook();
        return ()=>{};
    },[])

    return <div className="edit-book">
      <Header isSignedIn={true} />
      <SideBar />
      <div className="edit-book-div">
        {/* <SectionHeading heading={"Create New Book"} /> */}
        <h1>Edit Book</h1>
        <div className="form-div">
            <h4>Enter Edit Details</h4>
          <form onSubmit={editBook}>
            <div>
              <label for="titleInput">Title :</label>
              <input
                type="text"
                id="titleInput"
                placeholder="Enter the Name of the Book"
                onChange = {updateTitle}
                value ={title}
                required
              ></input>
            </div>
            <div>
              <label for="authorInput">Author :</label>
              <input
                type="text"
                id="authorInput"
                placeholder="Enter the Author of the Book"
                onChange={updateAuthor}
                value={author}
                required
              ></input>
            </div>
            <div>
              <label for="descriptionInput">Description :</label>
              <input id="descriptionInput" placeholder="Enter Description of the Book" onChange = {updateDescription} value={description} required></input>
            </div>
            <div>
              <label for="priceInput">Price :</label>
              <input id="priceInput" type="number" min="0" placeholder="Enter the Price" onChange = {updatePrice} value={price} required></input>
            </div>
            {/* <div>
          
              <fieldset>
                <legend>Tags:</legend>
                <div>
                  <input
                    type="checkbox"
                    id="fantasy"
                    name="tags"
                    value="Fantasy"
                    onChange={updateTags}
                  />
                  <label for="fantasy">Fantasy</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="comedy"
                    name="tags"
                    value="Comedy"
                    onChange={updateTags}
                  />
                  <label for="comedy">Comedy</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horror"
                    name="tags"
                    value="Horror"
                    onChange={updateTags}
                  />
                  <label for="horror">Horror</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="biography"
                    name="tags"
                    value="Biography"
                    onChange={updateTags}
                  />
                  <label for="biography">Biography</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="nonFictional"
                    name="tags"
                    value="Non-Fictional"
                    onChange={updateTags}
                  />
                  <label for="nonFictional">Non-Fictional</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="fictional"
                    name="tags"
                    value="Fictional"
                    onChange={updateTags}
                  />
                  <label for="fictional">Fictional</label>
                </div>
              </fieldset>
            </div> */}
            <div>
              <label for="editionInput">Edition :</label>
              <input type="text" id="editionInput" onChange={updateEdition} value={edition} required></input>
            </div>
            <div>
              <label for="bookCount">Book Count :</label>
              <input id="bookCount" type="number" min="1" onChange={updateBookCount} value={bookCount} required></input>
            </div>
            <div>
                <label for="coverUrl">Cover :</label>
                <input id="coverUrl" type="text" onChange={updateCoverUrl} value={bookUrl} placeholder="Enter Book Cover Image URl" required></input>
            </div>
            <button type="submit">Edit</button>
          </form>
        </div>
      </div>
    </div>
}


export default EditBookPage;