import React, { useMemo, useState } from 'react';
import MaterialReactTable, {
    type MRT_ColumnDef,
} from 'material-react-table';
import {
    Button,
    Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ModalUser } from '../modals/ModalUser';
import { IProduct } from '@/interfaces';


interface props {
    data: IProduct[]
}

const TableMaterial = ({ data }: props) => {
    const [ModalOpen, setModalOpen] = useState(false);


    const handleCreateNewRow = (values: IProduct) => {

    };


    const columns = useMemo<MRT_ColumnDef<IProduct>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: true,
                size: 0,
            }, {
                accessorKey: 'name',
                header: 'Nombre',
            }, {
                accessorKey: 'category',
                header: 'Categoria',
            },
            {
                accessorKey: 'brand',
                header: 'Marca',

            }, {
                accessorKey: 'price',
                header: 'Precio',

            }, {
                accessorKey: 'stock',
                header: 'Cantidad',
                size: 80,

            }, {
                accessorKey: 'status',
                header: 'Activado',
                Cell: ({ renderedCellValue, row }) => {
                    if (renderedCellValue) {
                        return <Chip label="SI" key={row.id} color='success'></Chip>
                    } else {
                        return <Chip label="NO" key={row.id} color='primary'></Chip>

                    }
                }
            },
        ],
        [],
    );

    return (
        <>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableColumnOrdering
                enableRowNumbers

                muiTableBodyRowProps={({ row }) => ({
                    onClick: (event) => {
                        console.info(row.original);
                        setModalOpen(true)
                    },
                    sx: {
                        cursor: 'pointer',
                    },
                })}
                renderTopToolbarCustomActions={() => (
                    <Button
                        color="primary"
                        onClick={() => setModalOpen(true)}
                        startIcon={<AddIcon />}
                        variant="outlined"

                    >
                        Nuevo
                    </Button>
                )}
                rowNumberMode="static"

            />
            <ModalUser
                columns={columns}
                open={ModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleCreateNewRow}
            />
        </>
    );
};




export default TableMaterial;
