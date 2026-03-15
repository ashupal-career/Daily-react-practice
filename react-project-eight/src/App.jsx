import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// step1: Create Context
const UserContext = createContext();
// step2: wrap all the child inside a provider
// step3: pass value 
// step4: Go to inside a consumer and consume it

const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({name:"Ashu"});
  const [theme, setTheme] = useState('light');

  return (
    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme,setTheme}}>
          <div id='container' style={{backgroundColor : theme === 'light' ? "beige" : "black"}}>
          <ChildA/>
          </div>
        </ThemeContext.Provider>
       </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
export {ThemeContext}
