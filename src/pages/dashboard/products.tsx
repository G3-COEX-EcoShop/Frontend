import TableProducts from '@/components/dashboard/tables/TableProducts';
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { UseProducts } from '@/hooks/UseProducts';
import { IProduct } from '@/interfaces';

function products() {
    const { products, isLoading, setlist, isError } = UseProducts('product/list');

    function handleClickRows(product: IProduct) {


    }

    return (
        <DashboardLayout>
            <TableProducts data={products}></TableProducts>
        </DashboardLayout>
    )
}

export default products