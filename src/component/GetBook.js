import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img1 from '../Assets/book-icon-138.png';
import { Link, useNavigate } from "react-router-dom";

function GetBook() {
    const [book, setbook] = useState([]);
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8081/book/bycategory/" + name).then(resp => setbook(resp.data));
    }, [])

    const handleSubmit = () => {

        navigate('/order');
    }

    return (
        <div align='center' id="searchbookbg">
            <div id="grid">
                {book.map(p => <div id="grid-item">
                    <img src={img1} width="100px" height="150px" />
                    <p style={{ margin: '3px' }}>{p.title}</p>
                    <Link to={`/searchbook/${p.bookId}`} style={{ margin: '3px', textDecoration: 'none' }}>View Details</Link><br />
                    <button style={{ marginTop: '10px' }} onClick={handleSubmit}>Confirm order</button>
                </div>)}
            </div>
            <Link to="/Home" id="reviewlink">Go to Home Page</Link>
        </div>)
}

export default GetBook;