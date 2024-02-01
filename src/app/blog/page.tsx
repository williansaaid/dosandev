import Head from "next/head";

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Blog escrito por los desarrolladores de DOSAN DEV"/>
            </Head>
            <main
                className="flex items-center flex-col min-h-screen h-fit w-full bg-dark pt-4 md:pt-8 xl:pt-10"
            >
                <p>Blog</p>
            </main>
        </>
    )
};