import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import { getBooksApi } from "../../api/book";


function Books(){

    const [searchQuery, setSearchQuery] = useState();
    const [searchUid, setSearchUid] = useState();
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const updateSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    }

    const updateSearchUid = (e) => {
        setSearchUid(e.target.value);
    }

    const showBooks = ()=>{
        return <div>
            {
                books.map((book) => {
                    return 
                })
            }
        </div>
    }

    const fetchBooks = async()=>{
        const {data} = await getBooksApi();
        
    }

    useEffect(()=>{
        fetchBooks();

        return () => {}
    },[])

    return <div className="books">
        <Header isSignedIn = {true} />
        <SideBar />
        <div className="books-div">
            <div>
                <h1>Books</h1>
            </div>
            <div>
                <div>
                    <div>
                        <label for="searchInput">Title or Author</label>
                        <input type="text" placeholder="Title or Author" ></input>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
}

export default Books;