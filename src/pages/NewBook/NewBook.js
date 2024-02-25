import { useState } from "react";
import Header from "../../components/Header/Header";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SideBar from "../../components/SideBar/SideBar";
import "./NewBook.css";
import { createNewBookApi } from "../../api/book";
import { useNavigate } from "react-router-dom";

function NewBook() {

    const navigate = useNavigate();

    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("")
    const [description,setDescription] = useState("");
    const [tags,setTags] = useState([]);
    const [price,setPrice] = useState(0);
    const [edition,SetEdition] = useState("First");
    const [bookCount,setBookCount] = useState(1);
    const [coverUrl,setCoverUrl] = useState("")

    const bookDetails = {
        title : title,
        author : author,
        description : description,
        tags : tags,
        price : price,
        edition : edition,
        bookCount : bookCount,
        coverUrl : coverUrl
    }

    const createNewBook = async (e)=>{
        e.preventDefault();
        if(!bookDetails.tags.length){
            window.alert("Please Enter Tags of the Book!");
            return;
        }
        if(!bookDetails.price || bookDetails.price == 0){
            window.alert("Please Enter the Price of the Book!")
            return;
        }

        try{
            const response = await createNewBookApi(bookDetails);
            if(response.message){
                window.alert(response.message);
                return
            }else{
                if(window.confirm('Book Added. Add Another book ?')){
                    // setAuthor("");
                    // setBookCount(1);
                    // setCoverUrl("");
                    // setDescription("");
                    // setPrice(0);
                    // setTags([]);
                    // setTitle("");
                    // SetEdition("First")
                    window.location.reload();
                }else{
                    navigate("/home");
                }
            }
        }catch(err){
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
        setCoverUrl(e.target.value);
    }

  return (
    <div className="new-book">
      <Header isSignedIn={true} />
      <SideBar />
      <div className="new-book-div">
        {/* <SectionHeading heading={"Create New Book"} /> */}
        <h1>Create New Book</h1>
        <div className="form-div">
            <h4>Enter Book Details</h4>
          <form onSubmit={createNewBook}>
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
            <div>
              {/* <label for="tagsInput">Tags :</label>
                <input */}
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
            </div>
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
                <input id="coverUrl" type="text" onChange={updateCoverUrl} value={coverUrl} placeholder="Enter Book Cover Image URl" required></input>
            </div>
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewBook;
