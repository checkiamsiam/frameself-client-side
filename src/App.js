import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
};

export default App;
