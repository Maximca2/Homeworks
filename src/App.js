import React from 'react';
import { Container } from 'react-bootstrap';
import {Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AboutUser from './pages/AboutUser/AboutUser';
import NotFound from './pages/Not found/Not found';

import './App.css';

function App() {
  
  return (
    <div className="app">
        <Container>
      <div className='box'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/user/:userId" element={<AboutUser />} />
        </Routes>
      </div>
        </Container>
    </div>
  );
}

export default App;