
import * as layout from '@/components/layout';
import { Box, Button, TextField, Typography } from '@mui/material';
import Container from '@mui/material/Container';


export default function MyApp() {
  return (
    <layout.ShopLayout title={'Tienda EcoShop'} pageDescription={'Bienvenido a nuestra tienda de electrónica, donde ofrecemos una amplia variedad de productos de tecnología de vanguardia'} imageFullUrl='https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQnX9lPLVoh3eL1WKMqg2-dZlDDsfO4H_JusGDbkNBFF7ugyWllUCV5wipPARdgpGLp8srtCotMFYWTlynZiHvVe0vA=w1920-h975'>

<Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Cambiar contraseña
        </Typography>
        <Box mt={2}>
          <TextField
            id="oldPassword"
            label="Contraseña actual"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
          />
        </Box>
        <Box mt={2}>
          <TextField
            id="newPassword"
            label="Nueva contraseña"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
          />
        </Box>
        <Box mt={2}>
          <TextField
            id="confirmPassword"
            label="Confirmar contraseña"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
          />
        </Box>
        <Box mt={4}>
          <Button variant="contained" color="primary">
            Cambiar contraseña
          </Button>
        </Box>
      </Box>
    </Container>

    </layout.ShopLayout >
  );
}
