import { FC } from "react";
import NextLink from 'next/link';
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { ItemCounter } from "../ui";



interface Props {
    editable?: boolean
}

export const CartList: FC <Props> = ({ editable = false }) => {
  
    return (
        <>
            {
                        <Grid container spacing={ 2 } key={ 0 } sx={{ mb: 1 }} >
                            <Grid item xs={ 3 }>
                                <NextLink href="/product/slug" passHref >
                                    <Link>
                                        <CardActionArea>
                                            <CardMedia
                                                image={ `https://res.cloudinary.com/dztzw4jkb/image/upload/v1682120432/cld-sample-5.jpg` }
                                                component='img'
                                                sx={{ borderRadius: '5px' }}
                                            />
                                        </CardActionArea>
                                    </Link>
                                </NextLink>
                            </Grid>

                            <Grid item xs={ 6 } >
                                <Box display='flex' flexDirection='column'  >
                                    <Typography variant="body1" >{ "titulo" }</Typography>


                                    {/* condicional */}
                                </Box>
                            </Grid>

                            <Grid item xs={ 3 } display='flex' alignItems='center' flexDirection='column' >
                                {
                                    editable
                                    ?<ItemCounter/>
                                    :<Typography variant="h2" >3</Typography>
                                }
                                <Typography variant="subtitle1" >{ `$2.000.000` }</Typography>
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
            }
        </>

    )
}
