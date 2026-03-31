import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'
import ExpensiveComponent from './components/ExpensiveComponent'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(count+1);
  }, [])
  return (
    <>
    {/* Count: {count}
    <button onClick={handleClick}>Increment</button><br />
    <div>
      <ChildComponent 
      buttonName='Click me'
      handleClick={handleClick}/>
    </div> */}
    {/* <ExpensiveComponent/> */}
    <Child/>
    </>
  )
}

export default App
