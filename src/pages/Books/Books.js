import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import { getBooksApi } from "../../api/book";
import BookDetailBar from "../../components/BookDetailBar/BookDetialBar";
import Loader from "../../components/Loader/Loader";
import "./Books.css"


function Books(){

    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [uId, setUId] = useState();
    const [displayBook,setDislayBook] = useState([])
    const query = {
        title :  title,
        author : author,
        uId : uId
    };

    const updateTitle = (e) => {
        const filteredBooks = books[0].filter(book=>{
            if(book.author.toLowerCase().includes(e.target.value.toLowerCase()) || book.title.toLowerCase().includes(e.target.value.toLowerCase()) || book.uId == query.uId){
                return book
            }
        })
        console.log(filteredBooks)
        setTitle(e.target.value);
    }

    const updateUid = (e) => {
        setUId(e.target.value);
    }

    const updateAuthor = (e)=>{
        setAuthor(e.target.value);
    }

    const showBooks = (books)=>{
        // console.log(books)
        setDislayBook([]);
        return <div className="right-panel">
            {
                books.map((book) => {
                    return <BookDetailBar book = {book} />
                })
            }
        </div>

    }

    const fetchBooks = async()=>{
        const {data} = await getBooksApi();
        setBooks(previousBooks => [...previousBooks,data]);
        setDislayBook(previousBooks => [...previousBooks,data]);
        setIsLoading(false);
        
    }

    useEffect(()=>{
        fetchBooks();

        return () => {}
    },[])

    const search = (e) =>{
        e.preventDefault();
        setDislayBook([])
        const filteredBooks = books[0].filter(book=>{
            if(book.author.toLowerCase().includes(query.author.toLowerCase()) || book.title.toLowerCase().includes(query.author.toLowerCase()) || book.uId == query.uId){
                return book
            }
        })
        console.log(filteredBooks)
        setDislayBook(previousBooks => [...previousBooks,filteredBooks]);
        console.log(displayBook)
    }

    return <div className="books">
        <Header isSignedIn = {true} />
        <SideBar />
        <div className="books-div">
            <div className="section-heading">
                <h1>Books</h1>
            </div>
            <div className="sub-div">
                <div className="left-panel">
                    <form onSubmit={search}>
                    <div>
                        <label for="titleInput">Title : </label>
                        <input type="text" id="titleInput" placeholder="Title" value = {title} onChange={updateTitle}></input>
                    </div>
                    <div>
                        <label for="authorInput">Author : </label>
                        <input type="text" id="authorInput" placeholder="Author" value = {author} onChange={updateAuthor}></input>
                    </div>
                    <div>
                        <label for="uIdInput">Id : </label>
                        <input id="uIdInput" type="number" placeholder="Id" value = {uId} onChange={updateUid}></input>
                    </div>
                    <button type = "submit">Search</button>
                    </form>
                </div>
                    {isLoading? <Loader /> : showBooks(displayBook[0])}
            </div>
        </div>
    </div>
}

export default Books;