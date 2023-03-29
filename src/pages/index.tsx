import NextLink from 'next/link'
import { Link, Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material'
import { ShopLayout } from '@/components/layout'
import ListItem from '@mui/material/ListItem';

const products = [
  {
    text: "1"
  }, {
    text: "2"
  }, {
    text: "3"
  }, {
    text: "4"
  }, {
    text: "5"
  }, {
    text: "6"
  },
]

export default function Home() {
  return (
    <ShopLayout title={'Tienda EcoShop'} pageDescription={'Bienvenido a nuestra tienda de electrónica, donde ofrecemos una amplia variedad de productos de tecnología de vanguardia'} imageFullUrl='https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQnX9lPLVoh3eL1WKMqg2-dZlDDsfO4H_JusGDbkNBFF7ugyWllUCV5wipPARdgpGLp8srtCotMFYWTlynZiHvVe0vA=w1920-h975'>
      <Typography variant='h1' component="h1">Tienda</Typography>
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
      </Grid>

    </ShopLayout>
  )
}
