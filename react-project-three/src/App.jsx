import { useState } from "react";
import './App.css'
import Button from './components/Button';
import Card from './components/Card'

function App() {
  const [count, setCount] =useState(0);

  // function handleClick() {
  //   setCount(count+1);
  // }

  function handleClick() {
  setCount((prev) => (prev < 20 ? prev + 1 : prev));
}

  return (
    <div>
      <Button handleClick={handleClick}
      text='click me'>
      <h1>{count}</h1>
      </Button>
    </div>
  )
}

export default App
