import { FC } from 'react';
import { Box, Button, Chip, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { ShopLayout } from '@/components/layout';
import { ItemCounter } from '@/components/ui';
import { GetStaticPaths, GetStaticProps } from 'next';
import { productsList, productsQuery } from '@/services/product';
import { IProduct } from '@/interfaces';
import { UseProduct } from '@/hooks/UseProduct';
import products from '@/pages/dashboard/products';
import Image from 'next/image'

interface Props {
  productStatic: IProduct
  path: string
  product: IProduct
}

const ProductPage: FC<Props> = ({ productStatic, path, product }) => {
  const { products: productsDinamic, isLoading, isError } = UseProduct(path);
  return (
    <ShopLayout title={'product.title'} pageDescription={'product.description'}>

      <Grid container spacing={3}>

        <Grid item xs={12} sm={7}>

          <Image
            width={500}
            height={500}
            src={`https://res.cloudinary.com/dztzw4jkb/image/upload/v1682120432/cld-sample-5.jpg`}
            alt={"arreglar aca"} 
          />

        </Grid>

        <Grid item xs={12} sm={5} >
          <Box>
            {/* titulos */}
            <Typography variant='h1' component='h1'> {"Titulo del producto"} </Typography>
            <Typography variant='subtitle1' component='h2'> {`$1.200.000`} </Typography>

            <Box sx={{ my: 2 }}>

              <Typography variant='subtitle2' > Cantidad </Typography>

              <ItemCounter />

            </Box>

            {/* Agregar al carrito */}
            <Button color='primary' className='circular-btn'>
              Agregar al carrito
            </Button>

            {/* <Chip label=' No hay disponible ' color='error' variant='outlined' /> */}

            {/* Description */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='h1' component='h1' color={'primary'} > Descripción </Typography>
              <Typography variant='body2' > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo porro culpa modi vitae esse molestias deserunt est qui possimus quia eius vel nostrum doloribus dolor aperiam laudantium hic facere error dolorum eligendi, aliquid facilis quisquam? Et, soluta. Id, architecto accusantium! Illum dicta suscipit nam quasi ut adipisci cumque aliquam veritatis! </Typography>
            </Box>

          </Box>

        </Grid>
        <Grid item xs={12} sm={6} >
          <Box>
            {/* titulos */}
            <Typography variant='h1' component='h1' color={'primary'} > {"Caracteristicas destacadas"} </Typography>

            <List component="nav">
              <ListItem  component="li">
                <ListItemText primary="Caracteristica 1" />
              </ListItem>
              <ListItem  component="li">
                <ListItemText primary="Caracteristica 2" />
              </ListItem>
              <ListItem  component="li">
                <ListItemText primary="Caracteristica 3" />
              </ListItem>
              <ListItem  component="li">
                <ListItemText primary="Caracteristica 3" />
              </ListItem>
              <ListItem  component="li">
                <ListItemText primary="Caracteristica 3" />
              </ListItem>
              <ListItem  component="li">
                <ListItemText primary="Caracteristica 3" />
              </ListItem>
            </List>

          </Box>

        </Grid>

        <Grid item xs={12} sm={6} >

        </Grid>


        <Grid item xs={12} sm={6} >
          <Box>
            {/* titulos */}
            <Typography variant='h1' component='h1' color={'primary'}> {"Descripcion del producto"} </Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat. Officia, quae maiores omnis vel enim rem reprehenderit temporibus magni quidem quia quibusdam nulla tempore ratione praesentium non harum accusamus adipisci eum? Nam eos, asperiores quod laudantium tenetur molestiae mollitia repellendus in deleniti. Praesentium libero modi facere adipisci ab dolorem quis laborum quisquam, harum perferendis cum eveniet voluptatum exercitationem atque similique impedit a, sapiente ducimus hic deleniti ipsa fuga, necessitatibus excepturi quos. Eveniet ullam fugit exercitationem assumenda iste doloremque ex, id quod tenetur error. Ullam enim expedita minima, rem praesentium accusamus doloremque, voluptatibus inventore ex est quos adipisci labore quod!</Typography>

          </Box>

        </Grid>

        <Grid item xs={0} sm={6} >

        </Grid>

        
        <Grid item xs={12} sm={6} >
          <Box>
            {/* titulos */}
            <Typography variant='h1' component='h1' color={'primary'} > {"Reseñas del producto"} </Typography>

          </Box>

        </Grid>

        <Grid item xs={12} sm={6} >

        </Grid>


      </Grid>

      {/* aqui ira las reseñas del publico  */}
      
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6} >
          
          <Box border={1} borderColor="primary" p={2} borderRadius={5} marginTop={2}>
            <Typography variant='body1' color={'primary'}>Andres Diaz</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque!</Typography>
          </Box>
          <Box border={1} borderColor="primary" p={2} borderRadius={5} marginTop={2}>
            <Typography variant='body1' color={'primary'}>Andres Diaz</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque!</Typography>
          </Box>
          <Box border={1} borderColor="primary" p={2} borderRadius={5} marginTop={2}>
            <Typography variant='body1' color={'primary'}>Andres Diaz</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque!</Typography>
          </Box>
          
        </Grid>

      </Grid>

      {/* <pre>
          {JSON.stringify(productStatic, null, 2)}
      </pre> */}

    </ShopLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const products = await productsList();

  return {
    paths: products.map((product: IProduct) => {
      return {
        params: {
          slug: product.id + "",
          id: product.id + "",
          img_url: product.img_url,
          name: product.name,
          description: product.description,
          status: product.status + ""
        }
      }
    }
    ),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { state, slug = "", id } = params as any
  const product = await productsQuery(slug);

  if (!product.data || state == "0") {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      productStatic: product.data as IProduct,
      path: product.path as String,
      product: params
    },
    revalidate: 28800
  }
}


export default ProductPage;