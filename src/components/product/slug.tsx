 import React from 'react';
import { ShopLayout } from '../layout';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
 

/* esto es para guardar el arreglo de los productos */
// const product = initialData.products[0];


export const slug = () => {
   return (
      <ShopLayout title={ 'product.title' } pageDescription={ 'product.description' }>
        
        <Grid container spacing={3}>

          <Grid item xs={ 12 } sm={ 7 }>
            {/* Slideshow */}
          </Grid>

          <Grid item xs={ 12 } sm={ 5 } >
            <Box>
              {/* titulos */}
              <Typography variant='h1' component='h1'> {/* product.title */} </Typography>
              <Typography variant='subtitle1' component='h2'> {/* product.price */} </Typography>

              <Box sx={{ my: 2 }}>

                <Typography variant='subtitle2' > Cantidad </Typography>

                {/* ItemCounter */}

              </Box>

              {/* Agregar al carrito */}
              <Button color='primary' className='circular-btn'>
                Agregar al carrito
              </Button>

              {/* <Chip label=' No hay disponible ' color='error' variant='outlined' /> */}

              {/* Description */}
              <Box sx={{ mt:3 }}>
                <Typography variant='subtitle2' > Descripción </Typography>
                <Typography variant='subtitle2' > {/* { product.descripion } */} </Typography>
              </Box>


            </Box>

          </Grid>

        </Grid>

      </ShopLayout>
    )
 }
 