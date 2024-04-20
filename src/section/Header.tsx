// src/components/Header.tsx
'use client'
import React, { useContext } from 'react';
import LoginModal from '@/components/LoginModall'
import { AuthContext } from '@/app/auth/auth-context';

const Header: React.FC = () => {
    const {state,dispatch}= useContext(AuthContext);
    const { isAuthenticated, user } = state;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    const cerrarSesion=()=>{
        dispatch({type:"LOGOUT"});
    }

    React.useEffect(() => {
        console.log('state', state)
    }, [state])

    return (
        <header className="bg-azul text-white p-4 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img
                        src="/cortito.png"
                        alt="Logo"
                        className="h-12" />
                </div>
                <div>
                    {isAuthenticated ? (
                        // Si el usuario está autenticado, muestra un mensaje de bienvenida o los datos del usuario
                        <div className='flex items-center justify-between'>
                        <div>Hola, {user?.name || 'Usuario'}!</div>
                        <button onClick={()=>cerrarSesion()} className='bg-white text-azul px-2 py-2 rounded-lg ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9l-4-4m4 4l-4 4m4-4H9"/></svg>
                        </button>
                        </div>
                         // Asegura ajustar según cómo almacenas los datos del usuario en tu estado
                    ) : (
                        // Si no está autenticado, muestra el botón para iniciar sesión
                        <button onClick={handleOpen} className="bg-white text-azul px-4 py-2 rounded-md">
                            Iniciar Sesión
                        </button>
                    )}
                </div>
            </div>
            <LoginModal open={open}  handleClose={handleClose} />
        </header>
    );
};

export default Header;
