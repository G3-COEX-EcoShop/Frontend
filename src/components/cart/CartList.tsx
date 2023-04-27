import { FC } from "react";
import NextLink from 'next/link';
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { ItemCounter } from "../ui";



interface Props {
    editable?: boolean
}

export const CartList: FC<Props> = ({ editable = false }) => {

    return (
        <>
            {/* //inicio */}
            <Grid container spacing={2} key={0} sx={{ mb: 1 }} >
                <Grid item xs={3}>
                    <Link href="/product/slug" component={NextLink}>
                        <CardActionArea>
                            <CardMedia
                                image={"https://res.cloudinary.com/dlrdlubmf/image/upload/v1680841128/EcoShop/PC%20Y%20PORTATILES/Computador_Port%C3%A1til_LENOVO_14_Pulgadas_IdeaPad_3_okwv1i.jpg"}
                                component='img'
                                sx={{ borderRadius: '5px' }}
                            />
                        </CardActionArea>
                    </Link>
                </Grid>

                <Grid item xs={6} >
                    <Box display='flex' flexDirection='column'  >
                        <Typography variant="body1" >{"titulo"}</Typography>


                        {/* condicional */}
                    </Box>
                </Grid>

                <Grid item xs={3} display='flex' alignItems='center' flexDirection='column' >
                    {
                        editable
                            ? <ItemCounter />
                            : <Typography variant="h2" >3</Typography>
                    }
                    <Typography variant="subtitle1" >{`$2000`}</Typography>
                    {/* Editable */}
                    {
                        editable && (

                            <Button variant="text" color="primary" >
                                Remover
                            </Button>
                        )
                    }
                </Grid>
            </Grid>
            {/* //fin */}
            <Grid container spacing={2} key={0} sx={{ mb: 1 }} >
                <Grid item xs={3}>
                    <Link href="/product/slug" component={NextLink}>
                        <CardActionArea>
                            <CardMedia
                                image={"https://res.cloudinary.com/dlrdlubmf/image/upload/v1680841128/EcoShop/PC%20Y%20PORTATILES/Computador_Port%C3%A1til_LENOVO_14_Pulgadas_IdeaPad_3_okwv1i.jpg"}
                                component='img'
                                sx={{ borderRadius: '5px' }}
                            />
                        </CardActionArea>
                    </Link>
                </Grid>

                <Grid item xs={6} >
                    <Box display='flex' flexDirection='column'  >
                        <Typography variant="body1" >{"titulo"}</Typography>


                        {/* condicional */}
                    </Box>
                </Grid>

                <Grid item xs={3} display='flex' alignItems='center' flexDirection='column' >
                    {
                        editable
                            ? <ItemCounter />
                            : <Typography variant="h2" >3</Typography>
                    }
                    <Typography variant="subtitle1" >{`$2000`}</Typography>
                    {/* Editable */}
                    {
                        editable && (

                            <Button variant="text" color="primary" >
                                Remover
                            </Button>
                        )
                    }
                </Grid>
            </Grid><Grid container spacing={2} key={0} sx={{ mb: 1 }} >
                <Grid item xs={3}>
                    <Link href="/product/slug" component={NextLink}>
                        <CardActionArea>
                            <CardMedia
                                image={"https://res.cloudinary.com/dlrdlubmf/image/upload/v1680841128/EcoShop/PC%20Y%20PORTATILES/Computador_Port%C3%A1til_LENOVO_14_Pulgadas_IdeaPad_3_okwv1i.jpg"}
                                component='img'
                                sx={{ borderRadius: '5px' }}
                            />
                        </CardActionArea>
                    </Link>
                </Grid>

                <Grid item xs={6} >
                    <Box display='flex' flexDirection='column'  >
                        <Typography variant="body1" >{product.title}</Typography>


                        {/* condicional */}
                    </Box>
                </Grid>

                <Grid item xs={3} display='flex' alignItems='center' flexDirection='column' >
                    {
                        editable
                            ? <ItemCounter />
                            : <Typography variant="h2" >3</Typography>
                    }
                    <Typography variant="subtitle1" >{`$${product.price}`}</Typography>
                    {/* Editable */}
                    {
                        editable && (

                            <Button variant="text" color="primary" >
                                Remover
                            </Button>
                        )
                    }
                </Grid>
            </Grid>
            ))
            }
        </>

    )
}
