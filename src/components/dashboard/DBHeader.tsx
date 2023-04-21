import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

interface HeaderProps {
    onDrawerToggle: () => void;
}

export default function DBHeader(props: HeaderProps) {
    const { onDrawerToggle } = props;

    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <Grid container spacing={1} alignItems="center">
                    <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={onDrawerToggle}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs />

                    <Grid item>
                        <Tooltip title="Alerts • No alerts">
                            <IconButton color="inherit">
                                <NotificationsIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <IconButton color="inherit" sx={{ p: 0.5 }}>
                            <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>


    );
}
