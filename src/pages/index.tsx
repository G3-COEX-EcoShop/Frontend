import NextLink from 'next/link'
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { ShopLayout } from '@/components/layout'
import ListItem from '@mui/material/ListItem';
import { ProductList } from '@/components/product';
import { initialData } from '../../database/products';
import { IProduct } from '../../interfaces';

export default function Home() {
  return (
    <ShopLayout title={'Tienda EcoShop'} pageDescription={'Bienvenido a nuestra tienda de electrónica, donde ofrecemos una amplia variedad de productos de tecnología de vanguardia'} imageFullUrl='https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQnX9lPLVoh3eL1WKMqg2-dZlDDsfO4H_JusGDbkNBFF7ugyWllUCV5wipPARdgpGLp8srtCotMFYWTlynZiHvVe0vA=w1920-h975'>
      {/*       <Typography variant='h1' component="h1">Tienda</Typography>
      <Typography variant='h2' component="h2" sx={{ mb: 1 }} > EcoShop</Typography>

      <Link href={`/`} component={NextLink}>
        <Typography>Web</Typography>
      </Link>

      <Link href={`/dashboard`} component={NextLink}>
        <Typography>Dashboard</Typography>
      </Link>


      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="wrap"

      >
        {
          products.map((item) => (
            <Grid item xs={6} sm={4} key={item.text}>
              <Card>
                <CardActionArea>
                  <CardMedia title={item.text} image="" component='img' alt="product" />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid> */}

      <Typography variant='h1' component={'h1'}>Tienda</Typography>
      <Typography variant='h2' component={'h2'}>Todos los productos</Typography>

      {/* 
      <Grid container spacing={ 4 }>

        {
          initialData.products.map( product => (
            <Grid item xs={ 6 } sm={ 4 } key={ product.images } >
              <Card>
                <CardActionArea>
                  <CardMedia image={ `products/${ product.images }` } component='img' alt="product" />
                </CardActionArea>
              </Card>
            </Grid>
          ) )
        }    

      </Grid> */}


      {/* en products falta terminarlo, el products es para filtrar las catetgorias que escojan los usuarios */}
      <ProductList products={[initialData.products as any]}
      />

    </ShopLayout>
  )
}