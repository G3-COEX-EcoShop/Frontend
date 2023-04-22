import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Switch, TextField, TextareaAutosize, Typography, } from "@mui/material";

import { ICategory } from "@/interfaces";

interface CreateModalProps {
    data: ICategory | null;
    onClose: () => void;
    onSubmit: (values: ICategory) => void;
    open: boolean;
}

export const ModalCategory = ({
    open,
    data,
    onClose,
    onSubmit,
}: CreateModalProps) => {

    const handleSubmit = () => {
        //put your validation logic here
        // onSubmit(values);
        onClose();
    };
    console.log(data);


    return (
        <Dialog open={open}>
            <DialogTitle textAlign="center">Create New Account</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            paddingTop: "5px"
                        }}
                    >
                        <TextField
                            id="name"
                            label="Nombre"
                            value={data?.name}
                        />
                        <Typography marginTop={2}>Descripcion</Typography>
                        <TextareaAutosize name="Soft" placeholder="Descripcion de la categoria" minRows={5} value={data?.description} />

                        <Box display={"flex"} alignItems={"center"}>
                            <Typography>Estado </Typography>
                            <Typography>{data?.status} </Typography>
                            <Switch defaultChecked={data?.status} />

                        </Box>




                    </Stack>
                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem' }}>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="secondary" onClick={handleSubmit} variant="contained">
                    Create New Account
                </Button>
            </DialogActions>
        </Dialog>
    );
};