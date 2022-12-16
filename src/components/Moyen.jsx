import React from 'react'
import humain from './../assets/humainss.png'
import techniq from './../assets/material.png'
import { motion } from "framer-motion"

import { AiOutlineCaretRight } from 'react-icons/ai'
import { MdEngineering, MdSettingsSystemDaydream, MdArrowForward } from 'react-icons/md'



const Moyen = () => {
    return (
        <div className='md:px-16 px-8 pb-8' id='moyenss'>
            <p className='text-center text-[40px] md:text-[60px] font-bold hero text-gray-700'>Nos Moyens</p>

            <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="flex-1">
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
                    src={humain} alt="" />
                </div>
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
                className="flex-1">
                    <p className='hero text-mainblue text-[25px] md:text-[30px] font-bold py-4 flex items-center mb-6'><MdEngineering size={50} className='mr-2' /> Nos Moyens Humains</p>
                    <p className='text-gray-800 font-[500] text-[18px]'>
                        En plus de son réseau de compétence au Maroc et à l’étranger. GTHCONSULT met à votre disposition une équipe de spécialistes compétents dans les domaines de vérifications réglementaires
                        , d’inspections techniques, de formations, et d’accompagnement.
                    </p>
                    <p className='rounded-full w-max bg-mainblue text-white px-5 py-2 mt-8 flex items-center  hover:bg-mainred cursor-pointer duration-300 shadow-xl'>En Savoir plus <MdArrowForward className='ml-2' /></p>

                </motion.div>
            </div>
            <div className="flex items-center flex-col md:flex-row mt-10">

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
                          delay: 0.4,
                          type: "spring",
                          stiffness: 50
                        }
                      }}
                className="flex-1">
                    <p className='hero text-mainblue  text-[25px] md:text-[30px] font-bold py-4 flex items-center mb-6'><MdSettingsSystemDaydream className='mr-2' /> Nos Moyens Systèmes Et Matériels</p>
                    <p className='max-w-[550px] leading-6 text-gray-800 font-[500] text-[18px] mb-5 '><span className='text-mainred '> <AiOutlineCaretRight className='inline' /> GTHCONSULT</span> dispose des équipments et des moyens d’inspections et de vérfication pour assurer ses missions : contrôles dimensionnelle, mesures des grandeurs physiques,
                        contrôle non destructif ( ressuage, magnétoscopie, endoscopie).</p>
                    <p className='max-w-[550px] leading-6 text-gray-800 font-[500] text-[18px]  '><span className='text-mainred '><AiOutlineCaretRight className='inline' />  GTHCONSULT</span> investit dans le développement des outils numériques et informatiques pour une meilleure qualité de ses prestations : des logiciels d'inspections, des espaces clients, automatisation des rapports, etc.GTHCONSULT investit dans le développement des outils numériques et informatiques pour une meilleure qualité de ses prestations : des logiciels
                        d'inspections, des espaces clients, automatisation des rapports, etc.</p>
                </motion.div>
                <div className="flex-1">
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
                              delay: 0.6,
                              type: "spring",
                              stiffness: 50
                            }
                          }}
                    src={techniq} alt="" className='flex-1' />

                </div>
            </div>
        </div>
    )
}

export default Moyen