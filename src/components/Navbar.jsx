import React from 'react'
import logo from './../assets/logo.png'
import {FaUserCircle} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-5 py-3 shadow-md sticky top-0 right-0 left-0 z-40 bg-white'>
        <a href="#home"><img src={logo} alt="logo" className='w-36' /></a>

        <ul className='flex space-x-5 font-bold items-center'>
            <a href="#apropos"><li>À propos</li></a>
            <a href="#metiers"><li>Nos métiers</li></a>
            <a href="#moyenss"><li>Nos moyens</li></a>
            <a href="#certificats"><li>Certificats</li></a>
            <a href="#agrement"><li>Agréments</li></a>
            <a href="#contact"><li>Nous Contacter</li></a>
            <a href="#" className='rounded-full bg-mainblue text-white px-5 py-3'><li className='flex items-center '><FaUserCircle className='mr-1 text-xl'/> Espace Client</li></a>
        </ul>
    </div>
  )
}

export default Navbar