import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Landingpage from './Landingpage';
import Profile from './Profile';
import Admin from './Adminpage';
import DailyForm from './Dailyform.js';
import ManageService from './MangaeService.js';
import AdminManageEmployers from './AdminManageEmployers.js';
import AdminManageReports from './AdminManageReports.js';
import React, { useState } from 'react';
import AdminCreateEmployer from './AdminCreateEmployer.js';

function App() {
  const [isLogin, setLogin] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  return (
    <>
      <Router>
        {isLogin && <Header setLogin={setLogin} />}
        <Routes>
          <Route path='/home' element={<Home isAdmin={isAdmin} />} /> 
          <Route path="/" element={<Landingpage setLogin={setLogin} />} />
          <Route path='/login' element={<Login setLogin={setLogin} setAdmin={setAdmin} />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/dailyform' element={<DailyForm />} />
          <Route path='/profile' element={<Profile isAdmin={isAdmin} setLogin={setLogin} setAdmin={setAdmin} />} />
          <Route path='/manageservice' element={<ManageService />} />
          <Route path='/employers' element={<AdminManageEmployers />} />
          <Route path='/reports' element={<AdminManageReports />} />
          <Route path='/createemployer' element={<AdminCreateEmployer />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
