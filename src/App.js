import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Cat";
const A1 = "Bird"
const A2 = "Pencil"
function App() {
  return (
    <div>

      <div class="cities">
      <h2>GAME</h2>
      <p>เกมเรียงตัวอักษร</p>
      <p>จากคำใบ้ที่กำหนด ผู้เล่นต้องเรียงตัวอักษรให้มีความหมายตรงกับคำใบ้</p>
      </div>

      <div class="cities">
      <p> lavel 1 </p>
      <p> คำใบ้ : เป็นสัตว์ 4 ขา ชอบกินปลา</p>
      <WordCard value={word}/>
      </div>

      <div class="cities">
      <p> lavel 2 </p>
      <p> คำใบ้ : เป็นสัตว์ที่มีปีก</p>
      <WordCard value={A1}/>
      </div>

      <div class="cities">
      <p> lavel 3 </p>
      <p> คำใบ้ : ใช้สำหรับเขียน</p>
      <WordCard value={A2}/>
      </div>

    </div>
    
  );
}


export default App;
