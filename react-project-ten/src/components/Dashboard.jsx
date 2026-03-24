import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="page">
        <h1>Dashboard</h1>
        <p>This is the dashboard where users can see their data.</p>
        <p>You can add analytics, reports, and user information here.</p>
        <Outlet/>
    </div>
  )
}

export default Dashboard