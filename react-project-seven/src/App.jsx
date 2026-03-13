import { useEffect, useState } from 'react'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'

function App() {
  // const [count, setCount] = useState(0)
  // const [total, setTotal] = useState(1)

  // first -> side-effect function
  // second -> clean-up function
  // third -> comma seprated dependence list


  // 1 variation: run on every  render 
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  // 2 variation: That runs on only first render
  // useEffect(() => {
  //   alert("I will run on only 1st render")
  // },[])

  // 3 variation: That will run every updated
  // useEffect(()=> {
  //   alert("I will run every time when count is updated")
  // },[count])

// 4 variation: Multiple dependency
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated")
  // },[count, total])

// 5 variation: let's add a clean-up function
// useEffect(() => {
//   alert("Count is updated")
//   return() => {
//     alert("count is unmounted form UI")
//   }
// },[count])


  // function handleClick() {
  //   setCount(count+1);
  // }
  // function handleClickTotal() {
  //   setTotal(total+1);
  // }

  return (
    <>
    {/* <h1>Count is: {count}</h1>
    <button onClick={handleClick}>update Count</button>
    <h1>Total is: {total}</h1>
    <button onClick={handleClickTotal}>update Total</button> */}

    {/* <LoggerComponent/> */}
    {/* <TimerComponent/> */}

    </>
  )
}

export default App
