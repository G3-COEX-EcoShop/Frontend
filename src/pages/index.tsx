import { Typography, Box, Button, Link } from '@mui/material';
import { ShopLayout } from '@/components/layout';
import Image from 'next/image'
import { ProductList } from '@/components/product';
import { GetStaticProps } from 'next';
import { ICategory, IProduct } from '@/interfaces';
import { FC } from 'react';
import { categoriesList } from '@/services/category';
import { productsList } from '@/services/product';
import { useProducts } from '@/hooks/useProduct';
import NextLink from 'next/link'

interface props {
  productsStatic: IProduct[],
  categories: ICategory[]
}
const Home: FC<props> = ({ productsStatic, categories }) => {
  const { products: productsDinamic, isLoading, setlist, isError } = useProducts('product/list');


  return (
    <ShopLayout title={'Tienda EcoShop'} pageDescription={'Bienvenido a nuestra tienda de electrónica, donde ofrecemos una amplia variedad de productos de tecnología de vanguardia'} imageFullUrl='https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQnX9lPLVoh3eL1WKMqg2-dZlDDsfO4H_JusGDbkNBFF7ugyWllUCV5wipPARdgpGLp8srtCotMFYWTlynZiHvVe0vA=w1920-h975'>
      <Box flexDirection={{ xs: 'column', sm: "row" }} display={'flex'} justifyContent={'space-around'}>
        {
          categories.length &&
          categories.map(({ id, name, description, img_url, status }) => {
            if (status) {
              return (
                <Link component={NextLink} key={id} href={`/category/${id}`}>
                  <Button size="small" variant="outlined" >
                    <Box flexDirection={'row'} justifyItems={'center'} alignItems={'center'} display={'flex'}>
                      <Image width={40} height={40} src={img_url} alt={`icon ${name}`}>

                      </Image>
                      <Typography variant='subtitle2' component={"span"}>{name}</Typography>
                    </Box>
                  </Button>
                </Link>
              )
            }
          })}

      </Box >
      <ProductList productsStatic={productsStatic} productsDinamic={productsDinamic} isLoading={isLoading} />


    </ShopLayout >
  )
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;

  let categories = await categoriesList();
  let products = await productsList();



  return {
    props: {
      productsStatic: products,
      categories: categories
    },
    revalidate: 28800 //cada 8 horas
  }
}


export default Home