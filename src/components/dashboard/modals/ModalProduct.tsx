import { Box, Button, Dialog, DialogActions, DialogContent, FormControl, InputLabel, MenuItem, Select, Stack, Switch, TextField, TextareaAutosize, Typography, useMediaQuery, useTheme, } from "@mui/material";

import { IProduct } from "@/interfaces";
import { FormEvent, useContext, useEffect, useState } from "react";
import UploadImg from "@/components/utils/UploadImg";
import { brandList } from "@/services/brand";
import { crud } from "@/interfaces/utils";
import { RoleContext } from "@/context";
import { productsQuery } from "@/services/product";

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

    const [category, setCategory] = useState(data?.category ? data?.category : categories[0])

    const [brand, setBrand] = useState(data?.brand)

    const [loading, setLoading] = useState(true)

    const fetchDataProduct = async () => {
        if (data?.id) {
            const fetchdata = await productsQuery(data?.id + "")
            setProduct({ ...fetchdata.data })
        }
        setLoading(false)
    }

    useEffect(() => {
        const fetchDataBrands = async () => {
            const data = await brandList()
            setBrands(data.map((item) => (item.name)))

        }
        fetchDataBrands()
    }, [])

    useEffect(() => {
        setLoading(true)
        setProduct({ ...data })
        setCategory(data?.category ? data?.category : "")
        setBrand(data?.brand ? data?.brand : "")
        fetchDataProduct()

    }, [data])



    if (loading) return (
        <Dialog open={open} fullScreen={fullScreen}
        >
            <>Cargando...</>
        </Dialog>
    )





    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target: any[] = e.target as any
        const type: crud = data ? "update" : "create"

        let res: any = {}
        res.img_url = urlImg || data?.img_url
        res.category = category
        res.brand = brand
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
            <DialogContent  >
                <form onSubmit={handleSubmit} id="formModal">


                    <Stack
                        sx={{
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            paddingTop: "5px",
                            gap: '1rem',
                        }}
                    >
                        <TextField
                            id="name"
                            name="name"
                            label="Nombre"
                            defaultValue={data?.name}

                            required
                        />
                        <Box display={"flex"} flexDirection={"column"}>
                            <Typography >Descripcion</Typography>
                            <TextareaAutosize name="description" id="description" placeholder="Descripcion del producto" minRows={3} defaultValue={data?.description} required />
                        </Box>

                        <Box display={"flex"} alignItems={"center"}>
                            <Typography>Estado </Typography>
                            <Typography>{data?.status} </Typography>
                            <Switch defaultChecked={data?.status} id="status" name="status" />

                        </Box>

                        <FormControl id="category">
                            <InputLabel id="categorylable">categoria</InputLabel>
                            <Select
                                id="category"
                                name="category"
                                labelId="categorylable"
                                label="categoria"
                                defaultValue={data?.category}
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
                        <FormControl id="brand" >
                            <InputLabel id="brandlable">marca</InputLabel>
                            <Select
                                id="brand"
                                name="brand"
                                labelId="brandlable"
                                defaultValue={data?.brand ? data?.brand : brands[0]}
                                value={brand}
                                label="categoria"
                                required
                                onChange={(item) => {
                                    setBrand(item.target.value)
                                }}
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
                            name="price"
                            type="number"
                            label="Precio"
                            defaultValue={data?.price}
                            required
                        />
                        <TextField
                            id="stock"
                            name="stock"
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

                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem', marginTop: "2rem" }} >
                <Box marginRight={"auto"}>

                    {
                        (rol.productPermission?.can_delete && product) && <Button color="primary" variant="text" onClick={handleDelete}> Eliminar</Button>
                    }
                </Box>
                <Button color="info" variant="contained" type="submit" form="formModal">
                    {
                        data ? ("Editar") : ("Crear")
                    }
                </Button>
                <Button onClick={onClose}>Cancel</Button>

            </DialogActions>
        </Dialog >
    );
};