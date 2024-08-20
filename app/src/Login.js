import React, { useState } from 'react';
import logo from './images/logo.png'; 
import { useNavigate } from 'react-router-dom';

export default function Login({ setLogin, setAdmin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'adminpassword') {
      setLogin(true);
      setAdmin(true);  
      navigate('/home');  
    } else {
      setLogin(true);
      setAdmin(false);  
      navigate('/home');  
    }
  };

  return (
    <div className="container-fluid">
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="row">
        <div className="col-md-8 d-flex justify-content-center align-items-center">
          <div className="login-form">
            <h3>Login</h3>
            <form onSubmit={login}>
              <div className="form-group py-1">
                <label htmlFor="username">Username*</label>
                <input 
                  type="text" 
                  id="username" 
                  className="form-control" 
                  placeholder="Enter username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
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
                />
              </div>
              <button type="submit" className="btn btn-warning py-2" style={{ marginRight: '10px' }}>
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-4 px-5 d-flex justify-content-center align-items-center">
          <img src={logo} alt="Logo" width="200" />
        </div>
      </div>
    </div>
  );
}
