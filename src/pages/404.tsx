import { Box, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../components/layout/ShopLayout';

const custom404 = () => {
    return (
        <ShopLayout title={'not found'} pageDescription={''}>

            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
                <Typography marginLeft={2}>No encontramos ninguna página aquí</Typography>
            </Box>
        </ShopLayout>
    )
}

export default custom404