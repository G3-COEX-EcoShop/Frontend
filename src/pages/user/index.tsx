import { BasicoLayout } from '@/components/layout/BasicoLayout'
import { Avatar, Button, TextField } from "@mui/material";
import { useState } from "react";

const User = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        avatarUrl: "https://i.pravatar.cc/150?img=3",
    });

    const handleNameChange = (e: any) => {
        setUser({ ...user, name: e.target.value });
    };

    const handleEmailChange = (e: any) => {
        setUser({ ...user, email: e.target.value });
    };
    return (
        <BasicoLayout >

            <div>
                <Avatar src={user.avatarUrl} />
                <TextField
                    label="Name"
                    value={user.name}
                    onChange={handleNameChange}
                />
                <TextField
                    label="Email"
                    value={user.email}
                    onChange={handleEmailChange}
                />
                <Button variant="contained" color="primary">
                    Save
                </Button>
            </div>
        </BasicoLayout>
    )
}

export default User