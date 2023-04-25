import React, { FC, useMemo, useState } from 'react';
import NextLink from 'next/link'
import { Box, Button, Card, CardActionArea, CardMedia, Grid, Link, Skeleton, Typography } from '@mui/material';
import { IProduct } from '../../interfaces';


interface Props {
  product: IProduct;
  price: number | undefined;
  isLoading: boolean
}

export const ProductCard: FC<Props> = ({ product: {
  id, category, brand, name, description, img_url, stock, status
}, price, isLoading }) => {


  const [isHovered, setIsHovered] = useState(false)

  /* este Hook ayuda hacer hover a la imagen, cambiandola y haciendo un pequeño zoom  */
  // const productImage = useMemo(() => {
  //   return isHovered
  //     ? ` products/${products.images} `
  //     : ` products/${products.images} `


  // }, [isHovered, products.images])

  return (
    <>
      {status &&
        <Grid item
          xs={12}
          sm={3}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <Card>
            <NextLink href={`/product/${id}`} passHref prefetch={false} >
              <Link component="span">
                <CardActionArea>
                  <CardMedia
                    image={img_url}
                    component='img'
                    className='fadeIn'
                    alt={name} />
                </CardActionArea>
              </Link>
            </NextLink>
          </Card>

          <Box sx={{ mt: 1 }} className='fadeIn' >
            <Typography fontWeight={500} sx={{fontSize: "1rem"}}> {name} </Typography>
            {
              isLoading ? (<Skeleton variant="text" />) : (
                <Typography fontWeight={800} color={"primary"} sx={{ fontSize: '1.5rem', mt:'2px', mb:'10px' }} > {`$${price}`} </Typography>
              )
            }
            <Button sx={{margin: 'auto'}} fullWidth  color='primary' >Agregar al Carrito</Button>
          </Box>
        </Grid>
      }
    </>
  )
}
