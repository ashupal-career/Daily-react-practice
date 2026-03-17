import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  function handleClick () {
    navigate('/dashboard')
  }
  return (
    <div className="page">
        <h1>About Page</h1>
        <p>This page contains information about our application.</p>
        <p>It is built using React and React Router.</p>
        <button onClick={handleClick}>Move to Dashboard</button>
    </div>
  )
}

export default About