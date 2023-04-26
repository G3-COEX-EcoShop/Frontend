import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, FormControl, InputLabel, MenuItem, Select, Stack, Switch, TextField, TextareaAutosize, Typography, useMediaQuery, useTheme, } from "@mui/material";

import { IProduct } from "@/interfaces";
import { FormEvent, useContext, useEffect, useState } from "react";
import UploadImg from "@/components/utils/UploadImg";
import { brandList } from "@/services/brand";
import { crud } from "@/interfaces/utils";
import { RoleContext } from "@/context";
import { productsQuery } from "@/services/product";
import { NonNullExpression } from "typescript";

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

    const [product, setProduct] = useState<IProduct | null>(data)

    const [category, setCategory] = useState("computadores")

    useEffect(() => {
        const fetchDataBrands = async () => {
            const data = await brandList()
            setBrands(data.map((item) => (item.name)))

        }
        fetchDataBrands()
    }, [])

    useEffect(() => {
        setCategory(data?.category ? data?.category : "computadores")
        console.log({ data });


        if (data?.id) {
            (async () => {
                const res = await productsQuery(data.id + "")
                setProduct(res.data)
                console.log({ product });
            })
            console.log({ product });


        } else {
            setProduct(data)
            console.log({ product });

        }

    }, [data])

    useEffect(() => {
        setCategory(product?.Category + "")

    }, [product])







    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("submit");

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
        console.log({ res });

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
        <form onSubmit={handleSubmit} id="formModal">
            <Dialog open={open} fullScreen={fullScreen}
            >
                <DialogContent  >


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
                            defaultValue={product?.name}

                            required
                        />
                        <Box display={"flex"} flexDirection={"column"}>
                            <Typography >Descripcion</Typography>
                            <TextareaAutosize name="Soft" placeholder="Descripcion de la categoria" minRows={5} defaultValue={product?.description} required />
                        </Box>

                        <Box display={"flex"} alignItems={"center"}>
                            <Typography>Estado </Typography>
                            <Typography>{product?.status} </Typography>
                            <Switch defaultChecked={product?.status} id="status" />

                        </Box>

                        <FormControl >
                            <InputLabel id="category">categoria</InputLabel>
                            <Select
                                id="category"
                                labelId="category"
                                label="categoria"
                                required
                                value={category}
                                onChange={(item) => {
                                    setCategory(item.target.value)
                                }}
                            >
                                {
                                    categories.map((item) => (
                                        <MenuItem key={item} value={item}>{item}</MenuItem>
                                    ))
                                }

                            </Select>

                        </FormControl>
                        <FormControl >
                            <InputLabel id="brands">marca</InputLabel>
                            <Select
                                id="brands"
                                labelId="brands"
                                defaultValue={product?.brand ? product?.brand : brands[0]}
                                label="categoria"
                                required
                            >
                                {
                                    brands.map((item) => (
                                        <MenuItem key={item} value={item}>{item}</MenuItem>
                                    ))
                                }

                            </Select>
                        </FormControl>

                        <TextField
                            id="price"
                            type="number"
                            label="Precio"
                            defaultValue={product?.price}
                            required
                        />
                        <TextField
                            id="stock"
                            type="number"
                            label="Cantidad"
                            defaultValue={product?.stock}
                            required
                        />
                        <UploadImg
                            imgInit={product?.img_url}
                            setUrl={seturlImg}
                            seterror={seterrorUpload}
                        ></UploadImg>
                        {
                            (category == "celulares") &&
                            <>

                                <TextField
                                    id="operating_system"
                                    type="text"
                                    label="Sistema opetativo"
                                    defaultValue={product?.ProductCel?.operating_system}
                                    required
                                />
                                <TextField
                                    id="storage"
                                    type="text"
                                    label="Almacenamiento"
                                    defaultValue={product?.ProductCel?.storage}
                                    required
                                />
                                <TextField
                                    id="ram"
                                    type="text"
                                    label="RAM"
                                    defaultValue={product?.ProductCel?.ram}
                                    required
                                />
                                <TextField
                                    id="processor"
                                    type="text"
                                    label="Procesador"
                                    defaultValue={product?.ProductCel?.processor}
                                    required
                                />
                                <TextField
                                    id="screen_size"
                                    type="text"
                                    label="Pantalla"
                                    defaultValue={product?.ProductCel?.screen_size}
                                    required
                                />
                                <TextField
                                    id="resolution"
                                    type="text"
                                    label="Resolucion"
                                    defaultValue={product?.ProductCel?.resolution}
                                    required
                                />
                                <TextField
                                    id="main_camera"
                                    type="text"
                                    label="Camara principal"
                                    defaultValue={product?.ProductCel?.main_camera}
                                    required
                                />
                                <TextField
                                    id="front_camera"
                                    type="text"
                                    label="Camara frontal"
                                    defaultValue={product?.ProductCel?.front_camera}
                                    required
                                />
                                <TextField
                                    id="battery"
                                    type="text"
                                    label="Bateria"
                                    defaultValue={product?.ProductCel?.battery}
                                    required
                                />

                            </>
                        }
                        {
                            (category == "televisores") &&
                            <>

                                <TextField
                                    id="display_technology"
                                    type="text"
                                    label="Tipo de pantalla"
                                    defaultValue={product?.ProductTV?.display_technology}
                                    required
                                />
                                <TextField
                                    id="hdmi"
                                    type="text"
                                    label="hdmi"
                                    defaultValue={product?.ProductTV?.hdmi}
                                    required
                                />

                                <TextField
                                    id="screen_size"
                                    type="text"
                                    label="Pantalla"
                                    defaultValue={product?.ProductTV?.screen_size}
                                    required
                                />
                                <TextField
                                    id="resolution"
                                    type="text"
                                    label="Resolucion"
                                    defaultValue={product?.ProductTV?.resolution}
                                    required
                                />

                            </>
                        }
                        {
                            (category == "computadores") &&
                            <>
                                <TextField
                                    id="operating_system"
                                    type="text"
                                    label="Sistema opetativo"
                                    defaultValue={product?.ProductLaptop?.operating_system}
                                    required
                                />
                                <TextField
                                    id="storage"
                                    type="text"
                                    label="Almacenamiento"
                                    defaultValue={product?.ProductLaptop?.storage}
                                    required
                                />
                                <TextField
                                    id="ram"
                                    type="text"
                                    label="RAM"
                                    defaultValue={product?.ProductLaptop?.ram}
                                    required
                                />
                                <TextField
                                    id="cpu_brand"
                                    type="text"
                                    label="Procesador"
                                    defaultValue={product?.ProductLaptop?.cpu_brand}
                                    required
                                />
                                <TextField
                                    id="cpu_model"
                                    type="text"
                                    label="Procesador"
                                    defaultValue={product?.ProductLaptop?.cpu_model}
                                    required
                                />
                                <TextField
                                    id="screen_size"
                                    type="text"
                                    label="Pantalla"
                                    defaultValue={product?.ProductLaptop?.screen_size}
                                    required
                                />
                                <TextField
                                    id="resolution"
                                    type="text"
                                    label="Resolucion"
                                    defaultValue={product?.ProductLaptop?.resolution}
                                    required
                                />

                                <TextField
                                    id="graphics_coprocessor"
                                    type="text"
                                    label="Graficos"
                                    defaultValue={product?.ProductLaptop?.graphics_coprocessor}
                                    required
                                />

                            </>
                        }

                    </Stack>

                </DialogContent>
                <DialogActions sx={{ p: '1.25rem', marginTop: "2rem" }} >
                    <Box marginRight={"auto"}>

                        {
                            (rol.productPermission?.can_delete && product) && <Button color="primary" variant="text" onClick={handleDelete}> Eliminar</Button>
                        }
                    </Box>
                    <Button color="info" variant="contained" type="submit" form="formModal">
                        {
                            product ? ("Editar") : ("Crear")
                        }
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>

                </DialogActions>
            </Dialog >
        </form>
    );
};