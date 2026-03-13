import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // first -> side-effect function
  // second -> clean-up function
  // third -> comma seprated dependence list

  // 1 variation: run on every  render 
  useEffect(() => {
    alert("I will run on each render")
  })

  function handleClick() {
    setCount(count+1);
    
  }

  return (
    <>
    <h1>Count is: {count}</h1>
    <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App
