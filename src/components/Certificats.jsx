import React from 'react'
import { motion } from "framer-motion";


import cert from './../assets/certificat.png'
const Certificats = () => {
  return (
    <div className='py-8 flex justify-center items-center flex-col ' id='certificats'>
      <p className='text-center text-[50px] font-bold hero text-gray-700 '>Certificats</p>
        <motion.img
         initial={{
          opacity: 0,
          scale: 0.5 // set 100vw to 95vw
        }}
        // This is not working
        whileInView={{
          opacity: 1,
          scale: 1 ,
          transition: {
            delay: 0.4,
            type: "spring", stiffness: 100
          }
        }}
        src={cert} alt="" className='w-[1000px]'/>
    </div>
  )
}

export default Certificats