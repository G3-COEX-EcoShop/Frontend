import React, { FC } from 'react'
import {
    Button,
    Divider,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    Box
} from '@mui/material';

import { Formik } from 'formik';
import * as Yup from 'yup';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import SocialBtns from './SocialBtns';

interface prop {
    onSubmit: (value: any) => void
    isLoginReq: boolean
}
const LoguinForm: FC<prop> = ({ onSubmit, isLoginReq }) => {
    const [checked, setChecked] = React.useState(false);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    setStatus({ success: false });
                    setSubmitting(false);
                } catch (err: any) {
                    setStatus({ success: false });
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                }
                onSubmit(values)

            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="email-login">Email Address</InputLabel>
                                <OutlinedInput
                                    id="email-login"
                                    type="email"
                                    value={values.email}
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Enter email address"
                                    fullWidth
                                    error={Boolean(touched.email && errors.email)}
                                />
                                {touched.email && errors.email && (
                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                        {errors.email}
                                    </FormHelperText>
                                )}
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="password-login">Password</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    error={Boolean(touched.password && errors.password)}
                                    id="-password-login"
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                size="large"
                                            >
                                                {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    placeholder="Enter password"
                                />
                                {touched.password && errors.password && (
                                    <FormHelperText error id="standard-weight-helper-text-password-login">
                                        {errors.password}
                                    </FormHelperText>
                                )}
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: -1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                <Box></Box>
                                <Link variant="h6" href='./forgotPassword' color="text.primary">
                                    Forgot Password?
                                </Link>
                            </Stack>
                        </Grid>
                        {errors.submit && (
                            <Grid item xs={12}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <Button
                                disableElevation
                                disabled={isLoginReq}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider>
                                <Typography variant="caption"> Login with</Typography>
                            </Divider>
                        </Grid>
                        <Grid item xs={12}>
                            <SocialBtns />
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}

export default LoguinForm