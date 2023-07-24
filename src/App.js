
import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
import { Container } from 'react-bootstrap';
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