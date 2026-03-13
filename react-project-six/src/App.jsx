import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    alert("Button Clicked");
  }

  function handleInputChange(e) {
    console.log("value till now: ",e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    // I am writing my customm behaviour down
    alert("Form Submited...!")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='sumbit'>Submit</button>
      </form>
      {/* <button onClick={handleClick}>Click me</button> */}

      {/* immetdiate invocation*/}
      <button onClick={() => alert("Button clicked")}>Click me</button>
    </div>
  )
}

export default App
