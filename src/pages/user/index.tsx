import { BasicoLayout } from '@/components/layout/BasicoLayout'
import { Avatar, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import NextLink from 'next/link';
import Cookies from 'js-cookie';
import { useRouter as UseRouter } from 'next/router'

const User = () => {
    const { replace } = UseRouter();

    const OnclickSalir = () => {
        Cookies.remove('token');
        replace("/")
    }
    return (
        <BasicoLayout >

            <div>
                <TextField
                    label="Name"
                />
                <TextField
                    label="Email"
                />
                <Button variant="contained" color="primary">
                    Save
                </Button>

                <Link href={"/dashboard"} component={NextLink} >
                    <Button variant="text" color="primary"  >
                        <Typography >dashboard</Typography>
                    </Button>
                </Link>
                <Button variant="contained" color="primary" onClick={OnclickSalir} >
                    <Typography >Salir</Typography>
                </Button>
            </div>
        </BasicoLayout>
    )
}

export default User