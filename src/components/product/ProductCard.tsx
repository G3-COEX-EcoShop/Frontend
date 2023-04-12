import React, { FC, useMemo, useState } from 'react';
import NextLink from 'next/link'
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Skeleton, Typography } from '@mui/material';
import { IProduct } from '../../interfaces';


interface Props {
  product: IProduct;
  price: number | undefined;
  isLoading: boolean
}

export const ProductCard: FC<Props> = ({ product: {
  id, category, brand, name, description, urlImg, stock, state
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
      {state &&
        <Grid item
          xs={6}
          sm={4}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

<<<<<<< HEAD
    <Box sx={{ mt: 1 }} className='fadeIn' >
      <Typography fontWeight={ 800 }> { products.title } </Typography>
      <Typography fontWeight={ 500 } > { `$${products.price}` } </Typography>
    </Box>
  </Grid>
=======
          <Card>
            <NextLink href="/product/slug" passHref prefetch={false} >
              <Link component="span">
                <CardActionArea>
                  <CardMedia
                    image={urlImg}
                    component='img'
                    className='fadeIn'
                    alt={name} />
                </CardActionArea>
              </Link>
            </NextLink>
          </Card>

          <Box sx={{ mt: 1 }} className='fadeIn' >
            <Typography fontWeight={800}> {name} </Typography>
            {
              isLoading ? (<Skeleton variant="text" sx={{ fontSize: '0.25rem' }} />) : (
                <Typography fontWeight={500} > {`$${price}`} </Typography>
              )

            }
          </Box>
        </Grid>
      }
    </>
>>>>>>> 27740354e4726c4f0d61ecf8790818ec6297eb98
  )
}
