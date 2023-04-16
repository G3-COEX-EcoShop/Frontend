import LoginForm from '@/components/auth/LoginForm'
import { BasicoLayout } from '@/components/layout/BasicoLayout'
import { authLogin } from '@/services/auth'
import { Grid, Stack, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter as UseRouter } from 'next/router'

const login = () => {

    const { replace, reload } = UseRouter();

    async function onSubmit(values: any) {
        const res = await authLogin(values) as { name: string, error: string }
        if (res.name) {
            localStorage.setItem('nameUser', res.name);
            replace("/user").then(() => { reload() })
        }
        if (res.error) {
            alert(res.error)
        }
    }

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
                    <LoginForm onSubmit={onSubmit} />
                </Grid>
            </Grid>
        </BasicoLayout>
    )
}


export default login