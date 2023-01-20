import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

function OrderDetails() {
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();
    const Customer = JSON.parse(localStorage.getItem("mytoken"));

    useEffect(() => {
        axios.get("http://localhost:8081/customer/get/"+Customer.customerId).then(resp => setOrder(resp.data));
    }, [])

    const handleClick = () => {
        navigate('/review');
    }

    return (<div id="detailsbg">
        <h1 style={{position:"relative",left:"-190px"}}>Order Confirmed!!</h1>
        {
            order.map(p => <div>
                <table id="orderdetailstable">
                    <tr>
                        <th id="bdthead">Order ID</th>
                        <td id="bdtcell">{p.orderId}</td>
                    </tr>
                    <tr>
                        <th id="bdthead">Name</th>
                        <td id="bdtcell">{p.customer.fullName}</td>
                    </tr>
                    <tr>
                        <th id="bdthead">Mobile</th>
                        <td id="bdtcell">{p.customer.mobileNumber}</td>
                    </tr>
                    <tr>
                        <th id="bdthead">Status</th>
                        <td id="bdtcell">{p.status}</td>
                    </tr>
                    <tr>
                        <th id="bdthead">Address</th>
                        <td id="bdtcell"> {p.customer.address.addressName}<br/>
                            {p.customer.address.city}<br />
                            {p.customer.address.country}<br />
                            {p.customer.address.pincode}</td>
                    </tr>
                </table>
            </div>)
        }
        <br/>
        <div>
            <button onClick={handleClick} id="givereviewbtn">Add Your Review</button>
        </div>
        <Link to="/Home" id="reviewlink">Go to Home Page</Link>
    </div>)
}
export default OrderDetails;