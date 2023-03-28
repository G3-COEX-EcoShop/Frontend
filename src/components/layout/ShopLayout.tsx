import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";

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

                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
            </Head>
            <nav>{/* todo:nav */}</nav>
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
