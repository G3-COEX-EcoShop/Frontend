import { Box, Button, Dialog, DialogActions, DialogContent, Stack, Switch, TextField, TextareaAutosize, Typography, useMediaQuery, useTheme, } from "@mui/material";

import { ICategory } from "@/interfaces";
import { FormEvent, useState } from "react";
import UploadImg from "@/components/utils/UploadImg";

interface CreateModalProps {
    data: ICategory | null;
    onClose: () => void;
    onSubmit: (values: ICategory, isNew: boolean) => void;
    open: boolean;
}

export const ModalCategory = ({
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
        const target: any[] = e.target as any
        const id = data ? data.id : target[0].value
        const url = urlImg || data?.img_url

        let res: ICategory = {
            id: id,
            name: target[0].value,
            description: target[2].value,
            img_url: url || "",
            status: target[4].checked
        }
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
                            defaultValue={data?.name}
                            required
                        />
                        <Box display={"flex"} flexDirection={"column"}>
                            <Typography >Descripcion</Typography>
                            <TextareaAutosize name="Soft" placeholder="Descripcion de la categoria" minRows={5} value={data?.description} required />
                        </Box>

                        <Box display={"flex"} alignItems={"center"}>
                            <Typography>Estado </Typography>
                            <Switch defaultChecked={data?.status} />

                        </Box>

                        <UploadImg
                            imgInit={data?.img_url}
                            setUrl={seturlImg}
                            seterror={seterrorUpload}
                        ></UploadImg>


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