import { Button, Stack } from '@mui/material';
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRouter } from "next/router";

const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
const SocialBtns = () => {
    const router = useRouter();

    const googleHandler = () => {

    };

    const gihubHandler = async () => {
        try {
            window.location.href = `${urlbase}auth/github`
        } catch (error) {
            console.log(error);

        }
    };


    return (
        <Stack
            direction="row"

        >
            <Button
                variant="outlined"
                color="primary"
                startIcon={<GoogleIcon />}
                onClick={googleHandler}
            >
                {'Google'}
            </Button>
            <Button
                variant="outlined"
                color="primary"
                startIcon={<GitHubIcon />}
                onClick={gihubHandler}
            >
                {'Github'}
            </Button>

        </Stack>
    )
}

export default SocialBtns