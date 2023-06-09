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
import { headerAuth } from '@/utils/utils';
import { crud } from '@/interfaces/utils';


interface props {
    data: IUser[]
}

const TableUSer = ({ data }: props) => {
    const [ModalOpen, setModalOpen] = useState(false);
    const [current, setCurrent] = useState<IUser | null>(null)
    const { rol } = React.useContext(RoleContext)

    const handleCreateNewRow = async (values: IUser, type: crud) => {
        const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
        const requestOptions = {
            headers: headerAuth(),
            body: JSON.stringify(values),
        };
        switch (type) {
            case "create":
                try {
                    const data = await fetch(`${urlbase}user/add`, { ...requestOptions, method: "POST" });
                    if (data.ok) {
                        alert("usuario creado")

                    } else {
                        alert("ocurrio un problema")
                    }

                } catch (error) {
                    console.log(error);

                }
                break;
            case "update":
                try {
                    const data = await fetch(`${urlbase}user/update`,
                        { ...requestOptions, method: "PUT" });
                    if (data.ok) {
                        alert("usuario acualizado")
                    } else {
                        alert("ocurrio un problema")
                    }
                } catch (error) {
                    console.log(error);

                }
                break;
            case "delete":

                try {
                    const data = await fetch(`${urlbase}user/remove?id=${values.id}`,
                        { ...requestOptions, method: "DELETE" });
                    if (data.ok) {
                        alert("usuario eliminado")
                    } else {
                        alert("ocurrio un problema")
                    }
                } catch (error) {
                    console.log(error);

                }
                break;

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
                            setCurrent(row.original)
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
                            setCurrent(null)
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
            <ModalUser
                data={current}
                open={ModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleCreateNewRow}
            />
        </>
    );
};




export default TableUSer;
