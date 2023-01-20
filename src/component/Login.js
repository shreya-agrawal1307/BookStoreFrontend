import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
// import './Login.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Customer, setCustomer] = useState(null);
    const [msg, setMsg] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = () => {

        let errors = {};
        if(!email){
            errors['emailError']="Email is required."
        }
        if(!password){
            errors['passwordError'] = "Password is required."
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length===0;
        if(noErrors){
        
        const payload = {
            email: email,
            password: password
        }
    
        axios.post("http://localhost:8081/auth/login", payload).then(resp => {
            setCustomer(resp.data);
            const obj = {
                customerId: resp.data.customerId,
                email: resp.data.email
             }
            localStorage.setItem("mytoken", JSON.stringify(obj));
            alert("Login success");
            navigate("/Home");
       }).catch(error => {
               alert("login failed")
                setMsg(error.response.data);
            })
    }
}

    return (

        <div class="container-fluid">
           {
              msg
            }
            <div id='bg'>
                <div style={{backgroundColor:'white'}}>
                    <h1 style={{marginTop:"0px",color:'Blue'}}>Welcome To Online BookStore!!</h1>
                </div>
                <div id='loginbox'>
                <div className="form-group">
                    <label htmlFor='email'>Email Id</label>
                    <input type="text" name="email" placeholder='Enter Email' value={email} className="form-control" id="email"
                    onChange={(event) => setEmail(event.target.value)} /><br/>
                    {
                    formErrors.emailError && <div style = {{color: "red"}}>{formErrors.emailError}</div>
                    }
                </div><br/>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" placeholder='Enter password' value={password} className="form-control" id="password"
                    onChange={(event) => setPassword(event.target.value)} />
                    {
                        formErrors.passwordError && <div style ={{color: "red"}}>{formErrors.passwordError}</div>
                    }
                </div><br/>
                <button onClick={handleSubmit} className="btn btn-primary" id='lbutton'>Login</button><br/>
                <Link to="/SaveCustomer"><label>Don't have an account ? Register here</label></Link>
                </div>
            </div>
            <div id="icon">
                <p>For more details contact us!</p>
                <p><i class="fa fa-instagram"></i>&nbsp;&nbsp;<i class="fa fa-facebook"></i>&nbsp;
                &nbsp;<i class="fa fa-twitter"></i>&nbsp;&nbsp;<i class="fa fa-youtube"></i></p>  
            </div>
        </div>
    );
            }
export default Login;