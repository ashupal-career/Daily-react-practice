import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)

  // -------------------If/Else-----------------------

  // if(isLoggedIn)
  // {
  //   return (
  //     <LogoutBtn/>
  // )
  // }
  // else {
  //   return(
  //     <LoginBtn/>
  //   )
  // }

  // -----------------Ternary Operator-----------------------
  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  // -------------------Early return-----------------------
  if(!isLoggedIn) {
    return (
      <LoginBtn/>
    )
  }
  // -------------------Logical Operator-----------------------
  return(
    <div>
      <h1>Hello EveryOne..!</h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )

}


export default App
