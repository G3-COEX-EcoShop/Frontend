import { ShopLayout } from "@/components/layout"
import { Box, Button, Grid, TextField, Typography } from "@mui/material"




export const AddressPage = () => {
    return (
        <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino">

            <Typography variant="h1" > Dirección </Typography>

            <Grid container spacing={2} sx={{ mt: 3 }} >
                <Grid item xs={12} sm={4} >
                    <TextField label='Nombre' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <TextField label='Apellido' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <TextField label='Telefono Celular' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <TextField label='Otro telefono' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <TextField label='Tipo de identificación' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <TextField label='Numero de identificación' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <TextField label='Dirección' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <TextField label='Detalles de la dirección' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <TextField label='Departamento' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <TextField label='Municipio o Localidad' fullWidth />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <TextField label='Barrio' fullWidth />
                </Grid>
            </Grid>

            <Box sx={{ mt: 5 }} display='flex' justifyContent='center' >
                <Button color="primary" className="circular-btn" size="large" >
                    Guardar pedido
                </Button>
            </Box>

        </ShopLayout>
    )
}

export default AddressPage;