import React from 'react';
import { Container } from 'react-bootstrap';

import MainRoute from './pages/MainRoutePage/MainRoute';

import './App.css';
function App() {
  return (
    <div className="App">
      <Container>
        <MainRoute/>
      </Container>
    </div>
  );
}
export default App;