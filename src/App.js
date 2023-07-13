
import './App.css';
import React from 'react';
import MainPage from './pages/MainPage';
import { Container } from 'react-bootstrap';
// REdux
// Корзина дані з Redux

// дефолтні дані закинути в редакс і після цього ти їм отримуєш і відмальовуєш на головній сторінці

// після кліку на "добавити в корзину", ти добавляєш цей айтем в редактс. І в самій корзині ти берез ці дані з редаксу

// git навчится робити гілки пул реквест ну і пушити нормально

//1 Почистити код варнінги іипорти!
//2 Зберігати корзину після перезавантаження
// 3 знести redux на UseContext ,Context не мерджу гілку створюю просто пул реквест
// 4 винести корзину в окремо сторінку!
// 5 збільшити до 30 пагінація
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