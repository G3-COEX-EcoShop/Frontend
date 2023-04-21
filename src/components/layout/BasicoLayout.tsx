import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";

import NextLink from 'next/link'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/router";
export const BasicoLayout: FC<PropsWithChildren> = ({ children
}) => {
    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    };
    return (
        <>

            <AppBar color='primary' component="nav" variant='elevation' >
                <Toolbar sx={{ justifyContent: "space-between", display: "flex" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <NextLink href={'/'}>
                        <Image
                            width={100}
                            height={50}
                            src="https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQnX9lPLVoh3eL1WKMqg2-dZlDDsfO4H_JusGDbkNBFF7ugyWllUCV5wipPARdgpGLp8srtCotMFYWTlynZiHvVe0vA=w1920-h975" alt="icon Tienda EcoShop"
                        />

                    </NextLink>
                    <NextLink href={'/'} as={router.asPath} onClick={handleBackClick}>
                        <ArrowBackIcon color="secondary" />

                    </NextLink>


                </Toolbar>

            </AppBar >


            <main
                style={{
                    margin: "80px auto",
                    maxWidth: "1440px",
                    padding: "0px 30px",
                }}
            >
                {children}
            </main>

        </>
    );
};
