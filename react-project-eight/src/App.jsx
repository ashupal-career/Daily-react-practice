import { createContext, useState } from 'react'
import ChildA from './components/ChildA';

// step1: Create Context
const UserContext = createContext();
// step2: wrap all the child inside a provider
// step3: pass value 
// step4: Go to inside a consumer and consume it

function App() {
  const [user, setUser] = useState({name:"Ashu"});

  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
