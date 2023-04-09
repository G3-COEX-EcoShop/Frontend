import { Typography, Box, Button } from '@mui/material';
import { ShopLayout } from '@/components/layout';
import Image from 'next/image'
import { ProductList } from '@/components/product';
import { useProducts } from '@/hooks/useProduct';
import { FullScreenLoading } from '@/components/ui/FullScreenLoading';
import { GetStaticProps } from 'next';
import { ICategory, IProduct } from '@/interfaces';
import { FC } from 'react';

interface props {
  productsStatic: IProduct[],
  categories: ICategory[]
}
const Home: FC<props> = ({ productsStatic, categories }) => {

  const { products: productsDinamic, isLoading, setlist, isError } = useProducts('product/list');
  function handleCategory(type: string): void {

  }

  return (
    <ShopLayout title={'Tienda EcoShop'} pageDescription={'Bienvenido a nuestra tienda de electrónica, donde ofrecemos una amplia variedad de productos de tecnología de vanguardia'} imageFullUrl='https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQnX9lPLVoh3eL1WKMqg2-dZlDDsfO4H_JusGDbkNBFF7ugyWllUCV5wipPARdgpGLp8srtCotMFYWTlynZiHvVe0vA=w1920-h975'>

      <Box flexDirection={{ xs: 'column', sm: "row" }} display={'flex'} justifyContent={'space-around'}>
        {
          categories.length &&
          categories.map(({ id, name, description, img_url, state }) => {
            if (state) {
              return (
                <Button size="small" variant="outlined" key={id}>
                  <Box flexDirection={'row'} onClick={(e) => { handleCategory("") }} justifyItems={'center'} alignItems={'center'} display={'flex'}>
                    <Image width={40} height={40} src={img_url} alt={`icon ${name}`}>

                    </Image>
                    <Typography variant='subtitle2' component={"span"}>{name}</Typography>
                  </Box>
                </Button>
              )
            }
          })}

      </Box>
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList productsStatic={productsStatic} productsDinamic={productsDinamic} />
      }

    </ShopLayout>
  )
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;

  let categories = [] as ICategory[]
  let products = [] as IProduct[]

  try {
    const dataProducts = await fetch(`${urlbase}product/list`);
    if (dataProducts) products = await dataProducts.json()
    const dataCategories = await fetch(`${urlbase}category/list`);
    if (dataCategories) categories = await dataCategories.json()

  } catch (error) {
    console.log(error);

  }

  return {
    props: {
      productsStatic: products,
      categories: categories
    },
    revalidate: 28800
  }
}


export default Home