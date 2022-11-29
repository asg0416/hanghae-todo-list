import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Header from './components/Header';
import './index.css';

function App() {
  const [cardList, setCardList] = useState([
    { id: 0, title: "sample title 1", content: "sample content 1", isDone: false },
    { id: 1, title: "sample title 2", content: "sample content 2", isDone: true },
  ]);
  return (
    <div className="App">
      <Header />
      <Form cardList={cardList} setCardList={setCardList} />
      <Dashboard cardList={cardList} setCardList={setCardList} />
    </div>
  );
}

export default App;
