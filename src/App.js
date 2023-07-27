import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import Basket from "./pages/Basket";
import NotFound from "./pages/Not found/Not found";
import { ROOT_TO_MAINPAGE,ROOT_TO_BASKET } from './Routes/routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
      <div>
      <nav className='navigation'>
        <li>
          <NavLink
            to={ROOT_TO_MAINPAGE}
            className='links'
            style={({ isActive }) => {
              return isActive ? { background: "#FFB4EA" } : {};
            }}
          >
            Back
          </NavLink>
          <NavLink
            className='links'
            to={ROOT_TO_BASKET}
            style={({ isActive }) => {
              return isActive ? { background: "#FFB4EA" } : {};
            }}
          >
            Basket
          </NavLink>
        </li>
      </nav>
      <div className='box'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </div>
      </Container>
    </div>
  );
}

export default App;