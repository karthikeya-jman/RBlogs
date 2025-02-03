import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import BlogCard from '../components/BlogCard'
import { useState } from 'react'

const Home = () => {

  const [blogs,setBlogs] = useState(JSON.parse(localStorage.getItem("posts"))||[]);
    
  return (
    <div className='flex gap-1'>
        <SideBar />
        <div className='w-full'>
        <Header />
        <div className='flex flex-wrap gap-5 items-center place-content-center mt-10'>
          {
            blogs.map((item) => {
             return  <BlogCard data={item} key={item.id} blogs ={blogs} setBlogs = {setBlogs}/>
            })
          }
        </div>
        </div>
    </div>
  )
}

export default Home