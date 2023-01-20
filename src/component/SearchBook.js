import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";
import {useParams,Link} from "react-router-dom";

function SearchBook() {
    const [book, setbook] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8081/book/" + id).then(resp => setbook(resp.data));
    }, [])

    return (
        <>
            {
                book !== null &&
                <div id="searchbookbg">
                    <h1 style={{position:"relative",left:"-200px"}}><b>Book Details</b></h1>
                    <table id="bookdetailstable">
                        <tr>
                            <th id="bdthead">BookId</th>
                            <td id="bdtcell">{book.bookId}</td>
                        </tr>
                        <tr>
                            <th id="bdthead">Title</th>
                            <td id="bdtcell">{book.title}</td>
                        </tr>
                        <tr>
                            <th id="bdthead">Author</th>
                            <td id="bdtcell">{book.author}</td>
                        </tr>
                        <tr>
                            <th id="bdthead">ISBN</th>
                            <td id="bdtcell">{book.isbn}</td>
                        </tr>
                        <tr>
                            <th id="bdthead">Price</th>
                            <td id="bdtcell">{book.price}</td>
                        </tr>
                    </table>
                </div>
            }
            <Link to="/Home" id="reviewlink">Go to Home Page</Link>
        </>)
}

export default SearchBook;