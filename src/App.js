import React, { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Hide elemnt below </button>
      <br />
      {show ? 'Toggle' : ''}
    </div>
  );
}
