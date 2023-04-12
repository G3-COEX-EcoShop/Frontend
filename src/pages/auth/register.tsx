import RegisterForm from '@/components/auth/RegisterForm'
import { BasicoLayout } from '@/components/layout/BasicoLayout'
import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function register() {
    return (
        <BasicoLayout >

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Sign up</Typography>
                        <Typography variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                            Already have an account?
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <RegisterForm></RegisterForm>
                </Grid>
            </Grid>
        </BasicoLayout>
    )
}

export default register