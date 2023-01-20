import React from 'react';

import { useNavigate } from 'react-router-dom';

function Logout() {

    const Customer = JSON.parse(localStorage.getItem("mytoken"));
    const navigate = useNavigate();
    const handleLogout = () => {
        if (Customer !== null) {
            localStorage.removeItem("mytoken");
            alert("Sucessfully logout");
            navigate("/");
        }
    }
    return (
        <div>
            <div>
            <h1>Confirm Logout?</h1>
            <button onClick={handleLogout} className="btn btn-primary">Logout</button>
            </div>
        </div>
    )
}

export default Logout;

