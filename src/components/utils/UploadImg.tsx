import { Box, Button, Skeleton } from "@mui/material";
import { ChangeEvent, useState } from "react";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Image from 'next/image'
interface props {
    imgInit: string | undefined;
    setUrl: (url: string,) => void;
    seterror: (err: string,) => void;
}

const UploadImg = ({ setUrl, seterror, imgInit }: props) => {
    const [imageAlt, setimageAlt] = useState("");
    const [img, setimg] = useState(imgInit);
    const [loading, setloading] = useState(false);

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        setloading(true);
        const files = e.target.files;
        if (!files) return;
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "echo_shop");
        const options = {
            method: "POST",
            body: formData,
        };

        return fetch(
            "https://api.Cloudinary.com/v1_1/dlrdlubmf/image/upload",
            options
        )
            .then((res) => res.json())
            .then((res) => {
                setUrl(res.secure_url);
                setimg(res.secure_url)
                setimageAlt(`An image of ${res.original_filename}`);
            })
            .catch((err) => {
                console.log(err)
                seterror(err)
            })
            .finally(() => {
                setloading(false);
            });
    };

    return (
        <Box flexDirection="column">
            <section className="right-side">
                {
                    img ? (
                        <Image src={img} alt={imageAlt} width={120} height={120} style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }} />
                    ) : (
                        <Skeleton variant="rectangular" width={120} height={120} />
                    )
                }

            </section>
            <input
                accept="image/*"
                id="uploadIMG"
                hidden
                type="file"

                onChange={handleImageUpload}
            />
            <label htmlFor="uploadIMG">
                <Button variant="outlined" component="span" startIcon={<FileUploadIcon />}
                    sx={{ width: 120, height: 35 }}>
                    Upload
                </Button>
            </label>

        </Box>
    );
};

export default UploadImg;
