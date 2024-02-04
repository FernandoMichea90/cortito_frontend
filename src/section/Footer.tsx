// src/components/Footer.js
'use client'

import React from 'react';

const Footer = () => {
  return (
    <div className="relative z-2 bg-azul py-4">
      <div className="container mx-auto text-center text-blanco">
        <p className='text-blanco'>&copy; 2024 Cortito. Todos los derechos reservados.</p>
        <p className='text-blanco'>Desarrollado por <a href="https://fernandomichea90.github.io/fernandomicheav1/" className='text-blanco'>fm.cl</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
