import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header({setLogin}) {
  const logout=()=>{
    setLogin(false)
  }
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
      
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
          <a className="nav-link text-white" href="#"><Link to="/home" style={{textDecoration:"none",color:"white"}}>Home</Link></a>
          </li>
          <li className="nav-item">
          <a className="nav-link text-white" href="#"><Link to="/profile" style={{textDecoration:"none",color:"white"}}>Profile</Link></a>
          </li>
          <li className="nav-item">
          <a className="nav-link text-white" href="#"><Link to="/login" style={{textDecoration:"none",color:"white"}} onClick={logout}>Log out</Link></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
