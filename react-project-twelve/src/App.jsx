import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count+1)
  }
  return (
    <>
    Count: {count}
    <button onClick={handleClick}>Increment</button><br />
    <div>
      <ChildComponent buttonName='Click me'/>
    </div>
    </>
  )
}

export default App
