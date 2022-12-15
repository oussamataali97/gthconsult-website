import React from 'react'
import logo from './../assets/logo2.png'
import {ImQuotesLeft} from 'react-icons/im'
import { motion } from "framer-motion"

const NosMoyens = () => {
  return (
    <div className=' py-8 '>
      <div className="moyen w-full flex justify-center items-center flex-col">
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
                delay: 0.1,
                type: "spring",
                stiffness: 50
              }
            }}
        src={logo} alt="" className='w-64 ' />

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
          className='px-16  font-[500] text-[25px] text-white  '><ImQuotesLeft/>Accompagner les chefs d’établissements et les exploitants pour répondre à leurs obligations réglementaires ou volontaires en matière de gestion des risques professionnels, protection des personnes et des biens ainsi que de l’environnement .
</motion.p>
      </div>
    </div>
  )
}

export default NosMoyens