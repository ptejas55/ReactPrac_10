import React from 'react';
import './style.css';

export default function App() {
  const arr = ['tejas', 'kishan', 'ram'];
  const username = arr.map((name) => name);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p> welcome {username} </p>
    </div>
  );
}
