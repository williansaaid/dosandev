import AnimatedDiv from "@/components/AnimatedDiv";
import AnimatedText from "@/components/AnimatedText";
import Button from "@/components/Button";
import Head from "next/head";
import Image from "next/image";

export default function Consulting() {
    return (
        <>
            <Head>
                <title>Asesoría Personalizada</title>
                <meta name="description" content="Asesoría personalizada de parte de DOSAN DEV"/>
            </Head>
            <main
                className="flex items-center flex-col min-h-screen h-fit w-full bg-dark relative"
            >
                <section
                    className="flex flex-col md:flex-row justify-center items-center w-full h-[calc(100vh-100px)] sticky top-[100px]"
                >
                    <div className="w-full md:w-2/3 justify-center items-center bg-code bg-blur-xs bg-center bg-cover h-[calc(100%)]">
                        <div
                            className="backdrop-blur-sm h-full flex flex-col justify-center items-center p-8"
                        >
                            <AnimatedText
                                text="Impulsando Tu Presencia Digital"
                                fromTop
                                className="font-bold text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-yellow"
                                stylesWords="hover:text-white"
                            />
                            <AnimatedDiv
                                className="flex justify-center items-center"
                            >
                                <p
                                    className="text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl"
                                >
                                    En DOSAN DEV, entendemos que la clave para el éxito en línea va más allá de la simple presencia web.
                                </p>
                            </AnimatedDiv>
                        </div>
                    </div>
                    <div
                        className='flex items-center justify-center w-full md:w-1/3 h-[calc(100%)] relative overflow-hidden'
                    >
                        <Image
                            src='https://res.cloudinary.com/ds41xxspf/image/upload/v1700699777/DevRise/pexels-thisisengineering-3861959_a083my.jpg'
                            alt="Programador"
                            fill
                            className='w-full h-full object-cover'
                            sizes="(min-width: 768px) 33.3vw, (max-width: 768px) 100vw"
                            priority draggable={false}
                        />
                    </div>
                </section>
                <section
                    className="flex flex-col md:flex-row justify-center items-center w-full h-[calc(100vh-100px)] sticky top-[100px]"
                >
                    <div
                        className='flex items-center justify-center w-full md:w-1/2 h-[calc(100%)] relative overflow-hidden'
                    >
                        <Image
                            src='https://res.cloudinary.com/ds41xxspf/image/upload/v1701790844/DevRise/pexels-fauxels-3184292_zhje3a.jpg'
                            alt="Reunion"
                            fill
                            className='w-full h-full object-cover'
                            sizes="(min-width: 768px) 33.3vw, (max-width: 768px) 100vw"
                            priority draggable={false}
                        />
                    </div>
                    <div className="w-full md:w-1/2 justify-center items-center bg-dark md:bg-gradientThird bg-blur-xs bg-center bg-cover h-[calc(100%)]">
                        <div
                            className="backdrop-blur-sm h-full flex flex-col justify-center items-center p-8"
                        >
                            <AnimatedText
                                text="Desarrolla una Estrategia Ganadora"
                                fromTop
                                className="font-bold text-center text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-yellow"
                                stylesWords="hover:text-white"
                            />
                            <AnimatedDiv
                                className="flex justify-center items-center"
                            >
                                <p
                                    className="text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl"
                                >
                                    Desde la creación de páginas web cautivadoras hasta el diseño de aplicaciones móviles innovadoras, te proporcionamos soluciones a medida que se alinean con tus objetivos a corto y largo plazo.
                                </p>
                            </AnimatedDiv>
                        </div>
                    </div>
                </section>
                <section
                    className="flex flex-col md:flex-row justify-center items-center w-full h-full md:h-[calc(100vh-100px)] z-10 md:z-0 md:sticky md:top-[100px]"
                >
                    <div className="w-full md:w-1/3 justify-center items-center bg-gradientFirst md:bg-laptops bg-center bg-cover h-[calc(100%)]">
                        <div
                            className="h-full flex flex-col justify-center items-center p-8 backdrop-blur-xs bg-dark/60 bg-clip-padding"
                        >
                            <AnimatedText
                                text="Optimiza tu Presencia en Línea"
                                fromTop
                                className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-yellow"
                                stylesWords="hover:text-white"
                            />
                            <AnimatedDiv
                                className="flex justify-center items-center"
                            >
                                <p
                                    className="text-center text-md sm:text-lg lg:text-xl xl:text-2xl font-light text-white"
                                >
                                    Realizamos análisis exhaustivos para identificar oportunidades de mejora en tus sitios web y aplicaciones móviles. Optimizamos la usabilidad, la velocidad y la experiencia de usuario para garantizar una interacción sea memorable.
                                </p>
                            </AnimatedDiv>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 justify-center items-center bg-gradientSecond md:bg-teamMeeting bg-center bg-cover h-[calc(100%)]">
                        <div
                            className="h-full flex flex-col justify-center items-center p-8 backdrop-blur-xs bg-dark/60 bg-clip-padding"
                        >
                            <AnimatedText
                                text="Soluciones Adaptadas a tus Necesidades"
                                className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-yellow"
                                stylesWords="hover:text-white"
                            />
                            <AnimatedDiv
                                className="flex justify-center items-center"
                            >
                                <p
                                    className="text-center text-md sm:text-lg lg:text-xl xl:text-2xl font-light"
                                >
                                    Ya sea que estés buscando expandirte a través de una nueva página web impactantes o lanzar una aplicación móvil, estamos aquí para guiarte en cada paso del camino.
                                </p>
                            </AnimatedDiv>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 justify-center items-center bg-gradientFirst md:bg-stats bg-right bg-cover h-[calc(100%)]">
                        <div
                            className="h-full flex flex-col justify-center items-center p-8 backdrop-blur-xs bg-dark/60 bg-clip-padding"
                        >
                            <AnimatedText
                                text="Resultados Tangibles"
                                fromTop
                                className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-yellow"
                                stylesWords="hover:text-white"
                            />
                            <AnimatedDiv
                                className="flex justify-center items-center"
                            >
                                <p
                                    className="text-center text-light text-md sm:text-lg lg:text-xl xl:text-2xl font-light"
                                >
                                    Nuestra asesoría está diseñada para impulsar tu presencia digital y generar un impacto real en tu éxito comercial. Trabajamos contigo como un socio estratégico, comprometidos con tu crecimiento y prosperidad online.
                                </p>
                            </AnimatedDiv>
                        </div>
                    </div>
                </section>
                <section
                    className="flex flex-col md:flex-row justify-center items-center w-full h-[calc(100vh-100px)] sticky top-[100px]"
                >
                    <div className="w-full justify-center items-center bg-darkMountain bg-center bg-cover h-[calc(100%)]">
                        <div
                            className="h-full flex flex-col justify-center items-center p-4 sm:p-12 gap-8 backdrop-blur-sm"
                        >
                            <AnimatedText
                                text="Déjanos ser tu guía en el mundo digital"
                                fromTop
                                className="font-bold text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-yellow"
                                stylesWords="hover:text-white"
                            />
                            <AnimatedDiv
                                className="flex justify-center items-center"
                            >
                                <p
                                    className="text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl"
                                >
                                    Descubre cómo nuestras soluciones personalizadas pueden llevar tu presencia online al siguiente nivel.
                                </p>
                            </AnimatedDiv>
                            <AnimatedDiv
                                y={50}
                                duration={1}
                                className="sm:py-8"
                            >
                                <Button
                                    href="/contact"
                                    text="Contáctanos"
                                    className="hover:text-dark hover:bg-yellow hover:border-yellow text-yellow duration-300 ease-in-out border-4 italic w-fit"
                                    textStyle="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl py-2 font-bold"
                                />
                            </AnimatedDiv>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
};
