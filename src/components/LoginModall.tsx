import * as React from 'react';
import { Modal, Box, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';






interface Props {
    open: boolean;
    handleClose: () => void;
}

const ImageBackgroundLoginModal: React.FC<Props> = ({ open, handleClose }) => {
    // Dimensiones del popup
    const width = 500;
    const height = 600;

    // Calcula las coordenadas para centrar el popup en la pantalla
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;


    // Función para manejar el inicio de sesión con Google
    const handleGoogleSignIn = () => {
        // URL de autorización de Google
        const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=276581705346-vjimpko04q6qh7e1l0gcsb435prgh0ek.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=token&scope=email%20profile`;

        // Abre una nueva ventana para la autenticación de Google
        // const popup = window.open(authUrl, '_blank', 'width=500,height=600');
        const popup = window.open(authUrl, '_blank', `width=${width},height=${height},left=${left},top=${top}`);


        // Verifica si la ventana de autenticación se cierra
        const interval = setInterval(() => {
            if (popup?.closed) {
                clearInterval(interval);
                // Realiza alguna acción después de cerrar la ventana de autenticación (por ejemplo, actualiza la página para verificar la autenticación)
                // window.location.reload();
            }
        }, 1000);
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
