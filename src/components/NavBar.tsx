"use client"
import React, { useState } from 'react'
import BurguerMenuButton from './BurguerMenuButton';
import CustomLink from './CustomLink';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import CustomMobileLink from './CustomMobileLink';

const logo = 'https://res.cloudinary.com/ds41xxspf/image/upload/v1698355224/DevRise/yellow_cot0gv.png';

const Navbar = () => {

    const [isOpenMobile, setIsOpenMobile] = useState(false);

    const handleClickMenuMobile = () => {
        setIsOpenMobile(!isOpenMobile);
    };

    return (
        <header
            className='w-full h-[100px] px-8 sm:px-16 md:px-24 xl:px-32 2xl:px-56 font-medium flex items-center justify-between sticky top-0 z-10 bg-yellow/10 bg-clip-padding backdrop-filter backdrop-blur-md select-none text-xl shadow-lg'
        >
            <div className='w-4/6 h-[70%] xs:w-3/6 xs:h-[80%] sm:w-2/5 sm:h-[80%] lg:w-2/6 lg:h-[100%] xl:w-1/5'>
                <Link
                    href='/'
                    className='flex items-center justify-center w-full h-full object-cover relative'
                >
                    <Image
                        src={logo}
                        alt='Logo devrise'
                        fill
                        className='w-full h-full object-cover'
                        priority draggable={false}
                    />
                </Link>
            </div>

            <BurguerMenuButton
                isOpen={isOpenMobile}
                handleClick={handleClickMenuMobile}
            />

            <nav className='hidden justify-between items-center lg:flex gap-6 xl:gap-8'>
                <CustomLink href='/' title='Inicio'/>
                <CustomLink href='/consulting' title='Asesoría'/>
                <CustomLink href='/blog' title='Blog'/>
                <CustomLink href='/about-us' title='Sobre Nosotros'/>
            </nav>

            { isOpenMobile ?
                <motion.div
                    className='z-40 absolute w-full h-screen bg-dark/70 left-0 top-0 lg:hidden'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                >
                    <motion.div
                        className='z-50 w-5/6 sm:min-w-[70vw] flex flex-col justify-between items-center absolute top-1/2 left-1/2 bg-dark text-white rounded-lg py-12 gap-6 shadow-yellowShadow'
                        initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
                        animate={{scale: 1, opacity: 1}}
                    >
                        <BurguerMenuButton isOpen={isOpenMobile} handleClick={handleClickMenuMobile} className='bg-fourth'/>

                        <hr className="text-yellow h-0.5 w-1/2 my-4"/>

                        <nav className='flex items-center flex-col justify-center gap-6'>
                            <CustomMobileLink href='/' title='Inicio' toggle={handleClickMenuMobile}/>
                            <CustomMobileLink href='/consulting' title='Asesoría' toggle={handleClickMenuMobile}/>
                            <CustomMobileLink href='/blog' title='Blog' toggle={handleClickMenuMobile}/>
                            <CustomMobileLink href='/about-us' title='Sobre Nosotros' toggle={handleClickMenuMobile}/>
                        </nav>

                        <hr className="text-yellow h-0.5 w-1/2 my-2"/>

                        <span
                            className='w-full text-center text-xs text-gray/50'
                        >
                            {new Date().getFullYear()} &copy; DEVRISE
                        </span>
                    </motion.div>
                </motion.div> : null
            }
        </header>
    )
}

export default Navbar;