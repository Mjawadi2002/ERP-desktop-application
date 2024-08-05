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
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin' element={<Admin />} />
          
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
