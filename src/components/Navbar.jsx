import React from 'react'
import logo from './../assets/logo.png'
import {FaUserCircle} from 'react-icons/fa'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {

  const [toggle,setToggle]=useState(false)

  const handletoggle =()=>{
    setToggle(current => !current);
  }

  return (
    <>
    <div className=' flex items-center  justify-between px-5 py-3 shadow-md lg:fixed top-0 right-0 left-0 z-30 bg-white'>
        <a href="#home"><img src={logo} alt="logo" className='w-36' /></a>

        <ul className='md:flex space-x-5 font-bold items-center hidden'>
            <a href="#apropos" onClick={()=>setToggle(false)}><li>À propos</li></a>
            <a href="#metiers" onClick={()=>setToggle(false)}><li>Nos métiers</li></a>
            <a href="#moyenss" onClick={()=>setToggle(false)}><li>Nos moyens</li></a>
            <a href="#certificats" onClick={()=>setToggle(false)}><li>Certificats</li></a>
            <a href="#agrement" onClick={()=>setToggle(false)}><li>Agréments</li></a>
            <a href="#contact" onClick={()=>setToggle(false)}><li>Nous Contacter</li></a>
            <a href="#" className='rounded-full bg-mainblue text-white px-5 py-3'><li className='flex items-center '><FaUserCircle className='mr-1 text-xl'/> Espace Client</li></a>
        </ul>
        <div className="block md:hidden duration-300 ease-linear" onClick={handletoggle}>
          { toggle ? <AiOutlineClose className='text-[30px] z-50 duration-300 ease-linear '/> : <AiOutlineMenu className='text-[30px] z-50 duration-300 ease-linear '/> }
        </div>

    </div>
    { toggle && <ul className='flex-col  bg-gray-50 duration-300 sticky top-0 h-screen    ease-linear flex justify-center font-bold items-center w-full z-10 '>
            <a href="#apropos" className='border-b-[1px] text-gray-700 py-2 mb-2 w-full text-center '><li className=' '>À propos</li></a>
            <a href="#metiers" className='border-b-[1px] text-gray-700 py-2 mb-2 w-full text-center'><li className=' '>Nos métiers</li></a>
            <a href="#moyenss" className='border-b-[1px] text-gray-700 py-2 mb-2 w-full text-center'><li className=' '>Nos moyens</li></a>
            <a href="#certificats" className='border-b-[1px] text-gray-700 py-2 mb-2 w-full text-center'><li className=' '>Certificats</li></a>
            <a href="#agrement" className='border-b-[1px] text-gray-700 py-2 mb-2 w-full text-center'><li className=' '>Agréments</li></a>
            <a href="#contact" className='border-b-[1px] text-gray-700 py-2 mb-2 w-full text-center'><li className=' '>Nous Contacter</li></a>
            <a href="#" className='rounded-full bg-mainblue text-white px-5 py-3 mb-20'><li className='flex items-center '><FaUserCircle className='mr-1 text-xl'/> Espace Client</li></a>
        </ul>}
    </>
  )
}

export default Navbar