import { Inter } from 'next/font/google'
import NextLink from 'next/link'
import { Link, Typography } from '@mui/material'
import { ShopLayout } from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ShopLayout title={'EcoShop'} pageDescription={'Bienvenido a nuestra tienda de electrónica, donde ofrecemos una amplia variedad de productos de tecnología de vanguardia, como teléfonos celulares, computadoras y accesorios. Encuentra todo lo que necesitas para estar conectado y actualizado con las últimas tendencias en tecnología. Ofrecemos productos de alta calidad a precios competitivos. ¡Visítanos ahora para explorar nuestra selección!'} imageFullUrl='https://drive.google.com/file/d/12oKDiIjtA29ongN-kQkjMcjC-DYLAq0a/view?usp=sharing'>
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
