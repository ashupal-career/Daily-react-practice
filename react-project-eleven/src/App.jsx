import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let val = useRef(0);
  let btnRef = useRef();

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val" ,val.current);
    setCount(count+1);
  }

// It runs on every render
  useEffect(() => {
    console.log("Render");
  })

  function changeColor() {
    btnRef.current.style.backgroundColor = 'red';
  }

  return (
    <>
    <button ref={btnRef} onClick={handleIncrement}>Increment</button>
    <br />
    <button onClick={changeColor}>Change color of 1st button</button>
    <br />
    <div>
      Count:{count}
    </div>
    </>
  )
}

export default App
