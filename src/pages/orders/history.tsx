import { ShopLayout } from "@/components/layout"
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import NextLink from 'next/link';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
    {
        field: 'paid',
        headerName: 'pagada',
        description: 'Muestra  informacion si esta pagada o no',
        width: 200,
        renderCell: ( params: GridValueGetterParams ) => {
            return (
                params.row.paid
                ? <Chip color="success" label="Pagada" variant="outlined"></Chip>
                : <Chip color="error" label="No Pagada" variant="outlined"></Chip>
            )
        }
    },
    {
        field: 'orden',
        headerName: 'Ver orden',
        description: 'Muestra  informacion si esta pagada o no',
        width: 200,
        sortable: false,
        renderCell: ( params: GridValueGetterParams ) => {
            return (
                <NextLink href={`/orders/${ params.row.id }`} passHref >
                    <Link underline="always" >
                        Ver orden
                    </Link>
                </NextLink>
            )
        }
    }    
    
]
const rows = [
    { id: 1, paid: true, fullname: 'Andrés Díaz' },
    { id: 2, paid: false, fullname: 'Juliana Díaz' },
    { id: 3, paid: true, fullname: 'Andrea Díaz' },
    { id: 4, paid: false, fullname: 'Felipe Díaz' },
    { id: 5, paid: false, fullname: 'Nancy Díaz' },
    { id: 6, paid: true, fullname: 'Liliana Díaz' },
]


export const HistoryPage = () => {
  return (
    <ShopLayout title={"Historial de ordenes"} pageDescription={"Historial de ordenes del cliente"}>
        <Typography variant="h1" component="h1">Historial de ordenes</Typography>
        <Grid container>
            <Grid item xs={12} sx={{ height:650, width:'100%' }} >
                <DataGrid 
                    rows={ rows }
                    columns={ columns }
                    pageSize={ 10 }
                    rowsPerPageOptions={ [10] }
                />
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage;