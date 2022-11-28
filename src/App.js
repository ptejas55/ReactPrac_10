import React from 'react';
import './style.css';

export default function App() {
  const arr = ['tejas', 'kishan', 'ram'];
  const username = arr.map((name) => name + ' L.d');
  let i = 0;
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p> welcome {username[0]} </p>
      <p> welcome {username[1]} </p>
      <p> welcome {username[2]} </p>
    </div>
  );
}
