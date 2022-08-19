import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function App() {
  return (
    <div>
      <h1>GAME</h1>
      <p>เกมเรียงตัวอักษร</p>
      <WordCard value={word}/>
    </div>
  );
}


export default App;
