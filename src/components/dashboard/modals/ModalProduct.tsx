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
        const id = data ? data.id : target[0].value
        const url = urlImg || data?.img_url
        const type: crud = data ? "update" : "create"
        //corregir
        let res: IProduct = {
            id: id,
            name: target[0].value,
            description: target[2].value,
            img_url: url || "",
            status: target[4].checked
        } as IProduct
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
                            value={data?.name}
                            required
                        />
                        <Box display={"flex"} flexDirection={"column"}>
                            <Typography >Descripcion</Typography>
                            <TextareaAutosize name="Soft" placeholder="Descripcion de la categoria" minRows={5} value={data?.description} required />
                        </Box>

                        <Box display={"flex"} alignItems={"center"}>
                            <Typography>Estado </Typography>
                            <Typography>{data?.status} </Typography>
                            <Switch defaultChecked={data?.status} />

                        </Box>
                        <Autocomplete
                            id="category"

                            options={categories}
                            defaultValue={data?.category}
                            renderInput={(params) => <TextField {...params} label="Categoria" required />}
                        />
                        <Autocomplete
                            disablePortal
                            id="brands"
                            options={brands}
                            defaultValue={data?.brand}
                            renderInput={(params) => <TextField {...params} label="Marca" required />}
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