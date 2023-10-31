import Head from "next/head";

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
                <p>AboutUs</p>
            </main>
        </>
    )
};