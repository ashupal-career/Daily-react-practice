import './App.css'
import React, { useState } from "react";
import Card from "./components/Card";

function App() {

  const [name, setName] = useState("");

  return (
    <>
      <Card name={name} setName={setName} />
      <p>I am inside Parent component and value of name is :{name}</p>
    </>
  )
}

export default App