import { ShopLayout } from "@/components/layout"
import { Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material"

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export const AddressPage = () => {
  return (
    <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino">

        

        <Grid container spacing={2} >
            <Grid item xs={12} sm={3} >
            <List component="nav" sx={{ mt:'50px' }} >
                <ListItem button component="li">
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary=" Datos personales" />
                </ListItem>
                <ListItem button component="li">
                    <ListItemIcon>
                        <MenuBookOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Mis pedidos" />
                </ListItem>
                <ListItem button component="li">
                    <ListItemIcon>
                        <LocationOnOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Mis direcciones" />
                </ListItem>
                <ListItem button component="li">
                    <ListItemIcon>
                        <MonetizationOnOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Mis metodos de pagos" />
                </ListItem>
            </List>
            </Grid>
            <Grid item xs={12} sm={9} >
                    <Typography variant="h1" > Mis direcciones </Typography>
                    <Grid container spacing={2} sx={{ mt:3 }} >
                    <Grid item xs={12} sm={4} >
                        <TextField label='Nombre' variant="filled" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField label='Apellido' variant="filled" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField label='Telefono Celular' variant="filled" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField label='Otro telefono' variant="filled" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField label='Tipo de identificación' variant="filled" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField label='Numero de identificación' variant="filled" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField label='Dirección' variant="filled" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField label='Detalles de la dirección' variant="filled" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField label='Departamento' variant="filled" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField label='Municipio o Localidad' variant="filled" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <TextField label='Barrio' variant="filled" fullWidth />
                    </Grid>
                </Grid>

                <Box sx={{ mt:5 }} display='flex' justifyContent='center' >
                    <Button color="primary" className="circular-btn" size="large" >
                        Guardar pedido
                    </Button>
                </Box>
            </Grid>
        </Grid>



    </ShopLayout>
  )
}

export default AddressPage;