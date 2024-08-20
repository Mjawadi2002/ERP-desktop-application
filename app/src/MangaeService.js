import React, { useState, useEffect } from 'react';
import {Toaster,toast} from 'sonner';
export default function ManageService() {
    const [dailyData, setDailyData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/api/daily') 
            .then(response => response.json())
            .then(data => {
                setDailyData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching daily data:', error);
                setLoading(false);
            });
    }, []);

    const handleEdit = (id) => {
        // Implement edit functionality here
        console.log(`Edit item with id: ${id}`);
    };

    const handleDelete = (id) => {
        // Implement delete functionality here
        console.log(`Delete item with id: ${id}`);
        fetch(`http://localhost:4000/api/daily/delete/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                toast("deleting operation successfully")
                setDailyData(dailyData.filter(item => item._id !== id));
            })
            .catch(error => console.error('Error deleting item:', error));
    };

    if (loading) {
        return <div className="container-fluid"><p>Loading...</p></div>;
    }

    return (
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container-fluid">
            <h3 className="text-white text-center">Manage Service</h3>
            {dailyData.length === 0 ? (
                <p>No daily data available.</p>
            ) : (
                <table className="table table-striped table-dark " style={{border:"solid"}}>
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Express</th>
                            <th scope="col">Capucin</th>
                            <th scope="col">Direct</th>                            <th scope="col">Juice</th>
                            <th scope="col">Configuration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dailyData.map((daily) => (
                            <tr key={daily._id}>
                                <td>{new Date(daily.createdAt).toLocaleDateString()}</td>
                                <td>{daily.express_quantity}</td>
                                <td>{daily.capucin_quantity}</td>
                                <td>{daily.direct_quantity}</td>
                                <td>{daily.jus_quantity}</td>
                                <td>
                                    <Toaster/>
                                    <button className="btn btn-danger" onClick={() => handleDelete(daily._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        </>
     
    );
}
