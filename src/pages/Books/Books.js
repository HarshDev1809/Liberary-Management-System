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
        setTitle(e.target.value);
        const filteredBooks = books.filter(book=>{
            if(book.title.toLowerCase().includes(e.target.value.toLowerCase())){
                return book
            }
        });
        setDislayBook(filteredBooks);
        
    }

    const updateUid = (e) => {
        setUId(e.target.value);
        const filteredBooks = books.filter(book=>{
            if(book.uId == e.target.value){
                return book
            }
        });
        if(e.target.value === ""){
            setDislayBook(books);
            return;
        }
        setDislayBook(filteredBooks);
    }

    const updateAuthor = (e)=>{
        setAuthor(e.target.value);
        const filteredBooks = books.filter(book=>{
            if(book.author.toLowerCase().includes(e.target.value.toLowerCase())){
                return book
            }
        });
        setDislayBook(filteredBooks);
    }

    const showBooks = (books)=>{
        // setDislayBook([]);
        return <div className="right-panel">
            {
                books.map((book) => {
                    return <BookDetailBar book = {book} />
                })
            }
        </div>
    }

    const fetchBooks = async()=>{
        const response = await getBooksApi();
        // setBooks(previousBooks => [...previousBooks,data]);
        // setDislayBook(previousBooks => [...previousBooks,data]);
        console.log(response)
        setBooks(response.data);
        setDislayBook(response.data);
        setIsLoading(false);
        console.log("out")
    }

    useEffect(()=>{
        fetchBooks();

        return () => {};
    },[])

    // const search = (e) =>{
    //     e.preventDefault();
    //     setDislayBook([])
    //     const filteredBooks = books[0].filter(book=>{
    //         if(book.author.toLowerCase().includes(query.author.toLowerCase()) || book.title.toLowerCase().includes(query.author.toLowerCase()) || book.uId == query.uId){
    //             return book
    //         }
    //     })
    //     console.log(filteredBooks)
    //     setDislayBook(previousBooks => [...previousBooks,filteredBooks]);
    //     console.log(displayBook)
    // }

    return <div className="books">
        <Header isSignedIn = {true} />
        <SideBar />
        <div className="books-div">
            <div className="section-heading">
                <h1>Books</h1>
            </div>
            <div className="sub-div">
                <div className="left-panel">
                    <form>
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
                    </form>
                </div>
                    {isLoading? <Loader /> : showBooks(displayBook)}
            </div>
        </div>
    </div>
}

export default Books;