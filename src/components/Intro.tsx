const Intro = () => {
    return (
        <>
            <section className="relative">
                <div className="relative pt-1 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" >
                    <span id="blackOverlay" className="w-full h-full absolute  bg-dark"></span>
                    </div>
                    <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-2 ml-auto mr-auto text-center">
                            <div className="flex flex-col justify-center items-center content-center ">
                                <h1 className="text-d font-semibold text-5xl text-yellow">
                                Tu negocio presente al mundo.
                                </h1>
                                <p className="mt-4 text-lg text-white">
                                En DEVRISE, damos vida a sus ideas, 
                                transformándolas en experiencias web y entendemos la importancia de su presencia en línea. 
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                    </div>
                </div>
                <section className="pb-10 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray">
                                
                            </div>
                            <h6 className="text-xl font-semibold text-dark">Creatividad y Funcionalidad</h6>
                            <p className="mt-2 mb-4 text-dark">
                            Cada página web es única. Sabemos como 
                            ofrecer sitios web que no solo atraen la atención, sino que también generan resultados tangibles. 
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-dark">
                                
                            </div>
                            <h6 className="text-xl font-semibold text-dark">Por Qué Elegirnos</h6>
                            <p className="mt-2 mb-4 text-dark">
                            Cada proyecto que emprendemos se basa en la satisfacción del cliente. 
                            Cuando elige trabajar con nosotros, el éxito de su presencia en línea se convierte en nuestra misión.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow">
                                
                            </div>
                            <h6 className="text-xl font-semibold text-dark">Experiencia</h6>
                            <p className="mt-2 mb-4 text-dark">
                            Si busca una página web que no solo impresione a los ojos, sino que también impulse su negocio, ha llegado al lugar correcto.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <footer className="relative  pt-8 pb-6 mt-1">
                        <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                            ¡Obtenga su Sitio Web Perfecto Hoy!
                            </div>
                            </div>
                        </div>
                        </div>
                    </footer>
                    </div>
                </section>
                </section>
        </>
    )
}

export default Intro;