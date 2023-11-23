import AnimatedDiv from "@/components/AnimatedDiv";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";

export default function Consulting() {
    return (
        <>
            <Head>
                <title>Asesoría Personalizada</title>
                <meta name="description" content="Asesoría personalizada de parte de Devrise"/>
            </Head>
            <main
                className="flex items-center flex-col min-h-screen h-fit w-full bg-dark"
            >
                <section
                    className="flex flex-col md:flex-row justify-center items-center w-full h-[calc(100vh-100px)]"
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
                                    En DEVRISE, entendemos que la clave para el éxito en línea va más allá de la simple presencia web.
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
            </main>
        </>
    )
};