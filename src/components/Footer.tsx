import React from 'react';
import Image from 'next/image';
import CustomLink from './CustomLink';

const logo = 'https://res.cloudinary.com/dwowtb0ya/image/upload/v1705538306/devrise/Dosan_dev_2_mntn0l.png';

const Footer = () => {
    return (
        <footer
            className='w-full md:w-11/12 xl:w-9/12 text-md py-2 px-5'
        >
            <div
                className='flex flex-col items-center justify-center gap-8 md:gap-4'
            >
                <div
                    className='sm:py-0 pt-8 md:py-8 flex flex-col items-center justify-around md:flex-row gap-6 md:gap-4 text-center px-2 md:px-8'
                >
                    <div
                        className='md:w-1/2 flex sm:flex-row flex-col md:flex-col items-center justify-center sm:gap-8 md:gap-4 xl:gap-8'
                    >
                        <div
                            className='flex items-center justify-center w-2/3 h-16 xs:w-3/4 xs:max-w-[250px] xs:h-20 sm:h-24 object-cover relative'
                        >
                            <Image
                            src={logo}
                            alt='Logo dosandev'
                            fill
                            className='w-full h-full object-cover select-none'
                            priority draggable={false}
                            />
                        </div>
                        <p className='text-justify pt-3 sm:pt-0 sm:w-2/4 md:w-full w-full text-md text-gray'>
                            En DOSAN DEV estamos comprometidos con la calidad y eficiencia, desde la creación de páginas web cautivadoras hasta el diseño de aplicaciones móviles innovadoras, te proporcionamos soluciones a medida que se alinean con tus objetivos a corto y largo plazo.
                        </p>
                    </div>
                    <div className='hidden md:flex flex-col gap-8 justify-center items-center'>
                        <div
                            className='flex flex-col justify-center items-center text-center w-full'
                        >
                            <h3
                                className='font-bold text-xl text-gray hover:text-yellow hover:border-yellow/30 ease duration-500 border-b-2 border-gray/20 border-solid w-2/3 pb-1 cursor-pointer'
                            >
                                Enlaces de Interés
                            </h3>
                            <div
                                className='flex flex-col gap-2 pt-6 text-md justify-center items-center text-gray'
                            >
                                <CustomLink
                                    title='Asesoría Personalizada'
                                    href='/consulting'
                                    classNameText='hover:text-yellow ease duration-500'
                                />
                                {/* <CustomLink
                                    href='/blog'
                                    title='Nuestro Blog'
                                    classNameText='hover:text-yellow ease duration-500'
                                /> */}
                            </div>
                        </div>
                        <div
                            className='flex flex-col justify-center items-center w-full'
                        >
                            <h3
                                className='font-bold text-xl text-gray hover:text-yellow hover:border-yellow/30 ease duration-500 border-b-2 border-gray/20 border-solid w-2/3 pb-1 cursor-pointer'
                            >
                                Conócenos
                            </h3>
                            <div
                                className='flex flex-col gap-2 pt-6 text-md justify-center items-center text-gray'
                            >
                                <CustomLink
                                    href='/about-us'
                                    title='Quiénes Somos'
                                    classNameText='hover:text-yellow ease duration-500'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <span
                    className='w-full text-center border-t-2 border-solid border-gray/25 pt-4 text-xs sm:text-sm text-gray/50'
                >
                    {new Date().getFullYear()} &copy; Todos los derechos reservados.
                </span>
            </div>
        </footer>
    )
}

export default Footer;