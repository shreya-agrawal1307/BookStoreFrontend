import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SaveCustomer(){

    const [cEmail, setCEmail] = useState("");
    const [cFullName, setCFullName] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [cMobileNumber, setCMobileNumber] = useState("");
    const [cRegisterOn, setCRegisterOn] = useState("");
    const [addressname,setAddressname]=useState("");
    const[city,setCity]=useState("");
    const [country,setCountry]=useState("");
    const [pincode,setPincode]=useState("");
   
    const handleSubmit = () => {
        const payload = {
            email : cEmail,
            fullName : cFullName,
            password : cPassword,
            mobileNumber : cMobileNumber,
            registerOn : cRegisterOn,
            address:{
                addressName: addressname,
                city: city,
                country: country,
                pincode: pincode
             }
        }
        //call the api to save the user
        axios.post("http://localhost:8081/customer/save",payload).then(resp => 
                alert("Customer is saved with id: "+resp.data.customerId));
    }

    return (<div id='bg'>
            <div style={{backgroundColor:'white'}}>
                    <h1 style={{marginTop:"0px",color:'Blue'}}>Welcome To Online BookStore!!</h1>
                </div>
            <div className ="container" id="signupbox">
            <table>
                <tr>
                <td>Customer Email</td>
                <td><input type="text" name="cEmail" value ={cEmail} className ="form-control" id="cEmail"
                onChange={(event)=> setCEmail(event.target.value)}/></td>
                </tr>
                <tr>
                <td>Customer Full Name</td>
                <td><input type="text" name="cFullName" value ={cFullName} className ="form-control" id="cFullName"
                onChange={(event)=> setCFullName(event.target.value)}/></td>
                </tr>
            <tr>
                <td>Set Password</td>
                <td><input type="text" name="cPassword" value ={cPassword} className ="form-control" id="cPassword"
                onChange={(event)=> setCPassword(event.target.value)}/></td>
            </tr>
            <tr>
                <td>Mobile Number</td>
                <td><input type="text" name="cMobileNumber" value ={cMobileNumber} className ="form-control" id="cMobileNumber"
                 onChange={(event)=> setCMobileNumber(event.target.value)}/></td>
            </tr>
            <tr>
                <td>RegisteredOn</td>
                <td><input type="date" name="cRegisterOn" value ={cRegisterOn} className ="form-control" id="cRegisterOn"
                 onChange={(event)=> setCRegisterOn(event.target.value)}/></td>
            </tr>
            <tr>
                <td>Address</td>
                <td><input type="text" value={addressname} onChange={(event)=>setAddressname(event.target.value)}/></td>
            </tr>
            <tr>
            <td>City</td>
            <td><input type="text" value={city} onChange={(event)=>setCity(event.target.value)}/></td>
            </tr>
            <tr>
            <td>Country</td>
            <td><input type="text" value={country} onChange={(event)=>setCountry(event.target.value)}/></td>
            </tr>
            <tr>
            <td>Pincode</td>
            <td><input type="text" value={pincode} onChange={(event)=>setPincode(event.target.value)}/></td>
            </tr>
            </table><br/>
            <button onClick ={handleSubmit} class="btn-btn-primary" >Register</button>
        </div>
        <br/>
        <div>
        <Link to="/" style={{marginTop:"84px"}}>Go to login Page</Link>
        </div>
        </div>
    )
}

export default SaveCustomer;