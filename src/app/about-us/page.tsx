import Head from "next/head";
import CardProject from "../../components/CardProject";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoJquery, BiLogoCPlusPlus,BiLogoPython, BiLogoJava,
    BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiLogoFirebase, BiLogoNodejs, BiSolidFileJson, BiLogoMongodb, BiDirections } from 'react-icons/bi';
import { TbBrandVite } from 'react-icons/tb';
// import { SiExpress, SiMysql  } from 'react-icons/si';
// import { AiOutlinePercentage, AiFillApi } from 'react-icons/ai';
import ServiciosLook from '../../components/ServiciosLook'

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>Sobre Nosotros</title>
                <meta name="description" content="Una breve descripción de los integrantes del equipo Devrise"/>
            </Head>
            <main
                className="flex items-center flex-col min-h-screen h-fit w-full bg-dark pt-4 md:pt-8 xl:pt-10"
            >
                <ServiciosLook/>
                {/* Projectos */}
                <h3 className='text-5xl text-yellow font-bold mt-20 mb-10 text-center sm:text-left'>Proyectos realizados</h3>
                    <p className='text-center mb-10 sm:text-left text-xl'>A continuación, puedes observar los principales proyectos que ofrecemos
                    como profesionales.</p>

                    <div className="flex flex-wrap sm:flex-row">

                <CardProject
                img='https://res.cloudinary.com/dwowtb0ya/image/upload/v1697491307/Portfolio/llantas_isrotf.png'
                titulo='Stock Llantas'
                descripcion='Landing page que muestra por medio de un buscador la medida de neumatico que el cliente busca.'
                icons={[BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, TbBrandVite, BiLogoFirebase]}
                iconColors={["text-orange-600", "text-sky-500", "text-sky-700", "text-blue-600", "text-yellow", "text-yellow"]}
                iconNames={["HTML5", "React", "Tailwind CSS", "TypeScript", "Vite", "Firebase"]}
                linkWeb='https://llantas.vercel.app/'
                />
                <CardProject
                img='https://res.cloudinary.com/dwowtb0ya/image/upload/v1697491307/Portfolio/llantas_isrotf.png'
                titulo='Stock Llantas'
                descripcion='Landing page que muestra por medio de un buscador la medida de neumatico que el cliente busca.'
                icons={[BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, TbBrandVite, BiLogoFirebase]}
                iconColors={["text-orange-600", "text-sky-500", "text-sky-700", "text-blue-600", "text-yellow", "text-yellow"]}
                iconNames={["HTML5", "React", "Tailwind CSS", "TypeScript", "Vite", "Firebase"]}
                linkWeb='https://llantas.vercel.app/'
                />
                <CardProject
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