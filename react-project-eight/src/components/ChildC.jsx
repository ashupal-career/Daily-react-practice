import React from 'react'
import { UserContext, useContext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext);
  return (
    <div>
        {console.log("Hello")}
        <h1>{user.name}</h1>
    </div>
  )
}

export default ChildC