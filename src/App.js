import React from 'react';
import { Container } from 'react-bootstrap';

import MainPage from './pages/MainPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <MainPage />
      </Container>
    </div>
  );
}
export default App;