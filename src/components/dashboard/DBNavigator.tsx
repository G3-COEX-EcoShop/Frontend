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

const categories = [
    {
        id: "-",
        children: [
            {
                id: "Usuarios",
                icon: <AccountCircleOutlinedIcon />,
                active: true,
            },
            { id: "Productos", icon: <Inventory2OutlinedIcon /> },
            { id: "Categorias", icon: <CategoryOutlinedIcon /> },
        ],
    },
    {
        id: "Tienda",
        children: [
            { id: "Pedidos", icon: <ShoppingCartOutlinedIcon /> },

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
                <ListItem sx={{}}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Web-Tienda</ListItemText>
                </ListItem>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{}}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{}}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton selected={active} >
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}
