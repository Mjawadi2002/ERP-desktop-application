import React from 'react';
import UserPage from "./userpage";
import stock from "./images/stock.jpeg";
import manage from "./images/service.jpeg";
import './Home.css';  

export default function Home() {
    

    const functionalities = [
        { id: "1", title: "Manage Daily", description: "This user functionality gives the user the opportunity to set the daily income and costs", image: stock ,destination:"/dailyform"},
        { id: "2", title: "Manage Service", description: "This user functionality gives the user the opportunity to manage the daily set", image: manage,destination:"/manageservice" },
    ];

    return (
        <div className='container-fluid' style={{paddingTop:"12rem"}}>
            <div className="card-container " >
                {functionalities.map((functionality) => (
                <UserPage
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
