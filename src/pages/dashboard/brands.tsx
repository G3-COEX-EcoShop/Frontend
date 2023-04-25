import TableBrands from '@/components/dashboard/tables/TableBrands';
import TableCategories from '@/components/dashboard/tables/TableCategories'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { UseBrands } from '@/hooks/UseBrands';
import { UseCategories } from '@/hooks/UseCategories';
import React from 'react'

function brands() {
    const { data, isLoading, isError } = UseBrands('brand/list');
    return (
        <DashboardLayout>
            <TableBrands data={data}></TableBrands>
        </DashboardLayout>
    )
}

export default brands