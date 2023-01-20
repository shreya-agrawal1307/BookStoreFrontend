import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
    const [customer, setCustomer] = useState([]);
    const Customer = JSON.parse(localStorage.getItem("mytoken"));

    useEffect(() => {
        axios.get("http://localhost:8081/customer/get/"+Customer.customerId).then(resp=>setCustomer(resp.data));
    }, [])

    return (<div id="profilebg">
            <h1 style={{ position: "relative", left: "-220px" }}>Your Profile!!</h1>
                <table id="profiletable">
                    <tr>
                        <th id="bdthead">Customer ID</th>
                        <td id="bdtcell">{customer.customerId}</td>
                    </tr>
                    <tr>
                        <th id="bdthead">Name</th>
                        <td id="bdtcell">{customer.fullName}</td>
                    </tr>
                    <tr>
                        <th id="bdthead">Mobile</th>
                        <td id="bdtcell">{customer.mobileNumber}</td>
                    </tr>
                    <tr>
                        <th id="bdthead">Email</th>
                        <td id="bdtcell">{customer.email}</td>
                    </tr>
                    {/* <tr>
                        <th id="bdthead">Address</th>
                        <td id="bdtcell"> {customer.address.addressName}<br/>
                            {customer.address.city}<br />
                            {customer.address.country}<br />
                            {customer.address.pincode}</td>
                    </tr> */}
                </table>
    </div>)
}
export default Profile;