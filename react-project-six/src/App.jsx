import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    alert("Clicked button");
  }

  function handleInputChange(e) {
    console.log("value till now: ",e.target.value)
  }

  return (
    <div>
      <form>
        <input type="text" onChange={handleInputChange} />
      </form>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default App
