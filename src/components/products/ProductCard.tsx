import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';
import React, { FC } from 'react';
import { IProducts } from '../../../interfaces';


interface Props {
    products: IProducts;
}

export const ProductCard: FC <Props>  = ({ products }) => {
  return (
    <Grid item xs={6} sm={4} key={products.title}>
    <Card>
      <CardActionArea>
        <CardMedia title={products.title} image="" component='img' alt="product" />
      </CardActionArea>
    </Card>
  </Grid>
  )
}
