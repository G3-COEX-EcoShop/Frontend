import { FC } from 'react';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
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
            src={productStatic.img_url}
            alt={productStatic.name} />
        </Grid>

        <Grid item xs={12} sm={5} >
          <Box>
            {/* titulos */}
            <Typography variant='h1' component='h1'> {productStatic.name} </Typography>
            <Typography variant='subtitle1' component='h2'> {`$${productStatic.price}`} </Typography>

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
              <Typography variant='subtitle2' > Descripción </Typography>
              <Typography variant='body2' > {productStatic.description} </Typography>
            </Box>

          </Box>

        </Grid>
        <pre>
          {JSON.stringify(productStatic, null, 2)}
        </pre>

      </Grid>

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