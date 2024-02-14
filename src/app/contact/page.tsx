import AnimatedText from "@/components/AnimatedText"
import ContactForm from "@/components/Forms/ContactForm"

const Contact = () => {
    return (
        <>
            <section
                className="flex items-center flex-col min-h-screen h-full bg-dark pt-4 md:pt-14 xl:pt-14 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full"
                id="contact"
            >
                <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="flex flex-col max-w-3xl text-center sm:text-center md:mx-auto md:mb-12 gap-6">
                            <AnimatedText
                                text="Consultoria IT"
                                className="font-bold text-center text-3xl sm:text-5xl md:text-6xl xl:text-7xl text-yellow uppercase"
                                stylesWords="hover:text-white uppercase"
                                fromTop
                            />
                            <p className="max-w-3xl text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white uppercase italic font-bold">
                                Dosan Dev
                            </p>
                            <p className="text-white mt-3 mb-12 text-lg sm:text-xl md:text-2xl xl:text-3xl text-center w-full">
                                Si te gustó lo que viste, contáctanos y trabajemos juntos.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <div className="w-full lg:w-5/6 flex flex-col md:flex-row justify-center items-center gap-16 pb-24">
                            <div className="h-full w-full md:w-1/2 flex justify-center items-center">
                                <ul className="flex flex-col justify-center gap-8">
                                    <li className="flex">
                                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded bg-yellow text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6"
                                            >
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mt-1 flex flex-col gap-3">
                                            <h3 className="mb-2 text-xl md:text-2xl xl:text-3xl font-bold italic text-white uppercase">
                                                Dirección
                                            </h3>
                                            <p className="text-gray/70 text-lg md:text-xl xl:text-2xl font-light">
                                                Quito, Quitumbe
                                            </p>
                                            <p className="text-gray/70 text-lg md:text-xl xl:text-2xl font-light">
                                                Ecuador
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded bg-yellow text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mt-1 flex flex-col gap-3">
                                            <h3 className="mb-2 text-xl md:text-2xl xl:text-3xl font-bold italic text-white uppercase">
                                                Contacto
                                            </h3>
                                            <p className="text-gray/70 text-lg md:text-xl xl:text-2xl font-light">
                                                Celular: +593 0986572316
                                            </p>
                                            <p className="text-gray/70 text-lg md:text-xl xl:text-2xl font-light">
                                                Email: devrise@gmail.com
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded bg-yellow text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 7v5l3 3"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mt-1 flex flex-col gap-3">
                                            <h3 className="mb-2 text-xl md:text-2xl xl:text-3xl font-bold italic text-white uppercase">
                                                Horario
                                            </h3>
                                            <p className="text-gray/70 text-lg md:text-xl xl:text-2xl font-light">
                                                Lunes - Viernes: 08:00 - 17:00
                                            </p>
                                            <p className="text-gray/70 text-lg md:text-xl xl:text-2xl font-light">
                                                Sábado: 08:00 - 12:00
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="max-w-6xl flex flex-col w-full md:w-1/2 justify-center md:mx-16"
                                id="form"
                            >
                                <h2
                                    className="text-yellow mb-4 text-2xl md:text-3xl xl:text-4xl font-bold italic w-full text-center"
                                >
                                    ¿Listo para empezar?
                                </h2>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact