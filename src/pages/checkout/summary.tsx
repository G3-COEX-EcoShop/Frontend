// import { CartList, OrderSummary } from "@/components/cart";
import { CartList } from "@/components/cart";
import { ShopLayout } from "@/components/layout";
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material";
import NextLink from 'next/link';





export const SummaryPage = () => {
  return (
    <ShopLayout title=" resumen de order " pageDescription=" Carrito de compras de la tienda ">
        <Typography variant="h1" component="h1"  >Resumen de la Orden</Typography>
        <Grid container >
            <Grid item xs={ 12 } sm={ 7 }  >
                {/* <CartList  /> */}
                <CartList />
            </Grid>

            <Grid item xs={ 12 } sm={ 5 } >
                <Card className="summary-card" >
                    <CardContent>
                        <Typography variant="h2" >Resumen (1 producto)</Typography>
                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='end' >
                            <NextLink href='/checkout/address' passHref >
                            <Link underline="always" >
                                Editar
                            </Link>
                            </NextLink>
                        </Box>

                        <Typography variant="subtitle1" >Dirección de entrega</Typography>

                        <Typography>Andrés Díaz</Typography>
                        <Typography>323 Algun lugar</Typography>
                        <Typography>Bucaramanga, Santander</Typography>
                        <Typography>3166785094</Typography>

                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='end' >
                            <NextLink href='/cart' passHref >
                            <Link underline="always" >
                                Editar
                            </Link>
                            </NextLink>
                        </Box>

                        {/* <OrderSummary/> */}

                        <Box sx={{ mt: 3 }} >
                            <Button color="primary" className="circular-btn" fullWidth >
                                Confirmar orden
                            </Button>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}


export default SummaryPage;