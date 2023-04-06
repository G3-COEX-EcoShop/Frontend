import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import React, { FC, useMemo, useState } from 'react';
import { IProducts } from '../../../interfaces';


interface Props {
    products: IProducts;
}

export const ProductCard: FC <Props>  = ({ products }) => {


  const [isHovered, setIsHovered] = useState(false)

  /* este Hook ayuda hacer hover a la imagen, cambiandola y haciendo un pequeño zoom  */
  const productImage = useMemo(() => {
    return isHovered
    ? ` products/${ products.images[1] } `
    : ` products/${ products.images[0] } `


  }, [isHovered, products.images])

  return (
    <Grid item 
          xs={6} 
          sm={4}
          onMouseEnter={ () => setIsHovered( true ) }
          onMouseLeave={ () => setIsHovered( false ) }
          >
    <Card>
      <CardActionArea>
        <CardMedia  
        image={ productImage } 
        component='img'
        className='fadeIn' 
        alt={ products.title } />
      </CardActionArea>
    </Card>

    <Box sx={{ mt: 1 }} className='fadeIn' >
      <Typography fontWeight={ 800 }> { products.title } </Typography>
      <Typography fontWeight={ 500 } > { `$${products.price}` } </Typography>
    </Box>
  </Grid>
  )
}
