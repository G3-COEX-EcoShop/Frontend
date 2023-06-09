import { BasicoLayout } from '@/components/layout/BasicoLayout'
import { Avatar, Button, Link, TextField, Typography } from "@mui/material";
import NextLink from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import { UseUser } from '@/hooks/UseUser';
import { getIdAndEmailUser } from '@/utils/token';
import { GetServerSideProps } from 'next';
import { RoleContext } from '@/context';
import { useContext } from 'react';

const getIdUser = () => {
    const token = Cookies.get('token')
    if (!token) return

    const user = getIdAndEmailUser(token)
    return user.id + ""
}

const User = () => {

    const { reload } = useRouter();
    const { user, isError, isLoading } = UseUser(getIdUser());
    const { rol, isLoaded, removeRol } = useContext(RoleContext)

    const OnclickSalir = () => {
        Cookies.remove('token');
        removeRol()
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
                {
                    rol?.dashboard && (
                        <Link href={"/dashboard"} component={NextLink} >
                            <Button variant="text" color="primary"  >
                                <Typography >dashboard</Typography>
                            </Button>
                        </Link>
                    )
                }
                <Button variant="contained" color="primary" onClick={OnclickSalir} >
                    <Typography >Salir</Typography>
                </Button>
            </div>
        </BasicoLayout>
    )
}
export default User