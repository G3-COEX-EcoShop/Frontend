import { Inter } from 'next/font/google'
import NextLink from 'next/link'
import { Link, Typography } from '@mui/material'
import { ShopLayout } from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ShopLayout title={'Tienda EcoShop'} pageDescription={'Bienvenido a nuestra tienda de electrónica, donde ofrecemos una amplia variedad de productos de tecnología de vanguardia'} imageFullUrl='https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQnX9lPLVoh3eL1WKMqg2-dZlDDsfO4H_JusGDbkNBFF7ugyWllUCV5wipPARdgpGLp8srtCotMFYWTlynZiHvVe0vA=w1920-h975'>
        <>
          <Typography variant='h1' component="h1">Tienda</Typography>
          <Typography variant='h2' component="h2" sx={{ mb: 1 }} > EcoShop</Typography>

          <Link href={`/`} component={NextLink}>
            <Typography>Web</Typography>
          </Link>

          <Link href={`/dashboard`} component={NextLink}>
            <Typography>Dashboard</Typography>
          </Link>
        </>

      </ShopLayout>
    </>
  )
}
