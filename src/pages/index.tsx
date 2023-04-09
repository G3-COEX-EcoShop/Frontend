import { Typography, Box, Button } from '@mui/material';
import { ShopLayout } from '@/components/layout';
import Image from 'next/image'
import { ProductList } from '@/components/product';
import { useProducts } from '@/hooks/useProduct';
import { FullScreenLoading } from '@/components/ui/FullScreenLoading';
export default function Home() {

  const { products, isLoading, setlist, isError } = useProducts('product/list');

  function handleCategory(type: string): void {

  }

  return (
    <ShopLayout title={'Tienda EcoShop'} pageDescription={'Bienvenido a nuestra tienda de electrónica, donde ofrecemos una amplia variedad de productos de tecnología de vanguardia'} imageFullUrl='https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQnX9lPLVoh3eL1WKMqg2-dZlDDsfO4H_JusGDbkNBFF7ugyWllUCV5wipPARdgpGLp8srtCotMFYWTlynZiHvVe0vA=w1920-h975'>

      <Box flexDirection={{ xs: 'column', sm: "row" }} display={'flex'} justifyContent={'space-around'}>
        <Button size="small" variant="outlined">
          <Box flexDirection={'row'} onClick={(e) => { handleCategory("") }} justifyItems={'center'} alignItems={'center'} display={'flex'}>
            <Image width={40} height={40} src={"https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119784/EcoShop/Televisor/TV_CHALLENGER_65_PULGADAS_UHD_LED_Plano_SmartTV_tmu2jc.jpg"} alt="icono televisores">

            </Image>
            <Typography variant='subtitle2' component={"span"}>Televisores</Typography>
          </Box>
        </Button>
        <Button>
          <Box flexDirection={'row'} onClick={(e) => { handleCategory("") }} justifyItems={'center'} alignItems={'center'} display={'flex'}>
            <Image width={40} height={40} src={"https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119784/EcoShop/Televisor/TV_CHALLENGER_65_PULGADAS_UHD_LED_Plano_SmartTV_tmu2jc.jpg"} alt="icono televisores">

            </Image>
            <Typography variant='subtitle2' component={"span"}>Televisores</Typography>
          </Box>
        </Button>

      </Box>
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  )
}