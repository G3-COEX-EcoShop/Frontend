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
import { ICategory, IProduct } from '@/interfaces';
import Image from 'next/image';
import { ModalCategory } from '../modals/ModalCategory';


interface props {
    data: ICategory[]
}

const TableCategories = ({ data }: props) => {
    const [ModalOpen, setModalOpen] = useState(false);
    const [currenCategory, setcurrenCategory] = useState<ICategory | null>(null)


    const handleCreateNewRow = async (values: ICategory, isNew: boolean) => {
        const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        };
        if (isNew) {
            try {
                const category = await fetch(`${urlbase}category/add`, requestOptions);
                if (category) {
                    alert("nueva Categoria agregada")
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const category = await fetch(`${urlbase}category/update`, requestOptions);
                if (category) {
                    alert("Categoria editada")
                }
            } catch (error) {
                console.log(error);

            }

        }
    };


    const columns = useMemo<MRT_ColumnDef<ICategory>[]>(
        () => [
            {
                accessorKey: 'name',
                header: 'Nombre',
            },
            {
                accessorKey: 'img_url',
                header: 'imagen',
                Cell: ({ renderedCellValue, row }) => {
                    if (renderedCellValue) {
                        return <Image
                            key={row.id}
                            width={100}
                            height={100}
                            src={renderedCellValue as string}
                            alt="imagen de categoria"
                        />
                    }

                }
            },
            {
                accessorKey: 'description',
                header: 'Descripcion',
            },
            {
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
                        setcurrenCategory(row.original)
                        setModalOpen(true)
                    },
                    sx: {
                        cursor: 'pointer',
                    },
                })}
                renderTopToolbarCustomActions={() => (
                    <Button
                        color="primary"
                        onClick={() => {
                            setcurrenCategory(null)
                            setModalOpen(true)
                        }}
                        startIcon={<AddIcon />}
                        variant="outlined"

                    >
                        Nuevo
                    </Button>
                )}
                rowNumberMode="static"

            />
            <ModalCategory
                data={currenCategory}
                open={ModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleCreateNewRow}
            />
        </>
    );
};




export default TableCategories;
