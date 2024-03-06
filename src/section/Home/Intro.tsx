'use client'

import React from 'react'

export default function Intro() {


  const renderPolygon = () => (
    <>
      <div className='styled-polygon left op-blanco-100 h-[80px]' ></div>
      <div className='styled-polygon right op-blanco-25 h-[80px] z-40' ></div>
      <div className='styled-polygon right op-blanco-50 h-[60px] z-10' ></div>
      <div className='styled-polygon right op-blanco-100 h-[40px] z-20' ></div>

    </>
  )



  return (
    <div className='fixed top-0 left-0'>
      <div className='bg-azul'>
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-azul">
          <div className='w-[600px] h-[600px] animar-subir-bajar'>
            <img
              src="/cortito.png"
              alt="Vercel Logo"
            />
          </div>
          <p className="mt-3 text-center text-blanco dark:text-gray-400">
            Un acortador de URL sencillo y rápido
          </p>

        </div>
      </div>
    </div>
  )
}

