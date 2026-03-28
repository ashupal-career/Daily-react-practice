import {useState, useRef } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time+1)
    },1000)
  }
  
  function stopTimer() {
    clearInterval(timerRef.current)
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }


  return (
    <>
    <h1>StopWatch: {time} seconds</h1>
    <button onClick={startTimer}>Start</button><br />
    <button onClick={stopTimer}>Stop</button><br />
    <button onClick={resetTimer}>Reset</button><br />

    </>
  )
}

export default App
