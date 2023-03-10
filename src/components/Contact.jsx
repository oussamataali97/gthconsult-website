import React from 'react'
import { motion } from "framer-motion";

const Contact = () => {
    return (
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
        className='py-8' id='contact'>
                            <p className='text-center text-[40px] md:text-[60px] font-bold hero text-gray-700 '>Contactez Nous</p>

            <div className="flex flex-col md:flex-row justify-center py-5 md:px-16 gap-6">
                <div className="flex-1 px-4 ">
                <p className='  text-mainred font-light '>Si vous avez des questions ou besoin d'aide, veuillez remplir le formulaire ci-dessous. Nous faisons de notre mieux pour vous répondre dans un délai d'un jour ouvrable.
                </p>
                <form action="" className='flex flex-col  text-[17px]  '>
                    <input type="text" className='border-b-[1px] py-2 focus:outline-none my-2 placeholder:text-gray-800 border-mainblue' placeholder='Nom Complet..' />
                    <input type="text" className='border-b-[1px] py-2 focus:outline-none my-2 placeholder:text-gray-800 border-mainblue' placeholder='Email..' />
                    <input type="text" placeholder='Numéro telephone..' className='border-b-[1px] placeholder:text-gray-800 py-2 focus:outline-none my-2  border-mainblue' />
                    <textarea name="" className='placeholder:text-gray-800 border-b-[1px] focus:outline-none my-2 border-mainblue h-32' id="" placeholder='Message'></textarea>
                    <a href="" className=' bg-mainblue duration-300 ease-linear hover:bg-blue-500 text-white px-7 md:py-5 py-4 rounded-full mt-10 text-center  w-full md:w-fit '>Soumettre</a>
                </form>
                </div>

            <iframe

                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4383442801472!2d-7.368455985455042!3d33.697604643784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b73d256f309f%3A0x3e969925cc12ea26!2sGTHCONSULT!5e0!3m2!1sfr!2sma!4v1671120512031!5m2!1sfr!2sma"
                width="600"
                height="450"
                frameBorder="0"
                className='flex-1 w-full shadow-lg'
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
               </div>
        </motion.div>
    )
}

export default Contact