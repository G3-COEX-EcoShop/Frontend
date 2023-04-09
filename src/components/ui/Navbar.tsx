import NextLink from 'next/link'

import { AppBar, Box, Link, Toolbar, Button, Divider, IconButton } from '@mui/material'
import Image from 'next/image'
import Typography from '@mui/material/Typography';

import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Search } from '../utils/Search';
export const Navbar = () => {

    const navItems = [
        {
            text: "Carrito",
            icon: <ShoppingCartOutlinedIcon />,
            url: "/cart/empty"
        },
        {
            text: "Mis pedidos",
            icon: <StorefrontOutlinedIcon />,
            url: "/ordes"
        },
        {
            text: "Mi Cuenta",
            icon: <AccountCircleOutlinedIcon />,
            url: "/user"
        },
    ]

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <AppBar color='primary' component="nav" variant='elevation' >
            <Toolbar sx={{ justifyContent: "space-between", display: "flex" }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
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

                <Search />

                <Box display="flex" sx={{ display: { xs: 'none', sm: 'flex', }, }}>
                    {navItems.map(({ text, icon, url }, i) =>
                    (
                        <Box key={i}>
                            <Divider orientation="vertical" flexItem sx={{ margin: "0px 7px" }} />
                            <Link href={url} component={NextLink} >
                                <Button variant="text" color="secondary" startIcon={icon} >
                                    <Typography sx={{ display: { sm: 'none', md: 'block' }, }}>{text}</Typography>
                                </Button>
                            </Link>
                        </Box>
                    ))}

                </Box>

            </Toolbar>

        </AppBar >
    )
}