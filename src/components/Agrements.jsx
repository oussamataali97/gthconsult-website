import React from 'react'

import king from './../assets/king (3).png'
import {MdTipsAndUpdates} from 'react-icons/md'

import {BsCheckCircleFill} from 'react-icons/bs'
import {GiSandsOfTime} from 'react-icons/gi'

import { motion } from "framer-motion";
const Agrements = () => {
  return (
    <div className='agrementsss px-4 md:px-9 py-8 bg-gray-200 ' id='agrement'>
    <p className='text-center text-[40px] md:text-[60px] font-bold hero text-gray-700 '>Agréments</p>
    <div className="flex justify-center mb-5 flex-col items-center"><motion.img
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
    src={king} alt="" className='w-32 md:w-48 ' />
    <motion.p
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
    className='bg-white md:px-9 px-4 py-4 md:py-8 mx-10 my-6 rounded-md shadow-lg w-full md:max-w-[1000px] md:text-[20px] '><MdTipsAndUpdates className='inline text-yellow-400 mb-1'/> <span className='text-mainred font-[700]'> GTHCONSULT </span>dispose des agréments ministériels délivrés par les autorités compétentes qui témoigne de la reconnaissance de nos compétences et de notre savoir-faire </motion.p>
</div>
    <div className="cards grid lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
      className="flex flex-col shadow-lg cardss justify-around cursor-pointer relative hover:scale-105 duratoverflow-hidden on-1000 card bg-gray-50 h-96 duration-300 ease-linear hover:bg-mainblue hover:text-white ">

           <p className='p-4 font-[700]  text-mainblue title'>CONTRÔLE DES INSTALLATION ÉLECTRIQUE</p>
           <p className='p-4 font-[400] bg-mainred text-white '>GTHCONSULT est agréé par le ministère de l'emploi</p>
        <button className='  pb-5 ease-linear hover:text-blue-600 font-[700] text-[20px] flex-col duration-300 flex items-center px-4 text-mainred'>STATUS <BsCheckCircleFill className=' text-blue-700 text-[40px] iconss mt-2 duration-300 ease-linear'/></button>
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
        }} className="flex mt-12 flex-col cardss shadow-lg justify-around cursor-pointer relative hover:scale-105 overflow-hidden uration-1000 card bg-gray-50 h-96 duration-300 ease-linear hover:bg-mainblue hover:text-white ">
                 <p className='p-4 font-[700]  text-mainblue title'>CONTRÔLE DES APPAREILS ET ACCESSOIRES DE LEVAGE</p>
                 <p className='p-4 font-[400] bg-mainred text-white '>GTHCONSULT est agréé par le ministère de l'emploi</p>
        <button className='  pb-5 ease-linear hover:text-blue-600 font-[700] text-[20px] flex-col duration-300 flex items-center px-4 text-mainred'>STATUS <BsCheckCircleFill className=' text-blue-700 text-[40px] iconss mt-2 duration-300 ease-linear'/></button>
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
        }} className="flex flex-col shadow-lg cardss justify-around cursor-pointer relative card bg-gray-50 overflow-hidden h-96 duration-300 ease-linear hover:bg-mainblue hover:text-white ">

          <p className=' p-4 font-[700]  text-mainblue title'>CONTRÔLE DES ASCENSEURS ET MONTE-CHARGESS</p>
          <p className='p-4 font-[400] bg-mainred text-white '>GTHCONSULT est agréé par le ministère de l'equipement et transport</p>
          <button className='  pb-5 ease-linear hover:text-blue-600 font-[700] text-[20px] flex-col duration-300 flex items-center px-4 text-mainred'>STATUS <BsCheckCircleFill className=' text-blue-700 text-[40px] iconss mt-2 duration-300 ease-linear'/></button>
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
        }} className="flex mt-12 flex-col shadow-lg justify-around  cardss relative cursor-pointer hover:scale-105 overflow-hidden uration-1000 card bg-gray-50 h-96 duration-300 ease-linear hover:bg-mainblue hover:text-white ">
                   <p className='p-4 font-[700]  text-mainblue title'>VÉRIFICATION GÉNÉRALE PÉRIODIQUE DES APPAREILS OU MACHINE</p>
                   <p className='p-4 font-[400] bg-mainred text-white '>GTHCONSULT est agréé par le ministère de l'emploie</p>
        <button className='  pb-5 ease-linear hover:text-blue-600 font-[700] text-[20px] flex-col duration-300 flex items-center px-4 text-mainred'>STATUS <BsCheckCircleFill className=' text-blue-700 text-[40px] iconss mt-2 duration-300 ease-linear'/></button>
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
        }} className="flex flex-col shadow-lg cardss justify-around relative cursor-pointer hover:scale-105 overflow-hidden uration-1000 card bg-gray-50 h-96 duration-300 ease-linear hover:bg-mainblue hover:text-white ">


        <p className='p-4 font-[700]  text-mainblue title'>CONTRÔLE DES APPAREIL À PRESSION</p>
        <p  className='p-4 font-[400] bg-mainred text-white '>GTHCONSULT est déposé le dossier d'agrement à le ministère de l'energie et des mines</p>
        <button className='  pb-5 ease-linear hover:text-blue-600 font-[700] text-[20px] flex-col duration-300 flex items-center px-4 text-mainred'>STATUS <GiSandsOfTime className=' text-[40px] mt-2 text-orange-600'/></button>
      </motion.div>
    </div>
</div>
  )
}

export default Agrements