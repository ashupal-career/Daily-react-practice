import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import Ash from './assets/Ash.png'
import Akki from './assets/Akki.png'
import Yash from './assets/Yash.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard name='Ashu' desc='Works on both frontend and backend development, building complete web applications and handling everything from UI design to server and database management.' image={Ash}/>
      <UserCard name='Yash' desc='Builds user interfaces for websites and web applications using technologies like HTML, CSS, JavaScript, and React. Focuses on creating responsive, interactive, and user-friendly designs.' image={Yash}/>
      <UserCard name='Akki' desc='Develops and manages the server-side logic, APIs, and databases of applications using technologies like Java, Node.js, Spring Boot, and MySQL to ensure smooth functionality.' image={Akki}/>
    </div>
  )
}

export default App
