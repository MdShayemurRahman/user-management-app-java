import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Update from './pages/Update';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/addUser' element={<Profile />} />
            <Route path='/user/update/:id' element={<Update />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
