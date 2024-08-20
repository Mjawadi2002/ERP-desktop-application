import React from "react";
import AdminFunction from "./AdminFunction";
import manage from './images/manageservice.jpeg'
import employers from './images/employers.jpeg'
import reports from './images/generatereports.jpeg'
import './Home.css';  
function Admin(){
    const functions=[
        { id:"1",title:"Manage service",description:"this functionality is for the admin to fetch data from daily",image:manage,destination:"/manageservice"},
        { id:"2",title:"Manage Employers",description:"this functionality is for the admin to manage employers",image:employers,destination:"/employers"},
        { id:"3",title:"Generate reports",description:"this functionality is for the admin to generate reports",image:reports,destination:"/reports"}
    ]
    return (
        <div className='container-fluid' style={{paddingTop:"12rem"}}>
            <div className="card-container " >
                    {functions.map((functionality) => (
                    <AdminFunction
                        key={functionality.id}
                        title={functionality.title}
                        description={functionality.description}
                        image={functionality.image}
                        destination={functionality.destination}
                    />
                ))}
            </div>
        </div>
          
    );
}

export default Admin;