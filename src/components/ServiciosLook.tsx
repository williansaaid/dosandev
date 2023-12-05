"use client"
import { useEffect, useRef, useState} from 'react';
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import CardServices from './CardServices';

const ServiciosLook = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const containerElement = containerRef.current;

        if (containerElement) {
        const maxScrollPosition = containerElement.scrollHeight;

        setScrollPosition(() => {
            const newPosition = window.scrollY;

            if (newPosition >= 0 && newPosition <= maxScrollPosition) {
            return newPosition;
            }

            if (newPosition < 0) {
            return 0;
            }

            return maxScrollPosition;
        });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row w-full gap-4 sm:gap-8 md:gap-12">
            <div
                className='bg-darkMountain bg-cover bg-left w-full md:w-1/2 rounded-3xl overflow-hidden'
                ref={containerRef}
            >
                <motion.div
                    style={{
                        transform: `translateY(${scrollPosition}px)`,
                    }}
                    className={`w-full h-72 sm:h-fit md:backdrop-blur-sm p-4 duration-200 ease`}
                >
                    <AnimatedText
                        text="Servicios"
                        className="font-bold text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-yellow"
                        stylesWords="hover:text-white"
                        fromTop
                    />
                    <AnimatedText
                        text="A continuación, puedes observar los principales servicios que ofrecemos como profesionales."
                        className="text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium text-gray"
                        stylesWords="hover:text-white"
                        fromTop
                    />
                </motion.div>
            </div>
            <div
                className='flex flex-wrap justify-center items-center w-full md:w-1/2 gap-8'
            >
                <CardServices
                    title='Desarrollo de Landing Page'
                    image='https://res.cloudinary.com/dwowtb0ya/image/upload/v1699756446/devrise/landing-page_ps7hrg.svg'
                    imageAlt='diseño de paginas web'
                    text='Una landing page es una página de destino con la finalidad de captar la tención del visitante y persuadirlo, para que realice una determinad acción como la descarga de un archivo, llenar un formulario, seguir la página o realizar la compra, entre otras acciones.'
                />
                <CardServices
                    title='Prototipo y diseño de interfaces'
                    image='https://res.cloudinary.com/dwowtb0ya/image/upload/v1699755752/devrise/prototipo_1_sw0aql.svg'
                    imageAlt='diseño de interfaces'
                    text='Un prototipo te brinda una idea de cómo se presentará tu aplicación web o móvil a los usuarios, identificando los elementos necesarios para la interfaz y facilitando el desarrollo de su diseño.'
                />
                <CardServices
                    title='Desarrollo de CMS'
                    image='https://res.cloudinary.com/dwowtb0ya/image/upload/v1699756486/devrise/cms_ynr8jc.svg'
                    imageAlt='desarrollo de cms'
                    text='Un sistema de gestión de contenido o en sus siglas en ingles CMS, permite crear, organizar, publicar y eliminar contenidos dinámicos de una aplicación web, donde el usuario no tiene que preocuparse por la parte técnica sino en alimentar una base de datos de forma sencilla y rápida, con el contenido que quiere publicar.'
                />
                <CardServices
                    title='Desarrollo de aplicación web'
                    image='https://res.cloudinary.com/dwowtb0ya/image/upload/v1699756523/devrise/internet_yx2h4l.svg'
                    imageAlt='desarrollo de aplicacion web'
                    text='Una aplicación web es una aplicación de software que puede utilizar accediendo a un servidor web a través de internet o intranet mediante un navegador.'
                />
            </div>
        </div>
    );
};

export default ServiciosLook;
