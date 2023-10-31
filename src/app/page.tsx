import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
          <title>DEVRISE</title>
          <meta name="description" content="Página principal de Devrise"/>
      </Head>
      <main
        className="flex items-center flex-col min-h-screen h-fit w-full bg-dark pt-4 md:pt-8 xl:pt-10 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24"
      >
        <p>Hola Mundo</p>
      </main>
    </>
  )
};
