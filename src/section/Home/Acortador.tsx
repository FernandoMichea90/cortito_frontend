'use client'
import React, { FormEvent } from 'react'
import { api } from '@/utils/axios';
import { PATH_SHORT_URL as path } from '@/api/path';
import { PUBLIC_URL } from '@/config_global';
import LoadSpinner from '@/utils/components/LoadSpinner'
export default function Acortador() {

  const [success, setSuccess] = React.useState(false)
  const [cargando, setCargando] = React.useState(false);
  const [url, setUrl] = React.useState('');
  const [error, setError] = React.useState('');

  const isValidUrl = (url: string) => {
    // Expresión regular para validar URL
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  const acortarUrl = (event: FormEvent) => {
    setError('');
    setCargando(true);
    event.preventDefault();

    const urlValue = (event.target as HTMLFormElement).url.value; // Obtener el valor del campo de entrada
    if (!isValidUrl(urlValue)) {
      setError('La URL ingresada no es válida');
      setCargando(false);
      return;
    }

    api.post(path.crearRuta(),{long_url:urlValue})
      .then(response => {
        if (response.status === 201) {
          // La solicitud fue exitosa, mostrar la URL corta creada
          setUrl(PUBLIC_URL+"/"+response.data.short_url);
        } else {
          // La solicitud no fue exitosa, mostrar un mensaje de error
        console.log('Hubo un error al crear la URL corta');
        }
      })
      .catch(error => {
        // Manejar cualquier error de la solicitud
        if (error.response && error.response.data && error.response.data.errors) {
          const validationErrors = error.response.data.errors;
          let errorMessage = 'Error de validación:';
          // Iterar sobre los errores de validación
          Object.keys(validationErrors).forEach(field => {
            errorMessage += `\n${field}: ${validationErrors[field][0]}`;
          });
          console.log(errorMessage);
        } else {
          // Si el error no está en el formato esperado, mostrar un mensaje genérico
          alert('Hubo un error al procesar la solicitud');
        }
        console.log(error);
      })

      .finally(() => {
        setCargando(false);
      });

  }
  return (

    <div className="flex flex-col items-center justify-center w-full my-[100px]">
      <div className='mb-[100px] w-[80vw] pt-[20px] pb-[20px]'>
        <p className="text-azul text-3xl font-bold text-center my-4">Haz que cada conexión cuente</p>
        <p className='text-2xl text-azul text-center my-4'>
          Cree enlaces cortos, códigos QR y páginas de enlaces en biografía. Compártelos en cualquier lugar.
          Realice un seguimiento de lo que funciona y de lo que no. Todo dentro de la Plataforma de Conexiones Bitly .
        </p>
      </div>

      <div className='relative shadow w-[80vw] pt-[20px] pb-[20px]  border-[#e8e9eb] border-[3px] border-solid  rounded-lg'>
        <div className='flex flex-row items-center  w-[20%] h-[60px] absolute -top-14 bg-blanco left-2 border-[#e8e9eb]   border-t-[3px] border-r-[3px] border-l-[3px]  rounded-lg'>
          <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353a.75.75 0 0 0-1.18.928a5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061z" /><path fill="currentColor" d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353a.75.75 0 0 0 1.18-.928a5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568z" /></svg>
          <h3 className='text-azul text-2xl font-bold'>Enlace Corto</h3>
        </div>

        {/*  input acortardor de url  */}
        <div className='h-[100%] flex flex-col justify-center '>
          <div>
            <h3 className="text-3xl font-bold text-azul dark:text-gray-400 text-left p-4 my-2">
              Acortar un enlace
            </h3>
            <h3 className="text-2xl font-bold text-azul dark:text-gray-400 text-left px-4 my-2">
              Pega una URL
            </h3>
            <form className='my-6' onSubmit={acortarUrl}>
              <input required name='url' className="text-blue-500 border-[2px] border-solid border-[#e8e9eb] p-2 rounded-md w-[80%] m-2" type='text' placeholder="https://www.google.com" />
              <button className="mt-3 text-center text-1xl vw-20 p-2 rounded-lg text-blanco bg-azul  w-[180px]">
                Obtén tu enlace
              </button>
              {error && (
                <div className="bg-red-100 text-red-500 px-4 py-2 m-5 rounded-md mt-2">
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* mostrar url acortada */}
          <div className='w-[100%] text-center mx-auto my-5'>
            {
              cargando ? (
                <div className='flex justify-center items-center'>
                <LoadSpinner></LoadSpinner>
                </div>
              )
                :
              
                (
                  url &&
                  <>
                    <span className="mt-3 text-azul dark:text-gray-400">
                      {url}
                    </span>
                    <button className='ml-2 text-azul bg-blanco p-2 m-2 rounded-lg shadow hover:text-blanco hover:bg-azul'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M0 2.729V2a1 1 0 0 1 1-1h2v1H1v12h4v1H1a1 1 0 0 1-1-1V9zM12 5V2a1 1 0 0 0-1-1H9v1h2v3zm-1 1h2v9H6V6zV5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2z" /><path fill="#02002d" d="M7 10h5V9H7zm0-2h5V7H7zm0 4h5v-1H7zm0 2h5v-1H7zM9 2V1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1h1V1h4v1zM3 3h6V2H3z" /></svg>
                    </button>
                  </>
                )
            }
          </div>
          <div className='flex  flex-col'>
            <p className='text-center text-2xl text-azul p-2 m-6 '>
              No se requiere tarjeta de crédito. Tu plan gratuito incluye
            </p>

            <div>
              <div className='flex flex-row items-center justify-center'>
                <div className='flex  text-center items-center mx-2'>
                  <svg className='w-[30px] h-[30px] text-[#2a5bd7]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M172.24 99.76a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90" /></svg>
                  <span>Acortamiento de enlaces</span>
                </div>
                <div className=' text-center'>

                  <div className='flex  text-center items-center mx-2'>
                    <svg className='w-[30px] h-[30px] text-[#2a5bd7]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M172.24 99.76a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90" /></svg>
                    <span>Estadisticas Basicas</span>
                  </div>
                </div>
                <div className=' text-center'>

                  <div className='flex  text-center items-center mx-2'>
                    <svg className='w-[30px] h-[30px] text-[#2a5bd7]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M172.24 99.76a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90" /></svg>
                    <span>Redireccionamiento</span>
                  </div>
                </div>
                <div className=' text-center'>

                  <div className='flex  text-center items-center mx-2'>
                    <svg className='w-[30px] h-[30px] text-[#2a5bd7]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M172.24 99.76a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90" /></svg>
                    <span>Personalización de enlaces</span>
                  </div>
                </div>
                <div className=' text-center'>

                  <div className='flex  text-center items-center mx-2'>
                    <svg className='w-[30px] h-[30px] text-[#2a5bd7]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M172.24 99.76a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90" /></svg>
                    <span>Integraciones</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

