import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import img1 from '../Assets/book-icon-138.png';

function AllBooks() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState("");
    const [book, setBook] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8081/book/all").then(resp => setBooks(resp.data));
    }, [])

    const handleSubmit = () => {

        navigate('/order');
    }
    const handleSubmit1 = () => {
        //api call
        axios.get("http://localhost:8081/book/name/" + title)
            .then(resp => setBook(resp.data))
            .catch(error => {
                setBook(null);
                setMessage(error.response.data)
            })
    }
    return (
        <>  <div style={{ display: "inline" }}>
            <div id="logo">
                <img id="logoimage" src="https://cdn4.iconfinder.com/data/icons/education-vol-1-8/512/15-512.png" alt="book"></img>
            </div>
            <div>
                <input placeholder="Search by Title" id="inputbar" type="text" maxLength="250" value={title} onChange={(event) => setTitle(event.target.value)} />
                <input type="button" name="btnTopSearch" value="Search" id="btnTopSearch" onClick={handleSubmit1} />
                <i class="fa fa-sign-out" id="logout"></i>
                <Link to="/logout" id="logout">Logout</Link>
            </div>
            </div>
            {
                book !== null ? <div>
                    <h2>Book Details</h2>
                    <p>BookId: {book.bookId} </p>
                    <p>BookTitle: {book.title} </p>
                    <p>BookAuthor: {book.author} </p>
                    <p>BookDescription: {book.description} </p>
                    <p>BookISBN: {book.isbn} </p>
                    <p>BookPrice: {book.price} </p>
                    <p>BookPublishDate: {book.publishDate} </p>
                    <p>BookLastUpdatedDate: {book.lastUpdatedOn} </p>
                    <p>Book Category Id: {book.category.categoryId} </p>
                    <p>Book Category Name: {book.category.categoryName} </p>
                </div>
                    : <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>{message}</h3>
            }
            <div id="allbooksbg">
                <div id="allbookstitle">
                    <h2 style={{ color: 'black' }}>All Available Books</h2>
                </div>
                <div>
                    <div id="grid">
                        {books.map(p => <div id="grid-item">
                            <img src={img1} width="100px" height="150px" />
                            <p style={{ margin: '3px' }}>{p.title}</p>
                            <Link to={`/searchbook/${p.bookId}`} style={{ margin: '3px', textDecoration: 'none' }}>View Details</Link><br />
                            <button style={{ marginTop: '10px' }} onClick={handleSubmit}>Confirm order</button>
                        </div>)}
                    </div>
                </div>
                <Link to="/Home" id="reviewlink">Go to Home Page</Link>
            </div>
            <div id="icon">
                <p>For more details contact us!</p>
                <p><i class="fa fa-instagram"></i>&nbsp;&nbsp;<i class="fa fa-facebook"></i>&nbsp;
                    &nbsp;<i class="fa fa-twitter"></i>&nbsp;&nbsp;<i class="fa fa-youtube"></i></p>
            </div>
        </>
    );
}

export default AllBooks;