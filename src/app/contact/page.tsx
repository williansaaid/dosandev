import ContactForm from "@/components/Forms/ContactForm"

const Contact = () => {
    return (
        <>
            <section
                className="flex items-center flex-col min-h-screen h-fit bg-dark pt-4 md:pt-8 xl:pt-10 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full justify-center gap-8 pb-24"
                id="contact"
            >
                <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <h2
                                className="mb-4 font-bold uppercase text-yellow text-3xl sm:text-5xl">
                                Consultoria IT
                            </h2>
                            <p className="mt-4 max-w-3xl text-xl text-white uppercase italic font-bold">
                                Dosan Dev
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="text-white mt-3 mb-12 text-lg">
                                Si te gustó lo que viste, contáctanos y trabajemos juntos.
                                </p>
                                <ul className="">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-yellow text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6"
                                            >
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium text-white">
                                                Dirección
                                            </h3>
                                            <p className="text-gray/70">
                                                Quito, Quitumbe
                                            </p>
                                            <p className="text-gray/70">
                                                Ecuador
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-yellow text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium text-white">
                                                Contacto
                                            </h3>
                                            <p className="text-gray/70">
                                                Celular: +593 0986572316
                                            </p>
                                            <p className="text-gray/70">
                                                Email: devrise@gmail.com
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-yellow text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 7v5l3 3"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium text-white">
                                                Horario
                                            </h3>
                                            <p className="text-gray/70">
                                                Lunes - Viernes: 08:00 - 17:00
                                            </p>
                                            <p className="text-gray/70">
                                                Sábado: 08:00 - 12:00
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="max-w-6xl p-5 md:p-12 flex flex-col w-full justify-center" id="form">
                                <h2 className="text-yellow mb-4 text-2xl font-bold italic">
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