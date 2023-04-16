import TableMaterial from '@/components/dashboard/tables/TableMaterial';
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { UseProducts } from '@/hooks/UseProducts';
import { IProduct } from '@/interfaces';

function products() {
    const { products, isLoading, setlist, isError } = UseProducts('product/list');

    function handleClickRows(product: IProduct) {


    }

    return (
        <DashboardLayout>
            <TableMaterial data={products}></TableMaterial>
        </DashboardLayout>
    )
}

export default products