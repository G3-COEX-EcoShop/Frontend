import { FC } from "react";
import NextLink from 'next/link';
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { initialData } from "../../../database/products"
import { ItemCounter } from "../UI";


const productInCart = [
    initialData.products[0]
]

interface Props {
    editable?: boolean
}

export const CartList: FC <Props> = ({ editable = false }) => {
  
    return (
        <>
            {
                productInCart.map( product => (
                        <Grid container spacing={ 2 } key={ product.title } sx={{ mb: 1 }} >
                            <Grid item xs={ 3 }>
                                <NextLink href="/product/slug" passHref >
                                    <Link>
                                        <CardActionArea>
                                            <CardMedia
                                                image={ ` /products/${ product.images[0] } ` }
                                                component='img'
                                                sx={{ borderRadius: '5px' }}
                                            />
                                        </CardActionArea>
                                    </Link>
                                </NextLink>
                            </Grid>

                            <Grid item xs={ 6 } >
                                <Box display='flex' flexDirection='column'  >
                                    <Typography variant="body1" >{ product.title }</Typography>


                                    {/* condicional */}
                                </Box>
                            </Grid>

                            <Grid item xs={ 3 } display='flex' alignItems='center' flexDirection='column' >
                                {
                                    editable
                                    ?<ItemCounter/>
                                    :<Typography variant="h2" >3</Typography>
                                }
                                <Typography variant="subtitle1" >{ `$${ product.price }` }</Typography>
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
