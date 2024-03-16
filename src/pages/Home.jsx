import React from 'react'
import banner from "../assets/banner.jpg"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='flex justify-center flex-col'>
       <img src={banner} className=''/>
       {/* <div className='flex justify-center items-center flex-col'> */}
        <div className='flex flex-row gap-20 mb-10 justify-center m-4'>
        <button className='bg-gradient-to-br from-red-700 to-red-200 p-20 border-2 text-4xl font-bold text-gray-200 shadow-2xl w-full hover:scale-100'>
        <Link to="/donate"> Donate Blood  </Link> 
        </button>
        <button className='bg-gradient-to-br from-red-700 to-red-200 p-20 border-2 text-4xl font-bold text-gray-200 shadow-2xl w-full hover:scale-100'>
        <Link to="/data"> Blood bank directory </Link>  
        </button>
        </div>
        <div className='flex flex-row gap-20 justify-center m-4'>
        <button className='bg-gradient-to-br from-red-700 to-red-200 p-20 border-2 text-4xl font-bold text-gray-200 w-full shadow-2xl w-100 hover:scale-100'>
           <Link to="/camps"> Camps Near you </Link> 
        </button>
        <button className='bg-gradient-to-br from-red-700 to-red-200 p-20 border-2 text-4xl font-bold text-gray-200 w-full shadow-2xl w-100 hover:scale-100'>
        <Link to="/form"> Order Blood </Link> 
        </button>
        </div>
       {/* </div> */}
    </div>
  )
}
