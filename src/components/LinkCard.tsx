import React from 'react'
import LinkChart from './LinkChart'
interface Props{
  shorturl:{long_url:string}
}


const LinkCard:React.FC<Props> = ({shorturl}) => {
  
  return (
    <div className="w-full sm:w-[48%] border shadow rounded h-[150px] p-[13px] mb-4 relative flex justify-start">
    {/* Icono de arrastrar */}
    <svg className="absolute right-0 top-0 w-4 h-4 cursor-move m-[10px]">
      {/* Inserta aquí el código SVG para el icono de arrastrar */}
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M108 60a16 16 0 1 1-16-16a16 16 0 0 1 16 16m56 16a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-72 36a16 16 0 1 0 16 16a16 16 0 0 0-16-16m72 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-72 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16m72 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"/></svg>
    </svg>

    {/* Icono de editar */}
    <svg className="absolute right-7 top-0 w-4 h-4 cursor-pointer m-[10px]">
      {/* Inserta aquí el código SVG para el icono de editar */}
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20v-2.52l13.875-13.9l2.54 2.563L6.52 20zM17.504 7.589L19 6.111L17.889 5l-1.477 1.496z"/></svg>
    </svg>
    {/* Icono de eliminar */}
    <svg className="absolute right-0 bottom-0 w-4 h-4 cursor-pointer text-red-500 m-[10px]">
      {/* Inserta aquí el código SVG para el icono de eliminar */}
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="#eb0000"><path d="M200 56v152a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56Z" opacity="0.2"/><path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"/></g></svg>
    </svg>
    {/* ShortURL */}
    <div className="my-auto w-full flex flex-row justify-between items-center">
     <div className='flex-1'>
      <p className="font-bold">{shorturl.short_url}</p>
      {/* URL */}
      <p className="text-gray-500">{shorturl.long_url}</p>
      </div>
      <LinkChart></LinkChart>
      
    </div>
  </div>
  )
}

export default LinkCard