import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function ViewReview() {
    const [reviewId, setReviewId] = useState("");
    const [review, setReview] = useState([]);
    const [message, setMessage] = useState("");
    const Customer = JSON.parse(localStorage.getItem("mytoken"));
    // const handleSubmit = () => {
    //     //api call
    //     axios.get("http://localhost:8088/review/bycustomer/"+Customer.customerId)
    //         .then(resp => setReview(resp.data))
    //         .catch(error => {
    //             setReview(null);
    //             setMessage(error.response.data)
    //         })
    // }
    useEffect(() => {
        axios.get("http://localhost:8081/review/bycustomer/" + Customer.customerId).then(resp => setReview(resp.data));
    }, [])

    return (
        <div id="viewreviewbg">
            {
                review.map(p => <div>
                    <h2 style={{position:"relative",left:"-180px"}}>Review Details</h2>
                    <table id="reviewdetailstable">
                        <tr>
                            <th id="bdthead">BookId</th>
                            <td id="bdtcell">{p.book.bookId} </td>
                        </tr>
                        <tr>
                            <th id="bdthead">BookTitle</th>
                            <td id="bdtcell"> {p.book.title} </td>
                        </tr>
                        <tr>
                            <th id="bdthead">BookAuthor</th>
                            <td id="bdtcell"> {p.book.author} </td>
                        </tr>
                        <tr>
                            <th id="bdthead">BookPrice</th>
                            <td id="bdtcell">{p.book.price} </td>
                        </tr>
                        <tr>
                            <th id="btdhead">Book Category Name</th>
                            <td id="btdcell"> {p.book.category.categoryName} </td>
                        </tr>
                        <tr>
                            <th id="bdthead">Customer Id</th>
                            <td id="bdtcell"> {p.customerId} </td>
                        </tr>
                        <tr>
                            <th id="bdthead">HeadLine</th>
                            <td id="bdtcell"> {p.headLine} </td>
                        </tr>
                        <tr>
                            <th id="bdthead">Comment</th>
                            <td id="bdtcell"> {p.comment} </td>
                        </tr>
                        <tr>
                            <th id="bdthead">Rating</th>
                            <td id="bdtcell"> {p.rating} </td>
                        </tr>
                        <tr>
                            <th id="bdthead">Review Posted On</th>
                            <td id="bdtcell"> {p.reviewOn} </td>
                        </tr>
                    </table>
                </div>)
            }
            <Link to="/Home" id="reviewlink">Go to Home Page</Link>
        </div>)
}
export default ViewReview;