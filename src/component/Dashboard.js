import React from 'react';
import Logout from './Logout';
import EmployeeLogout from './Logout';

function Dashboard(){

    const employee = JSON.parse(localStorage.getItem("mytoken"));
     return(
     <div>
        {
        
        employee !== null ?
        <div>
            <h2>Dashboard</h2>
            <b> Welcome {employee.empName}</b>
            <hr></hr>
            <Logout/>
            </div>
            : <h2> Please login </h2>
            }
            </div>
            )
}
export default Dashboard;

