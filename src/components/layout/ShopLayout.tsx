import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../UI";

interface props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const ShopLayout: FC<PropsWithChildren<props>> = ({
    children,
    title,
    pageDescription,
    imageFullUrl,
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />

                <meta property="og:title" name="og:title" content={title} />
                <meta property="og:description" name="og:description" content={pageDescription} />
                {imageFullUrl && <meta property="og:image" name="og:image" content={imageFullUrl} />}
            </Head>
            <Navbar></Navbar>
            <main
                style={{
                    margin: "80px auto",
                    maxWidth: "1440px",
                    padding: "0px 30px",
                }}
            >
                {children}
            </main>

            <footer>{/* todo footer */}</footer>
        </>
    );
};
