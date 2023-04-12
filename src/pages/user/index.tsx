import { BasicoLayout } from '@/components/layout/BasicoLayout'
import { Avatar, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import NextLink from 'next/link'
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

                <Link href={"/dashboard"} component={NextLink} >
                    <Button variant="text" color="primary"  >
                        <Typography >dashboard</Typography>
                    </Button>
                </Link>
            </div>
        </BasicoLayout>
    )
}

export default User