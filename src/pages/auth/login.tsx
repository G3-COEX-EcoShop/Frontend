import LoginForm from '@/components/auth/LoginForm'
import { BasicoLayout } from '@/components/layout/BasicoLayout'
import { authLogin } from '@/services/auth'
import { Grid, Stack, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Login = () => {

    const { replace, reload } = useRouter();
    const [isLoginReq, setisLoginReq] = useState(false)

    async function onSubmit(values: any) {
        setisLoginReq(true)
        const res = await authLogin(values) as { name: string, error: string }
        setisLoginReq(false)
        if (res.name) {
            replace("/user")
            if (res.error) {
                alert(res.error)
            }
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
                    <LoginForm onSubmit={onSubmit} isLoginReq={isLoginReq} />
                </Grid>
            </Grid>
        </BasicoLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {


    if (context.query.t) {
        context.res.setHeader("Set-cookie", `token=${context.query.t};path=/`)
        return {
            redirect: {
                destination: '/user',
                permanent: false,
            }
        }
    }

    return {
        props: {
        }
    }
}

export default Login