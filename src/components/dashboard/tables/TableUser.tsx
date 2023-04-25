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
import { ICategory, IProduct, IUser } from '@/interfaces';
import Image from 'next/image';
import { ModalCategory } from '../modals/ModalCategory';
import { RoleContext } from '@/context';


interface props {
    data: IUser[]
}

const TableUSer = ({ data }: props) => {
    const [ModalOpen, setModalOpen] = useState(false);
    const [currenCategory, setcurrenCategory] = useState<IUser | null>(null)
    const { rol } = React.useContext(RoleContext)

    const handleCreateNewRow = async (values: IUser, isNew: boolean) => {
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


    const columns = useMemo<MRT_ColumnDef<IUser>[]>(
        () => [
            {
                accessorKey: 'name',
                header: 'Nombre',
            },
            {
                accessorKey: 'email',
                header: 'imagen',
            },
            {
                accessorKey: 'rol',
                header: 'Rol',
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
                        if (rol.userPermission?.can_manager) {
                            setcurrenCategory(row.original)
                            setModalOpen(true)
                        }
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
            {/* <ModalCategory
                data={currenCategory}
                open={ModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleCreateNewRow}
            /> */}
        </>
    );
};




export default TableUSer;
