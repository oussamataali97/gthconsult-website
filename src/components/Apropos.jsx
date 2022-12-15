import React from 'react'
import valeur from './../assets/valeur.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar,Autoplay, A11y } from 'swiper';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Apropos = () => {
  return (
    <div

    className='py-16' id='apropos'>
        <p className='text-center text-[60px] font-bold hero text-gray-700 '>Apropos</p>
        <div className="grid grid-cols-2  items-center px-5 py-8 justify-between">
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
                  duration: 1,
                  type: "spring",
                  stiffness: 50
                }
              }}
            className=" max-w-[650px] ">
                <img src={valeur} alt="" className='' />
            </motion.div>
            <motion.div

            className=" bg-gray-50 rounded-xl font-bold shadow-lg p-5 ">
                            <Swiper
                            modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}

                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    slidesPerView={1}

                    pagination={{ clickable: true }}

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide>
                        <p className='hero text-mainblue text-[30px] font-bold py-4'>MAÎTRISE DES <span className='text-mainred'>  RISQUES</span></p>
                        <p className='leading-[50px] text-[20px] font-[400]  '>Accompagner les chefs d’établissements et les exploitants pour répondre à leurs obligations réglementaires ou volontaires en matière de gestion des risques professionnels, protection des personnes et des biens ainsi que de l’environnement .

</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className='hero text-mainblue text-[30px] font-bold py-4'>PARTAGE DU  <span className='text-mainred'> SAVOIR</span></p>
                        <p className='leading-[50px] text-[20px] font-[400]  '>Notre capital est notre savoir-faire, nos compétences et le respect de la réglementation. Notre vocation de tierce partie indépendante nous impose le partage de ces compétences et de ces savoirs entre nos collaborateurs, avec nos clients et les institutions.

</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className='hero text-mainblue text-[30px] font-bold py-4'>INTERLOCUTEUR <span className='text-mainred'>  PRIVILÉGIÉ</span></p>
                       <p className='leading-[50px] text-[20px] font-[400]  '>Mettre à la disposition de notre client un interlocuteur unique habilité à prendre toute décisions pour garantir la qualité de nos prestations, le respect de nos engagements et notre disponibilité pour nos clients.

</p>
                    </SwiperSlide>



                    </Swiper>
            </motion.div>
        </div>
    </div>
  )
}

export default Apropos