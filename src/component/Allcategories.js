import React, { useState,useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import img1 from '../Assets/book-icon-138.png';

function Allcategories() {
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [book, setBook] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8081/category/all").then(resp => setCategories(resp.data));
    }, [])

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
        <div>
            <div style={{ display: "inline" }}>
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
                    <p>BookDescription: {book.description} </p >
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
                <div id="grid">
                    {
                        categories.map(c =>
                            <div id="grid-item">
                                <img src={img1} width="100px" height="150px" />
                                <p style={{ margin: '3px' }}>{c.categoryName}</p>
                                <Link to={`/bookcategory/${c.categoryName}`} style={{ margin: '3px', textDecoration: 'none' }}>View Books</Link>
                            </div>)
                    }
                </div>
                <Link to="/Home" id="reviewlink">Go to Home Page</Link>
            </div>
        </div>
    )
}
export default Allcategories;