import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Review() {

    const [rReviewId, setReviewId] = useState("");
    const [bBookId, setBookId] = useState("");
    const [rCustomerId, setCustomerId] = useState("");
    const [rHeadLine, setHeadLine] = useState("");
    const [rComment, setComment] = useState("");
    const [rRating, setRating] = useState("");
    const [rReviewOn, setReviewOn] = useState("");
    const navigate=useNavigate();
    const Customer = JSON.parse(localStorage.getItem("mytoken"));

    const handleSubmit = () => {
        const payload = {
            reviewId: rReviewId,
            book: {
                bookId: bBookId,
            },
            customerId: rCustomerId,
            headLine: rHeadLine,
            comment: rComment,
            rating: rRating,
            review: rReviewOn
        }

        axios.post("http://localhost:8081/review/save/"+bBookId, payload).then(resp =>
            alert("Review is Saved with Id: " + resp.data.reviewId)
        );
    }

    const handleClick=()=>{
        navigate('/viewReview');
    }

    return (<div className="container" id="reviewbg">
        <div id="reviewdiv">
         <div className="form-group">
            <label htmlFor="bBookId">Book Id</label>
            <input type="text" name="bBookId" value={bBookId} className="form-control" id="bBookId" onChange={(event) => setBookId(event.target.value)}></input>
        </div>
        < div className = "form-group" >
            <label htmlFor="rCustomerId">Customer Id</label>
            <input type="text" name="rCustomerId" value={rCustomerId} className="form-control" id="rCustomerId" onChange={(event) => setCustomerId(event.target.value)}></input>
        </div >
        <div className="form-group">
            <label htmlFor="rHeadLine">HeadLine</label>
            <input type="text" name="rHeadLine" value={rHeadLine} className="form-control" id="rHeadLine" onChange={(event) => setHeadLine(event.target.value)}></input>
        </div>
        <div className="form-group">
            <label htmlFor="rComment">Book Comment</label>
            <input type="text" name="rComment" value={rComment} className="form-control" id="rComment" onChange={(event) => setComment(event.target.value)}></input>
        </div>
        <div className="form-group">
            <label htmlFor="rRating">Book Ratings</label>
            <input type="text" name="rRating" value={rRating} className="form-control" id="rRating" onChange={(event) => setRating(event.target.value)}></input>
        </div>
        <div className="form-group">
            <label htmlFor="rReviewOn">Book Review On</label>
            <input type="date" name="rReviewOn" value={rReviewOn} className="form-control" id="rReviewOn" onChange={(event) => setReviewOn(event.target.value)}></input>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={handleClick}>View Reviews</button>
        </div>
    </div >)
}
export default Review;