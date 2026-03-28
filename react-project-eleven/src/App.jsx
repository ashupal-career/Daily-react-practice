import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleIncrement() {
    setCount(count+1);
  }

// It runs on every render
  useEffect(() => {
    console.log("Render");
  })

  return (
    <>
    <button onClick={handleIncrement}>Increment</button>
    <br />
    <div>
      Count:{count}
    </div>
    </>
  )
}

export default App
