import LoginForm from '@/components/auth/LoginForm'
import { BasicoLayout } from '@/components/layout/BasicoLayout'
import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const login = () => {
    return (
        <BasicoLayout >

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Login</Typography>
                        <Typography variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                            Don&apos;t have an account?
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <LoginForm />
                </Grid>
            </Grid>
        </BasicoLayout>
    )
}

export default login