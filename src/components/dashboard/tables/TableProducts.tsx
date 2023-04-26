import React, { useMemo, useState } from 'react';
import MaterialReactTable, {
    type MRT_ColumnDef,
} from 'material-react-table';
import {
    Button,
    Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ModalUser } from '../modals/ModalUserAuto';
import { IProduct } from '@/interfaces';
import { RoleContext } from '@/context';
import { ModalProduct } from '../modals/ModalProduct';
import { crud } from '@/interfaces/utils';
import { headerAuth } from '@/utils/utils';


interface props {
    data: IProduct[]
}

const TableProducts = ({ data }: props) => {
    const [ModalOpen, setModalOpen] = useState(false);
    const { rol } = React.useContext(RoleContext)
    const [current, setCurrent] = useState<IProduct | null>(null)


    const handleCreateNewRow = async (values: IProduct, type: crud) => {
        const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
        console.log({ values });

        const requestOptions = {
            headers: headerAuth(),
            body: JSON.stringify(values),
        };

        switch (type) {
            case "create":
                try {
                    const data = await fetch(`${urlbase}product/add`, { ...requestOptions, method: "POST" });
                    if (data.ok) {
                        alert("producto creado")
                    } else {
                        alert("ocurrio un problema")
                    }
                } catch (error) {
                    console.log(error);
                }
                break;
            case "update":
                try {
                    const data = await fetch(`${urlbase}product/update`,
                        { ...requestOptions, method: "PUT" });
                    if (data.ok) {
                        alert("producto actualizado")
                    } else {
                        alert("ocurrio un problema")
                    }
                } catch (error) {
                    console.log(error);

                }
                break;
            case "delete":

                try {
                    const data = await fetch(`${urlbase}product/remove?id=${values.id}`,
                        { ...requestOptions, method: "DELETE" });
                    if (data.ok) {
                        alert("producto eliminado")
                    } else {
                        alert("ocurrio un problema")
                    }
                } catch (error) {
                    console.log(error);

                }
                break;

        }

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
                        if (rol.productPermission?.can_manager) {
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
            <ModalProduct
                data={current}
                open={ModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleCreateNewRow}

            />
        </>
    );
};




export default TableProducts;
