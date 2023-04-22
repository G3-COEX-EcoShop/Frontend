import TableCategories from '@/components/dashboard/tables/TableCategories'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { UseCategories } from '@/hooks/UseCategories';
import React from 'react'

function categories() {
    const { products, isLoading, isError } = UseCategories('category/list');
    return (
        <DashboardLayout>
            <TableCategories data={products}></TableCategories>
        </DashboardLayout>
    )
}

export default categories