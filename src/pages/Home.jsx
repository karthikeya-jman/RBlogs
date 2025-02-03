import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'

const Home = () => {
    
  return (
    <div className='flex gap-1'>
        <SideBar />
        <Header />
    </div>
  )
}

export default Home