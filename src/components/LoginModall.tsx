import * as React from 'react';
import { Modal, Box, Button } from '@mui/material';
import { GOOGLE_CLIENT_ID, HOST_API} from "@/config_global";
import { api, endpoints } from '@/utils/axios';
import { path } from '@/utils/path';
import { PATH_SHORT_URL } from '@/api/path';






interface Props {
    open: boolean;
    handleClose: () => void;
}

const ImageBackgroundLoginModal: React.FC<Props> = ({ open, handleClose }) => {
    // Dimensiones del popup
    const width = 500;
    const height = 600;

 

    // Función para manejar el inicio de sesión con Google
    const handleGoogleSignIn = async() => {

        // try{
        //     const response = await  api.get(PATH_SHORT_URL.authGoogle())

        // }catch(ex){
        //     console.log(ex);
        // }
        // URL de autorización de Google
        const authUrl = HOST_API+PATH_SHORT_URL.authwithgooleserver();
        
        
        // Redirige al usuario a la URL de autorización de Google en la misma ventana
        window.location.href = authUrl;
       
    };


    return (
        <Modal open={open} onClose={handleClose}>
            <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 w-96 bg-cover bg-center border-2  shadow-lg rounded-md" style={{ backgroundImage: 'url("your-background-image-url")' }}>

                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: '25px', // Rounded button
                        width: '100%', // Full width
                        color: '#030031', // Text color
                        background: '#ffffff', // Background color
                        '&:hover': {
                            backgroundColor: '#f2f2f2', // Background color on hover
                        },
                    }}
                    startIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" /><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" /><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" /><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" /></svg>
                    }
                    className="w-full"
                    onClick={() => handleGoogleSignIn()}
                >
                    Iniciar sesión con Google
                </Button>
            </Box>
        </Modal>
    );
};

export default ImageBackgroundLoginModal;
