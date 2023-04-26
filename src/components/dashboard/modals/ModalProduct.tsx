import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Switch, TextField, TextareaAutosize, Typography, useMediaQuery, useTheme, } from "@mui/material";

import { IProduct } from "@/interfaces";
import { FormEvent, useContext, useEffect, useState } from "react";
import UploadImg from "@/components/utils/UploadImg";
import { brandList } from "@/services/brand";
import { crud } from "@/interfaces/utils";
import { RoleContext } from "@/context";

interface CreateModalProps {
    data: IProduct | null;
    onClose: () => void;
    onSubmit: (values: IProduct, type: crud) => void;
    open: boolean;
}

const categories = ["computadores", "celulares", "televisores"]

export const ModalProduct = ({
    open,
    data,
    onClose,
    onSubmit,
}: CreateModalProps) => {

    const { rol } = useContext(RoleContext)

    const [urlImg, seturlImg] = useState("")
    const [errorUpload, seterrorUpload] = useState("")
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [brands, setBrands] = useState<string[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await brandList()
            setBrands(data.map((item) => (item.name)))

        }
        fetchData()
    }, [])



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target: any[] = e.target as any
        const type: crud = data ? "update" : "create"

        let res: any = {}
        res.img_url = urlImg || data?.img_url
        if (data) res.id = data.id

        for (let i = 0; i < target.length; i++) {
            const item = target[i]
            if (item.id) {
                if (item.value) {
                    if (item.id === "status") {
                        res.status = item.checked
                    } else {
                        res[item.id] = item.value
                    }

                }


            }

        }
        onSubmit(res, type)
        onClose();
    };

    const handleDelete = () => {
        const res = {
            id: data?.id
        }
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
                        />
                        <Box display={"flex"} flexDirection={"column"}>
                            <Typography >Descripcion</Typography>
                            <TextareaAutosize name="Soft" placeholder="Descripcion de la categoria" minRows={5} defaultValue={data?.description} required />
                        </Box>

                        <Box display={"flex"} alignItems={"center"}>
                            <Typography>Estado </Typography>
                            <Typography>{data?.status} </Typography>
                            <Switch defaultChecked={data?.status} id="status" />

                        </Box>
                        <Autocomplete
                            id="category"

                            options={categories}
                            defaultValue={data?.category}
                            renderInput={(params) => <TextField {...params} label="Categoria" required id="category" />}
                        />
                        <Autocomplete
                            disablePortal
                            id="brands"
                            options={brands}
                            defaultValue={data?.brand}
                            renderInput={(params) => <TextField {...params} label="Marca" required id="brands" />}
                        />

                        <TextField
                            id="price"
                            type="number"
                            label="Precio"
                            defaultValue={data?.price}
                            required
                        />
                        <TextField
                            id="stock"
                            type="number"
                            label="Cantidad"
                            defaultValue={data?.stock}
                            required
                        />
                        <UploadImg
                            imgInit={data?.img_url}
                            setUrl={seturlImg}
                            seterror={seterrorUpload}
                        ></UploadImg>


                    </Stack>
                    <DialogActions sx={{ p: '1.25rem', marginTop: "2rem" }} >
                        <Box marginRight={"auto"}>

                            {
                                (rol.productPermission?.can_delete && data) && <Button color="primary" variant="text" onClick={handleDelete}> Eliminar</Button>
                            }
                        </Box>
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