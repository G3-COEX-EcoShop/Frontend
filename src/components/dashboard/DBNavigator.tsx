import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "@mui/material";
import NextLink from 'next/link'
const categories = [
    {
        id: "-",
        children: [
            {
                id: "Usuarios",
                icon: <AccountCircleOutlinedIcon />,
                active: false,
                href: "/dashboard"
            },
            {
                id: "Productos",
                icon: <Inventory2OutlinedIcon />,
                active: true,
                href: "/dashboard/products"
            },
            {
                id: "Categorias",
                icon: <CategoryOutlinedIcon />,
                active: false,
                href: "/dashboard"
            },
        ],
    },
    {
        id: "Tienda",
        children: [
            {
                id: "Pedidos", icon: <ShoppingCartOutlinedIcon />,
                active: false,
                href: "/dashboard"
            },

        ],
    },
];



export default function DBNavigator(props: DrawerProps) {
    const { ...other } = props;

    return (
        <Drawer variant="permanent" {...other} >
            <List>
                <ListItem
                    sx={{ fontSize: 22, }}
                >
                    ECO
                </ListItem>
                <Link href="/" component={NextLink} color={"black"}>
                    <ListItem sx={{}}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Web-Tienda</ListItemText>
                    </ListItem>
                </Link>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{}}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{}}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active, href }) => (
                            <Link href={href} component={NextLink} key={childId} color={"black"}>
                                <ListItem disablePadding>
                                    <ListItemButton selected={active} >
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText>{childId}</ListItemText>
                                    </ListItemButton>
                                </ListItem>

                            </Link>
                        ))}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}
