import TableProducts from '@/components/dashboard/tables/TableProducts';
import TableUSer from '@/components/dashboard/tables/TableUser';
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { UseProducts } from '@/hooks/UseProducts';
import { UseUsers } from '@/hooks/UseUsers';
import { IProduct } from '@/interfaces';

function users() {
    const { data, isLoading, setlist, isError } = UseUsers('user/list');

    function handleClickRows(product: IProduct) {

    }

    return (
        <DashboardLayout>
            <TableUSer data={data}></TableUSer>
        </DashboardLayout>
    )
}

export default users