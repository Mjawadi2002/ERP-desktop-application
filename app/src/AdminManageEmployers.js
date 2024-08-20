import React, { useState, useEffect } from 'react';
import {Toaster,toast} from 'sonner';
export default function AdminManageEmployers(){
    const [employerData, setEmployerData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/api/employer') 
            .then(response => response.json())
            .then(data => {
                setEmployerData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching employers data:', error);
                setLoading(false);
            });
    }, []);


    const handleDelete = (id) => {
        console.log(`Delete item with id: ${id}`);
        fetch(`http://localhost:4000/api/employer/delete/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                toast("Deleting operation successfully}")
                setEmployerData(employerData.filter(item => item._id !== id));
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
            {employerData.length === 0 ? (
                <p>No employer data available.</p>
            ) : (
                <table className="table table-striped table-dark " style={{border:"solid"}}>
                    <thead>
                        <tr>
                            <th scope="col">Username</th>                       
                            <th scope="col">Configuration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employerData.map((employer) => (
                            <tr key={employer._id}>
                                <td>{employer.username}</td>
                                <td>
                                    <Toaster />
                                    <button className="btn btn-danger" onClick={() => handleDelete(employer._id)}>Delete</button>
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