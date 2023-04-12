import { Button, Stack } from '@mui/material';
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
const SocialBtns = () => {

    const googleHandler = async () => {
        // login || singup
    };

    const gihubHandler = async () => {
        // login || singup
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