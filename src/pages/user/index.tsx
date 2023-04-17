import { BasicoLayout } from '@/components/layout/BasicoLayout'
import { Avatar, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import NextLink from 'next/link';
import Cookies from 'js-cookie';
import { useRouter as UseRouter } from 'next/router'
import { UseUser } from '@/hooks/UseUser';
import { getIdAndEmailUser } from '@/utils/token';


const User = () => {

    const getIdUser = () => {
        const token = Cookies.get('token')
        if (!token) return

        const user = getIdAndEmailUser(token)
        return user.id + ""
    }
    const { reload, replace } = UseRouter();
    const { user, isError, isLoading } = UseUser(getIdUser());

    const OnclickSalir = () => {
        Cookies.remove('token');
        reload();
    }

    return (
        <BasicoLayout >

            <div>
                <Typography>{user?.name}</Typography>
                <Typography>{user?.email}</Typography>

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