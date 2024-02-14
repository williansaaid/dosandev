import AnimatedDiv from "./AnimatedDiv";
import AnimatedText from "./AnimatedText";
import Button from "./Button";
import Card from "./Card";

const Intro = () => {
    return (
        <section className="flex flex-col w-full justify-center items-center gap-8 pb-24 border-b-2 border-solid border-gray">
            <div
                className="w-full lg:w-10/12 px-2 text-center flex flex-col justify-center items-center gap-4 py-4"
            >
                <AnimatedText
                    text="Tu negocio presente al mundo"
                    className="font-bold text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-yellow"
                    stylesWords="hover:text-white"
                    fromTop
                />
                <AnimatedDiv
                    delay={0.5}
                >
                    <p className="text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl py-2 font-medium text-gray">
                        En DOSAN DEV, damos vida a sus ideas, transformándolas en experiencias web pues entendemos la importancia de su presencia en línea.
                    </p>
                </AnimatedDiv>
            </div>
            <div className="w-full flex overflow-auto overflow-y-hidden gap-4 justify-start lg:justify-center items-center snap-x snap-mandatory px-6 pb-2">
                <Card
                    delay={0.5}
                    y={50}
                    colorSphere="gray"
                    title="Creatividad y Funcionalidad"
                    text="Cada página web es única. Sabemos como ofrecer sitios web que no solo atraen la atención, sino que también generan resultados tangibles."
                />
                <Card
                    delay={0.8}
                    y={50}
                    colorSphere="dark"
                    title="¿Por Qué Elegirnos?"
                    text="Cada proyecto que emprendemos se basa en la satisfacción del cliente. Cuando elige trabajar con nosotros, el éxito de su presencia en línea se convierte en nuestra misión."
                />
                <Card
                    delay={1.1}
                    y={50}
                    colorSphere="yellow"
                    title="Experiencia"
                    text="Si busca una página web que no solo impresione a los ojos, sino que también impulse su negocio, ha llegado al lugar correcto."
                />
            </div>
            <p className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl py-2 font-medium">
                ¡Obtenga su sitio web perfecto hoy!
            </p>
            <AnimatedDiv
                y={50}
                duration={0.5}
                delay={0.5}
            >
                <Button
                    href="/contact"
                    text="Contáctanos"
                    target="_SELF"
                    className="hover:text-dark hover:bg-yellow hover:border-yellow text-yellow duration-300 ease-in-out border-4 italic w-fit animate-pulse"
                    textStyle="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl py-2 font-bold"
                />
            </AnimatedDiv>
        </section>
    )
}

export default Intro;