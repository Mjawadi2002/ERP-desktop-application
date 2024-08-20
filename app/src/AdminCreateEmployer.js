import React, { useState } from 'react';
import axios from 'axios';
import {Toaster,toast} from 'sonner';


export default function AdminCreateEmployer() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/employer/create', {
                username,
                password
            });

            if (response.status === 201) {
                toast('user created succesfully')
                setUsername('');
                setPassword('');
            }
        } catch (error) {
            console.error('There was an error creating the employer!', error);
            toast('failed to create user')
        }
    };

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container-fluid">
                <div className="login-form">
                    <h3>Create Employer</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group py-1">
                            <label htmlFor="username">Username*</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group py-2">
                            <label htmlFor="password">Password*</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Toaster/>
                        <button type="submit" className="btn btn-warning py-2" style={{ marginRight: '10px' }} >
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
