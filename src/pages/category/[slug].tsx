import { ShopLayout } from '@/components/layout';
import { ProductList } from '@/components/product';
import { UseProducts } from '@/hooks/UseProducts';
import { ICategory, IProduct, TCategory, TProductCel } from '@/interfaces';
import { categoriesList, categoryQuery } from '@/services/category';
import { productsByCategory } from '@/services/product';
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react'


type genericObj = { [propName: string]: string; } | undefined
type genericMapSet = { [propName: string]: Set<string>; }
type genericArray = { [propName: string]: string[]; }

interface Props {
    productsStatic: IProduct[]
    path: string
    category: ICategory,
    filter: genericArray
}

const categoryPage: FC<Props> = ({ productsStatic, path, category, filter }) => {
    const { products: productsDinamic, isLoading, setlist, isError } = UseProducts(path);

    return (
        <ShopLayout title={`Productos de la categoria ${category.name}`} pageDescription={`Todos nuestros productos en la categorias de ${category.name}`} imageFullUrl={category.img_url}>

            <Box display={'flex'} flexDirection={'row'} gap={"1.5em"}>
                <Paper elevation={5} sx={{ height: "min-content", width: "15em" }}>
                    <Box display={'flex'} flexDirection={'column'} gap={"1rem"} width={"15em"} padding={"1em"}></Box>
                </Paper>
                <Paper elevation={5} sx={{ height: "min-content", position: "fixed" }}>
                    <Box display={'flex'} flexDirection={'column'} gap={"1rem"} width={"15em"} padding={"1em"}  >
                        {
                            <>
                                <FormControl >
                                    <InputLabel id="resolutionlable">resolucion</InputLabel>
                                    <Select
                                        id="resolution"
                                        name="resolution"
                                        labelId="resolutionlable"
                                        label="resolucion"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.resolution.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel id="screen_size">Tamaño de pantalla</InputLabel>
                                    <Select
                                        id="screen_size"
                                        name="screen_size"
                                        labelId="screen_size"
                                        label="Tamaño de pantalla"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.screen_size.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                            </>
                        }
                        {
                            (category.name == "celulares" || category.name == "computadores") &&
                            <>
                                <FormControl >
                                    <InputLabel id="operating_system">Sistema operativo</InputLabel>
                                    <Select
                                        id="operating_system"
                                        name="operating_system"
                                        labelId="operating_system"
                                        label="Sistema operativo"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.operating_system.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel id="ram">RAM</InputLabel>
                                    <Select
                                        id="ram"
                                        name="ram"
                                        labelId="ram"
                                        label="RAM"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.ram.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel id="storage">Almacenamiento</InputLabel>
                                    <Select
                                        id="storage"
                                        name="storage"
                                        labelId="storage"
                                        label="Almacenamiento"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.storage.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>

                            </>
                        }

                        {
                            (category.name == "televisores") &&
                            <>
                                <FormControl >
                                    <InputLabel id="display_technology">Tipo de pantalla</InputLabel>
                                    <Select
                                        id="display_technology"
                                        name="display_technology"
                                        labelId="display_technology"
                                        label="Tipo de pantalla"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.display_technology.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel id="hdmi">HDMI</InputLabel>
                                    <Select
                                        id="hdmi"
                                        name="hdmi"
                                        labelId="hdmi"
                                        label="HDMI"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.hdmi.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                            </>
                        }
                        {
                            (category.name == "computadores") &&
                            <>
                                <FormControl >
                                    <InputLabel id="cpu_brand">Marca del procesador</InputLabel>
                                    <Select
                                        id="cpu_brand"
                                        name="cpu_brand"
                                        labelId="cpu_brand"
                                        label="Marca del procesador"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.cpu_brand.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel id="cpu_model">Procesador</InputLabel>
                                    <Select
                                        id="cpu_model"
                                        name="cpu_model"
                                        labelId="cpu_model"
                                        label="Procesador"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.cpu_model.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel id="graphics_coprocessor">Graficos</InputLabel>
                                    <Select
                                        id="graphics_coprocessor"
                                        name="graphics_coprocessor"
                                        labelId="graphics_coprocessor"
                                        label="Graficos"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.graphics_coprocessor.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                            </>
                        }
                        {
                            (category.name == "celulares") &&
                            <>
                                <FormControl >
                                    <InputLabel id="processor">Procesador</InputLabel>
                                    <Select
                                        id="processor"
                                        name="processor"
                                        labelId="processor"
                                        label="Procesador"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.processor.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel id="main_camera">Camara principal</InputLabel>
                                    <Select
                                        id="main_camera"
                                        name="main_camera"
                                        labelId="main_camera"
                                        label="Camara principal"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.main_camera.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel id="front_camera">Camara frontal</InputLabel>
                                    <Select
                                        id="front_camera"
                                        name="front_camera"
                                        labelId="front_camera"
                                        label="Camara frontal"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.front_camera.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel id="battery">Bateria</InputLabel>
                                    <Select
                                        id="battery"
                                        name="battery"
                                        labelId="battery"
                                        label="Bateria"
                                        required
                                        onChange={(item) => {
                                        }}
                                    >
                                        {
                                            filter.battery.map((item) => (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                            </>
                        }
                        <Button>Buscar</Button>


                    </Box>
                </Paper>

                <ProductList productsStatic={productsStatic} productsDinamic={productsStatic} isLoading={false} />
            </Box>

        </ShopLayout >
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const categories = await categoriesList();

    return {
        paths: categories.map((category) => {
            return {
                params: {
                    slug: category.id,
                }
            }
        }
        ),
        fallback: 'blocking'
    }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {

    const slug = params?.slug as TCategory
    const product = await productsByCategory(slug);
    let valuesInput: genericMapSet = {};
    let obj: genericObj = {}
    product.data.map((item, i) => {
        switch (slug) {
            case "celulares":
                obj = item.ProductCel as genericObj
                break;
            case "computadores":
                obj = item.ProductLaptop as genericObj
                break;
            case "televisores":
                obj = item.ProductTV as genericObj
                break;

        }
        if (obj) {
            for (const property in obj) {
                if (i == 0) {
                    valuesInput[property] = new Set<any>();
                }
                const value = obj[property] + ""
                valuesInput[property].add(value.toLocaleLowerCase().trim())
            }
        }
    })
    let filter: genericArray = {}
    if (valuesInput) {
        for (const item in valuesInput) {
            filter[item] = Array.from(valuesInput[item])
        }
    }

    const dataCategory = await categoryQuery(slug);


    return {
        props: {
            productsStatic: product.data,
            path: product.path,
            category: dataCategory.data,
            filter
        },
        revalidate: 28800
    }
}

export default categoryPage