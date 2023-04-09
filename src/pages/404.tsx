import { Box, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../components/layout/ShopLayout';
import { BasicoLayout } from '@/components/layout/BasicoLayout';

const custom404 = () => {
    return (
        <BasicoLayout >

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
        </BasicoLayout>
    )
}

export default custom404