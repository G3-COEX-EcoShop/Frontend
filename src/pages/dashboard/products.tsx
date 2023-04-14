import TableMaterial from '@/components/dashboard/tables/TableMaterial';
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { useProducts } from '@/hooks/useProduct';
import { IProduct } from '@/interfaces';
import React from 'react'

function products() {
    const { products, isLoading, setlist, isError } = useProducts('product/list');

    function handleClickRows(product: IProduct) {


    }

    return (
        <DashboardLayout>
            <TableMaterial data={products}></TableMaterial>
        </DashboardLayout>
    )
}

export default products