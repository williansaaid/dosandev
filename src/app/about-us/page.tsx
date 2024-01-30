import Head from "next/head";
import CardProject from "../../components/CardProject";
import { BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiLogoFirebase } from 'react-icons/bi';
import { TbBrandVite } from 'react-icons/tb';
import ServiciosLook from '../../components/ServiciosLook'
import AnimatedText from "../../components/AnimatedText";

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>Sobre Nosotros</title>
                <meta name="description" content="Una breve descripción de los integrantes del equipo DOSAN DEV"/>
            </Head>
            <main
                className="flex items-center flex-col min-h-screen h-fit pt-4 md:pt-8 xl:pt-10 w-full lg:w-10/12 bg-dark px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 pb-24 border-b-2 border-solid border-gray"
            >
                <ServiciosLook/>
                <AnimatedText
                        text="Proyectos Realizados"
                        className="font-bold text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-yellow pt-16 pb-4 md:pt-32"
                        stylesWords="hover:text-white"
                        fromTop
                    />
                <AnimatedText
                    text="A continuación, puedes observar los principales proyectos que hemos realizado
                    como profesionales."
                    className="text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium text-gray"
                    stylesWords="hover:text-white"
                    fromTop
                />
                <div className="flex flex-wrap sm:flex-row justify-center items-center pt-20 pb-24 gap-8 z-10">
                    <CardProject
                        altImg="preview del proyecto"
                        img='https://res.cloudinary.com/dwowtb0ya/image/upload/v1697491307/Portfolio/llantas_isrotf.png'
                        titulo='Stock Llantas'
                        descripcion='Landing page que muestra por medio de un buscador la medida de neumatico que el cliente busca.'
                        icons={[BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, TbBrandVite, BiLogoFirebase]}
                        iconColors={["text-orange-600", "text-sky-500", "text-sky-700", "text-blue-600", "text-yellow", "text-yellow"]}
                        iconNames={["HTML5", "React", "Tailwind CSS", "TypeScript", "Vite", "Firebase"]}
                        linkWeb='https://llantas.vercel.app/'
                    />
                    <CardProject
                        altImg="preview del proyecto"
                        img='https://res.cloudinary.com/dwowtb0ya/image/upload/v1697491307/Portfolio/llantas_isrotf.png'
                        titulo='Stock Llantas'
                        descripcion='Landing page que muestra por medio de un buscador la medida de neumatico que el cliente busca.'
                        icons={[BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, TbBrandVite, BiLogoFirebase]}
                        iconColors={["text-orange-600", "text-sky-500", "text-sky-700", "text-blue-600", "text-yellow", "text-yellow"]}
                        iconNames={["HTML5", "React", "Tailwind CSS", "TypeScript", "Vite", "Firebase"]}
                        linkWeb='https://llantas.vercel.app/'
                    />
                    <CardProject
                        altImg="preview del proyecto"
                        img='https://res.cloudinary.com/dwowtb0ya/image/upload/v1697491307/Portfolio/llantas_isrotf.png'
                        titulo='Stock Llantas'
                        descripcion='Landing page que muestra por medio de un buscador la medida de neumatico que el cliente busca.'
                        icons={[BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, TbBrandVite, BiLogoFirebase]}
                        iconColors={["text-orange-600", "text-sky-500", "text-sky-700", "text-blue-600", "text-yellow", "text-yellow"]}
                        iconNames={["HTML5", "React", "Tailwind CSS", "TypeScript", "Vite", "Firebase"]}
                        linkWeb='https://llantas.vercel.app/'
                    />
                </div>
            </main>
        </>
    )
};