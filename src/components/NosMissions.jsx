import React from 'react'
import sec1 from './../assets/ser1.jpg'
import sec2 from './../assets/ser2.jpg'
import sec3 from './../assets/ser3.jpg'
import sec4 from './../assets/ser4.jpg'
import sec5 from './../assets/ser5.jpg'
import fire from './../assets/fire.svg'
import safe from './../assets/safe.svg'
import star from './../assets/star.svg'
import check from './../assets/check.svg'
import formation from './../assets/formation.svg'

import {AiOutlineArrowRight} from 'react-icons/ai'
import { motion } from "framer-motion";



const NosMissions = () => {
  return (
    <div className='px-4 md:px-9 py-8 ' id='metiers'>
        <p className='text-center text-[40px] md:text-[60px] font-bold hero text-gray-700 mb-9'>Nos Mètiers</p>
        <div className="cards grid lg:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
                duration: 200,
                type: "spring",
                stiffness: 50
              }
            }}
          className="flex flex-col shadow-lg justify-around cursor-pointer relative hover:scale-105 durat overflow-hidden on-1000 card bg-gray-50 h-96  rounded-xl ">
            <img src={sec1} alt="" className='w-full h-64 hover:scale-110 duration-1000  object-cover ' />
            <img src={star} alt="" className='absolute top-[25%] opacity-80 right-[35%] z-30 w-20'/>

            <p className='p-4 font-[500]'>Contrôles risques travailleurs</p>
            <button className='  pb-5 ease-linear hover:text-blue-600 font-[500] duration-300 flex items-center px-4 text-mainred'>En savoir plus <AiOutlineArrowRight className='ml-1'/></button>
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
                duration: 200,
                type: "spring",
                stiffness: 50
              }
            }} className="flex lg:mt-12 flex-col shadow-lg justify-around cursor-pointer relative hover:scale-105 overflow-hidden uration-1000 card bg-gray-50 h-96  rounded-xl ">
            <img src={sec2} alt="" className='w-full h-64 hover:scale-110 duration-1000  object-cover' />
            <img src={safe} alt="" className='absolute top-[25%] opacity-80 right-[35%] z-30 w-20'/>
            <p className='p-4 font-[500]'>Contrôles environnementaux</p>
            <button className='  pb-5 ease-linear hover:text-blue-600 font-[500] duration-300 flex items-center px-4 text-mainred'>En savoir plus <AiOutlineArrowRight className='ml-1'/></button>
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
                duration: 200,
                type: "spring",
                stiffness: 50
              }
            }} className="flex flex-col shadow-lg justify-around cursor-pointer relative card bg-gray-50 overflow-hidden h-96   rounded-xl ">
            <img src={sec3} alt="" className='w-full h-64 hover:scale-110 duration-1000   object-cover ' />
            <img src={fire} alt="" className='absolute top-[25%] opacity-80 right-[35%] z-30 w-20'/>
            <p className='p-4 font-[500]'>Contrôles réglementaires des installations techniques</p>
            <button className='  pb-5 ease-linear hover:text-blue-600 font-[500] duration-300 flex items-center px-4 text-mainred'>En savoir plus <AiOutlineArrowRight className='ml-1'/></button>
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
                duration: 200,
                type: "spring",
                stiffness: 50
              }
            }} className="flex lg:mt-12 flex-col shadow-lg justify-around relative cursor-pointer hover:scale-105 overflow-hidden uration-1000 card bg-gray-50 h-96  rounded-xl ">
            <img src={sec4} alt="" className='w-full h-64 hover:scale-110 duration-1000  object-cover' />
            <img src={check} alt="" className='absolute top-[25%] opacity-80 right-[35%] z-30 w-20'/>

            <p className='p-4 font-[500]'>Audits et assistances techniques</p>
            <button className='  pb-5 ease-linear hover:text-blue-600 font-[500] duration-300 flex items-center px-4 text-mainred'>En savoir plus <AiOutlineArrowRight className='ml-1'/></button>
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
                duration: 200,
                type: "spring",
                stiffness: 50
              }
            }} className="flex flex-col shadow-lg justify-around relative cursor-pointer hover:scale-105 overflow-hidden uration-1000 card bg-gray-50 h-96  rounded-xl ">
            <img src={sec5} alt="" className='w-full h-64 hover:scale-110 duration-1000  object-cover ' />
            <img src={formation} alt="" className='absolute top-[25%] opacity-80 right-[35%] z-30 w-20'/>

            <p className='p-4 font-[500]'>Formations réglementaires et techniques</p>
            <button className=' font-[500] pb-5 ease-linear hover:text-blue-600 duration-300 flex items-center px-4 text-mainred'>En savoir plus <AiOutlineArrowRight className='ml-1'/></button>
          </motion.div>
        </div>
    </div>
  )
}

export default NosMissions