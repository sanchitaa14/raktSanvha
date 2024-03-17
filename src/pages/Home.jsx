import React from 'react'
import banner from "../assets/banner.jpg"
import { Link } from 'react-router-dom'
import Hero from './Hero'
import AboutUs from './About'
import "./About.css"
import MainFeatures from './components/Features'
export default function Home() {
  return (
    <>
        <Hero/>
        <AboutUs/>
        <MainFeatures/>
    </>
      
    
  )
}
  
      /* <img src={banner} className='absolute w-full -z-20'/>
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"> <h3 className='relative text-brown-600'>You are what matters</h3></div>
       <div className='flex justify-center items-center flex-col'>
       <div className='h-40 '></div>
        <div className='flex flex-row gap-20 mb-10 justify-center m-4 mt-80 z-200'>
        <button className='bg-gradient-to-br from-red-700 to-red-200 p-20 border-2 text-4xl font-bold text-gray-200 shadow-2xl w-full hover:scale-100'>
        <Link to="/donate"> Donate Blood  </Link> 
        </button>
        <button className='bg-gradient-to-br from-red-700 to-red-200 p-20 border-2 text-4xl font-bold text-gray-200 shadow-2xl w-full hover:scale-100'>
        <Link to="/data"> Blood bank directory </Link>  
        
        </button>
        <button className='bg-gradient-to-br from-red-700 to-red-200 p-20 border-2 text-4xl font-bold text-gray-200 w-full shadow-2xl w-100 hover:scale-100'>
           <Link to="/camps"> Camps Near you </Link> 
        </button>
        <button className='bg-gradient-to-br from-red-700 to-red-200 p-20 border-2 text-4xl font-bold text-gray-200 w-full shadow-2xl w-100 hover:scale-100'>
        <Link to="/map"> Order Blood </Link> 
        </button>
        </div>
        <div className='flex flex-row gap-20 justify-center m-4'>
       
        </div>
       </div> */