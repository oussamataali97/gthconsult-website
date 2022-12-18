import React from 'react'
import hero from './../assets/business.png'
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <motion.div
    initial={{
      x: -300 // set 100vw to 95vw
    }}
    // This is not working
    whileInView={{
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50
      }
    }}
    className=' overflow-auto flex items-center lg:h-screen px-4 md:px-9 mt-14 py-8 justify-around' id='home'>
        <div className="text flex-1 max-w-[550px]">
            <h1 className='hero  text-[40px] md:text-[70px] max-w-[500px]  font-bold md:leading-[70px] py-3 md:py-8 text-mainblue '>Planification facile <span className='text-mainred'>à l'avance</span> </h1>
            <p className='font-[800] text-lg text-gray-800'><span className='text-mainred underline'>GTHCONSULT</span> est un bureau de contrôle agrée par l'etat créé par deux ingénieurs pluridisciplinaires
. Sa mission est d'accompagner les chefs d'établissements et les exploitants pour répondre à leurs obligations
réglementaires ou volantaires en matière de contôles réglementaires des installationns techniques, gestion des risques professionnels,
 protectiion des personnes,des biens et de l'environnement .</p>
        </div>
        <div className="hidden md:block img flex-1 max-w-[650px] ">
            <img src={hero} alt="" className='rounded-3xl' />
        </div>
    </motion.div>
  )
}

export default Hero