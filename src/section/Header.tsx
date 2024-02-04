// src/components/Header.tsx
'use client'

import React from 'react';

const Header: React.FC = () => {
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
                    <button className="bg-white text-azul px-4 py-2 rounded-md">
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
