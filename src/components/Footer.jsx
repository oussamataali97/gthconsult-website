import React from 'react'
import {AiTwotonePhone,AiTwotoneMail} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {FaFax} from 'react-icons/fa'
import { motion } from "framer-motion";

import logo from './../assets/logo2.png'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <div
           initial={{
            opacity: 0,
            scale: 0.5 // set 100vw to 95vw
          }}
          // This is not working
          whileInView={{
            opacity: 1,
            scale: 1 ,
            transition: {
              delay: 0.1,
              type: "spring",
              stiffness: 50
            }
          }}
    className='bg-gray-900 text-white px-7'>
     <motion.div
           initial={{
            opacity: 0,
            scale: 0.5 // set 100vw to 95vw
          }}
          // This is not working
          whileInView={{
            opacity: 1,
            scale: 1 ,
            transition: {
              delay: 0.1,
              type: "spring",
              stiffness: 50
            }
          }} className="top grid md:grid-cols-4 content-center py-4 gap-y-8">
         <div className="item flex flex-col justify-center items-center">
            <img src={logo} alt="" className='w-48 mb-6 md:mb-0' />
            <p className='text-center border-b-[1px] pb-2'>© 2022 GTHCONSULT BUREAU DE CONTRÔLE AGRÉÉ PAR L’ÉTAT</p>
        </div>
        <div className="item flex items-center justify-center">
            <AiTwotonePhone  className='mr-2 text-[30px]' />+212 5 23 27 27 74
        </div>
        <div className="item flex items-center justify-center">
            <FaFax  className='mr-2 text-[30px]' />+212 5 23 27 29 79
        </div>

        <div className="item flex items-center justify-center">
            <AiTwotoneMail className='mr-2 text-[30px]' /> direction@gthconsult.ma
        </div>
    </motion.div>


    <motion.div
        initial={{
            opacity: 0,
            scale: 0.5 // set 100vw to 95vw
          }}
          // This is not working
          whileInView={{
            opacity: 1,
            scale: 1 ,
            transition: {
              delay: 0.3,
              type: "spring",
              stiffness: 50
            }
          }}
    className="socials flex space-x-5 justify-center py-5">
    <a href="" className='duration-300 ease-linear hover:text-mainred'><BsFacebook size={25}/></a>
    <a href="" className='duration-300 ease-linear hover:text-mainred'><BsTwitter size={25}/></a>
    <a href="" className='duration-300 ease-linear hover:text-mainred'> <BsInstagram size={25}/></a>
    </motion.div>
</div>
  )
}

export default Footer