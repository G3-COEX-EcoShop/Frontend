import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { FC, PropsWithChildren, useState } from "react";

import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navigator from '../dashboard/DBNavigator';
import Content from '../dashboard/DBContent';
import Header from '../dashboard/DBHeader';
import { lightTheme } from '@/themes'

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}


const drawerWidth = 256;


export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, bgcolor: "primary" }}
            >
                <Navigator
                    PaperProps={{ style: { width: drawerWidth, backgroundColor: lightTheme.palette.grey.A100 } }}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />

                <Navigator
                    PaperProps={{ style: { width: drawerWidth, backgroundColor: lightTheme.palette.grey.A100 } }}
                    sx={{ display: { sm: 'block', xs: 'none' }, }}
                />
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header onDrawerToggle={handleDrawerToggle} />
                <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: lightTheme.palette.grey.A200 }}>
                    {children}
                </Box>

            </Box>
        </Box>
    );
}
