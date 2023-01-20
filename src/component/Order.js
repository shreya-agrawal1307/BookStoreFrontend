import axios from "axios";
import React, { useEffect, useState} from "react";
import { useParams,useNavigate, Link } from "react-router-dom";

function Order(){
    const [custId,setCustomerId]=useState("");
    const [orderdate,setOrderdate]=useState("");
    const [paymentmethod,setPaymentMethod]=useState("");
    const[recipientname,setRecipientName]=useState("");
    const[recipientphone,setRecipientPhone]=useState("");
    const [stat,setStatus]=useState("");
    const Customer = JSON.parse(localStorage.getItem("mytoken"));
    const navigate=useNavigate();

    const handleSubmit=()=>{
    const payload= {
        orderDate: orderdate,
        status: stat,
        paymentMethod: paymentmethod,
        recipientName: recipientname,
        recipientPhone: recipientphone,   
      }
        axios.post("http://localhost:8081/order/save/"+Customer.customerId,payload).then(resp=>resp.data.orderId);
        alert("Order Placed");
        navigate("/orderdetails")
    }
    const handleSubmit1=()=>{
        navigate('/orderdetails');
    }

    return(
        <div id="orderbg">
        <h1 id="orderheading">Order Confirmation Form</h1>
        <div id="orderbox">
        <label for="RecipientName">RecipientName&nbsp;</label>
        <input type="text" value={recipientname} onChange={(event)=>setRecipientName(event.target.value)}/><br/><br/>
        <label for = "recipientphone">RecipientPhone&nbsp;</label>
        <input type="text" value={recipientphone} onChange={(event)=>setRecipientPhone(event.target.value)}/><br/><br/>
        <label for = "date">Date Of Order&nbsp;&nbsp;&nbsp;</label>
        <input type="date" value={orderdate} onChange={(event)=>setOrderdate(event.target.value)}/><br/><br/>
        <label for="payment" id="ordderboxlabelpay">PaymentMethod&nbsp;</label>
        <input type="text" placeholder="Either COD/UPI/Cards" value={paymentmethod} name="payment" onChange={(event)=>setPaymentMethod(event.target.value)}/><br/><br/>
        <label for = "stat">status&nbsp;</label>
        <input type="text"  placeholder="Ordered/NotOrdered" value={stat} onChange={(event)=>setStatus(event.target.value)}/><br/><br/>
        <button onClick={handleSubmit}>Confirm</button>&nbsp;&nbsp;&nbsp;<button onClick={handleSubmit1}>View Order Details</button>
        </div>
        </div>
    )
}
export default Order;