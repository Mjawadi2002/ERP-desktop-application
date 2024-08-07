import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Landingpage from './Landingpage';
import Profile from './Profile';
import React, { useState } from 'react';
import Admin from './Adminpage';
import DailyForm from './Dailyform.js';
import ManageService from './MangaeService.js';
import AdminManageService from './AdminManageService.js';
import AdminManageEmployers from './AdminManageEmployers.js';
import AdminManageReports from './AdminManageReports.js';

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <>
      <Router>
        {isLogin && <Header setLogin={setLogin}/>}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/" element={<Landingpage setLogin={setLogin} />} />
          <Route path='/login' element={<Login setLogin={setLogin} />} />
          <Route path='/profile' element={<Profile  setLogin={setLogin}/>} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/dailyform' element={<DailyForm />} />
          <Route path='/manageservice' element={<ManageService />} />
          <Route path='/data' element={<AdminManageService />} />
          <Route path='/employers' element={<AdminManageEmployers />} />
          <Route path='/reports' element={<AdminManageReports />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
