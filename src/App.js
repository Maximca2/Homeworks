
import './App.css';
import React from 'react';
import MainPage from './components/MainPage/MainPage';
import Container from 'react-bootstrap/esm/Container';

// REdux
// Корзина дані з Redux

// дефолтні дані закинути в редакс і після цього ти їм отримуєш і відмальовуєш на головній сторінці

// після кліку на "добавити в корзину", ти добавляєш цей айтем в редактс. І в самій корзині ти берез ці дані з редаксу

// git навчится робити гілки пул реквест ну і пушити нормально
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