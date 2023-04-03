import NextLink from 'next/link'

import { AppBar, Box, Link, Toolbar, Button, Divider, IconButton } from '@mui/material'
import Image from 'next/image'
import Typography from '@mui/material/Typography';

/* import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'; */

import MyPersonIcon from '@mui/icons-material/AccountCircleOutlined';
import MyCarIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Search } from '../utils/Search';
export const Navbar = () => {

/*     const navItems = [
        {
            text: "Mi Cuenta",
            icon: <AccountCircleOutlinedIcon />,
            url: "/"
        },
        {
            text: "Mis pedidos",
            icon: <StorefrontOutlinedIcon />,
            url: "/ordes"
        },
        {
            text: "Carrito",
            icon: <ShoppingCartOutlinedIcon />,
            url: "/cart"
        }
    ] */

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <AppBar color='primary' component="nav" variant='elevation' >
            <Toolbar sx={{ justifyContent: "space-around", display: "flex" }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <NextLink href={'/'} passHref>
                    <Image
                        width={120}
                        height={50}
                        src="https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQnX9lPLVoh3eL1WKMqg2-dZlDDsfO4H_JusGDbkNBFF7ugyWllUCV5wipPARdgpGLp8srtCotMFYWTlynZiHvVe0vA=w1920-h975" alt="icon Tienda EcoShop"
                    />

                </NextLink>

                <Search />

                <Box display="flex" sx={{ display: { xs: 'none', sm: 'flex', } }}>
{/*                     {navItems.map(({ text, icon, url }, i) =>
                    (
                        <>
                            <Divider  orientation="vertical" flexItem sx={{ margin: "0px 7px" }} key={i} />
                            <Link href={url} component={NextLink} key={i}>
                            <Button sx={{ padding: '5px 15px' }} variant="text" color="secondary" startIcon={icon}>
                                    <Typography sx={{ display: { sm: 'none', md: 'block' }, }}>{text}</Typography>
                                </Button>
                            </Link>
                        </>
                    ))} */}
                    <NextLink href={''}>
                        <Link>
                            <Button> <MyPersonIcon/>  Mi cuenta</Button>
                        </Link>   
                    </NextLink>
                    <NextLink href={''}>
                        <Link>
                            <Button> <StorefrontOutlinedIcon/>  Mis pedidos</Button>
                        </Link>   
                    </NextLink>
                    <NextLink href={''}>
                        <Link>
                            <Button> <MyCarIcon/>  Mi cuenta</Button>
                        </Link>   
                    </NextLink>
                </Box>

            </Toolbar>

        </AppBar >
    )
}
