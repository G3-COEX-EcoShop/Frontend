import { CartList, OrderSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layout";
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material";
import NextLink from 'next/link';





export const OrderPage = () => {
  return (
    <ShopLayout title=" Resumen de la order 1234 " pageDescription=" Carrito de compras de la tienda ">
        <Typography variant="h1" component="h1"  >Orden: ABC123</Typography>
        
        {/* <Chip 
            sx={{ my: 2 }}
            label="Pendiente de pago"
            variant="outlined"
            color="error"
            icon={ <CreditCardOffOutlined/> }
        /> */}
        <Chip 
            sx={{ my: 2 }}
            label=" Orden ya fue pagada "
            variant="outlined"
            color="success"
            icon={ <CreditScoreOutlined /> }
        />
        
        <Grid container >
            <Grid item xs={ 12 } sm={ 7 }  >
                <CartList  />
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

                        <OrderSummary/>

                        <Box sx={{ mt: 3 }} >
                            {/* TODO */}
                            <h1>Pagar</h1>
                            <Chip 
                                sx={{ my: 2 }}
                                label=" Orden ya fue pagada "
                                variant="outlined"
                                color="success"
                                icon={ <CreditScoreOutlined /> }
                            />                            
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}


export default OrderPage;