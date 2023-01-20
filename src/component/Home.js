import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


const linkStyle = {
    margin: "10px",
    marginTop: "5px",
    textDecoration: "none",
    color: 'black'
};

function Home() {
    const [title, setTitle] = useState("");
    const [book, setBook] = useState(null);
    const [message, setMessage] = useState("");
    const handleSubmit = () => {
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
            <div style={{display:"inline"}}>
                {/* <h1 id="homeh1">Welcome</h1> */}
                <div id="logo">
                    <img id="logoimage" src="https://cdn4.iconfinder.com/data/icons/education-vol-1-8/512/15-512.png" alt="book"></img>
                 </div>
                    <div>
                    <input placeholder="Search by Title" id="inputbar" type="text" maxLength="250" value={title} onChange={(event) => setTitle(event.target.value)} />
                    <input type="button" name="btnTopSearch" value="Search" id="btnTopSearch" onClick={handleSubmit} />
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

            <nav class="navbar">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/AllBooks" style={linkStyle}>Available Books</Link>
                        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li class="nav-item">
                            <Link to="/Allcategories" style={linkStyle}>Available Categories</Link>
                        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li class="nav-item" style={{position:"relative",left:"290px"}}>
                            <Link to="/profile" style={linkStyle}>View Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                <img src="https://pbs.twimg.com/media/EzouiNvXIAAWVgA.jpg" height="425px" width="1263px" />
            </div>
            <div id="icon">
                <p>For more details contact us!</p>
                <p><i class="fa fa-instagram"></i>&nbsp;&nbsp;<i class="fa fa-facebook"></i>&nbsp;
                    &nbsp;<i class="fa fa-twitter"></i>&nbsp;&nbsp;<i class="fa fa-youtube"></i></p>
            </div>
        </div>
    )
}
export default Home;