import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Switch, TextField, TextareaAutosize, Typography, useMediaQuery, useTheme, } from "@mui/material";

import { ICategory, IUser } from "@/interfaces";
import { FormEvent, useContext, useState } from "react";
import UploadImg from "@/components/utils/UploadImg";
import { Password } from "@mui/icons-material";
import { crud } from "@/interfaces/utils";
import { RoleContext } from "@/context";

interface CreateModalProps {
    data: IUser | null;
    onClose: () => void;
    onSubmit: (values: IUser, type: crud) => void;
    open: boolean;
}

//traer de api
const roles = ["administrador", "vendedor", "usuario"]

export const ModalUser = ({
    open,
    data,
    onClose,
    onSubmit,
}: CreateModalProps) => {
    const { rol } = useContext(RoleContext)
    const [errorUpload, seterrorUpload] = useState("")
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e);

        const target: any[] = e.target as any
        const id = data ? data.id : undefined
        const type: crud = data ? "update" : "create"
        let res: IUser = {
            id: id,
            name: target[0].value,
            email: target[2].value,
            rol: target[4].value,
            status: target[8].checked,
            password: data ? "" : target[9].value
        } as IUser

        onSubmit(res, type)
        onClose();
    };
    const handleDelete = () => {
        const res = {
            id: data?.id
        } as IUser
        onSubmit(res, "delete")
        onClose();
    }

    return (
        <Dialog open={open} fullScreen={fullScreen}
        >

            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Stack
                        sx={{
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            paddingTop: "5px",
                            gap: '1rem',
                        }}
                    >
                        <TextField
                            id="name"
                            label="Nombre"
                            defaultValue={data?.name}
                            required
                            autoComplete="name"

                        />
                        <TextField
                            id="email"
                            label="email"
                            type="email"
                            defaultValue={data?.email}
                            required
                            autoComplete="email"
                        />
                        <Autocomplete
                            disablePortal
                            id="rol"
                            options={roles}
                            defaultValue={data?.rol}
                            renderInput={(params) => <TextField {...params} label="Rol" />}
                        />

                        <Box display={"flex"} alignItems={"center"}>
                            <Typography>Estado </Typography>
                            <Typography>{data?.status} </Typography>
                            <Switch defaultChecked={data?.status} />

                        </Box>
                        {!data && <TextField
                            autoComplete="new-password"
                            type="password"
                            id="password"
                            label="password"

                        />}



                    </Stack>
                    <DialogActions sx={{ p: '1.25rem', marginTop: "2rem" }} >
                        {
                            data ? (
                                <Button color="info" variant="contained" type="submit"> Editar</Button>
                            ) : (
                                <Button color="info" variant="contained" type="submit"> Crear</Button>
                            )
                        }
                        <Button onClick={onClose}>Cancel</Button>

                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog >
    );
};