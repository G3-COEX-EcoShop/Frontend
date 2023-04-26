import React, { useContext, useMemo, useState } from 'react';
import MaterialReactTable, {
    type MRT_ColumnDef,
} from 'material-react-table';
import {
    Button,
    Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ICategory } from '@/interfaces';
import Image, { ImageLoader } from 'next/image';
import { ModalCategory } from '../modals/ModalCategory';
import { RoleContext } from '@/context';
import { headerAuth } from '@/utils/utils';
import { crud } from '@/interfaces/utils';


interface props {
    data: ICategory[]
}

const TableCategories = ({ data }: props) => {
    const [ModalOpen, setModalOpen] = useState(false);
    const [currenCategory, setcurrenCategory] = useState<ICategory | null>(null)
    const { rol } = useContext(RoleContext)

    const handleCreateNewRow = async (values: ICategory, type: crud) => {
        const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
        console.log({ values });

        const requestOptions = {
            headers: headerAuth(),
            body: JSON.stringify(values),
        };
        switch (type) {
            case "create":
                try {
                    const data = await fetch(`${urlbase}category/add`, { ...requestOptions, method: "POST" });
                    if (data.ok) {
                        alert("categoria creada")
                    } else {
                        alert("ocurrio un problema")
                    }
                } catch (error) {
                    console.log(error);
                }
                break;
            case "update":
                try {
                    const data = await fetch(`${urlbase}category/update`,
                        { ...requestOptions, method: "PUT" });
                    if (data.ok) {
                        alert("categoria actualizada")
                    } else {
                        alert("ocurrio un problema")
                    }
                } catch (error) {
                    console.log(error);

                }
                break;
            case "delete":

                try {
                    const data = await fetch(`${urlbase}category/remove?id=${values.id}`,
                        { ...requestOptions, method: "DELETE" });
                    if (data.ok) {
                        alert("categoria eliminada")
                    } else {
                        alert("ocurrio un problema")
                    }
                } catch (error) {
                    console.log(error);

                }
                break;

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
                        if (rol.categoryPermission?.can_manager) {
                            setcurrenCategory(row.original)
                            setModalOpen(true)
                        }
                    },
                    sx: {
                        cursor: 'pointer',
                    },
                })}

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
