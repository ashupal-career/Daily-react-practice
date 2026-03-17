import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  function handleClick () {
    navigate('/about')
  }
  return (
    <div className="page">
        <h1>Home Page</h1>
        <p>Welcome to our React Router demo application.</p>
        <p>This page is the main landing page of the website.</p>
        <button onClick={handleClick}>Move to About Page</button>
    </div>
  )
}

export default Home