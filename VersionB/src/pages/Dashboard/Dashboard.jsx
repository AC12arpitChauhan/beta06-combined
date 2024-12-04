import React from 'react'
import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import BentoGrid from '../../components/BentoGrid/BentoGrid'
import HeroSection from '../../components/HeroSection/HeroSection'

const Dashboard = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
      
        <Navbar />
        {/* <HeroSection/> */}
        <BentoGrid />
      </div>
    </div>
  )
}

export default Dashboard
