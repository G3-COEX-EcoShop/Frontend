import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Switch, TextField, TextareaAutosize, Typography, useMediaQuery, useTheme, } from "@mui/material";

import { ICategory, IUser } from "@/interfaces";
import { FormEvent, useState } from "react";
import UploadImg from "@/components/utils/UploadImg";

interface CreateModalProps {
    data: IUser | null;
    onClose: () => void;
    onSubmit: (values: IUser, isNew: boolean) => void;
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

    const [urlImg, seturlImg] = useState("")
    const [errorUpload, seterrorUpload] = useState("")
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e);

        const target: any[] = e.target as any
        const id = data ? data.id : undefined

        let res: IUser = {
            id: id,
            name: target[0].value,
            email: target[2].value,
            rol: target[4].value,
            status: target[8].checked
        } as IUser
        onSubmit(res, !data)
        onClose();
    };


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
                            value={data?.name}
                            required
                        />
                        <TextField
                            id="email"
                            label="email"
                            value={data?.name}
                            required
                        />
                        <Autocomplete
                            disablePortal
                            id="rol"
                            options={roles}
                            defaultValue={data?.rol}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                        />

                        <Box display={"flex"} alignItems={"center"}>
                            <Typography>Estado </Typography>
                            <Typography>{data?.status} </Typography>
                            <Switch defaultChecked={data?.status} />

                        </Box>


                    </Stack>
                    <DialogActions sx={{ p: '1.25rem' }}>
                        <Button onClick={onClose}>Cancel</Button>
                        {
                            data ? (
                                <Button color="info" variant="contained" type="submit"> Editar</Button>
                            ) : (
                                <Button color="info" variant="contained" type="submit"> Crear</Button>
                            )
                        }

                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog >
    );
};