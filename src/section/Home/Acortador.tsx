'use client'
import React, { FormEvent } from 'react'

export default function Acortador() {

  const [success, setSuccess] = React.useState(false)


  const successAction = () => {
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 1000);

  }

  const acortarUrl = (event: FormEvent) => {
    event.preventDefault()
    successAction()
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
                <input className="text-blue-500 border-[2px] border-solid border-[#e8e9eb] p-2 rounded-md w-[80%] m-2" type='text' placeholder="https://www.google.com" />
                <button className="mt-3 text-center text-1xl vw-20 p-2 rounded-lg text-blanco bg-azul dark:text-gray-400 text-bold w-[180px]">
                  Obtén tu enlace
                </button>
              </form>
            </div>

            {/* mostrar url acortada */}
            <div className='w-[100%] text-center mx-auto my-5'>
              {
                success ? (
                  <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 64 64"><path fill="#be202e" fill-rule="evenodd" d="M53.15 24.389c-.316-2.163-1.652-3.55-3.056-4.149c-.727-.305-1.564-.491-2.512-.352c-2.17.31-3.404 1.936-3.789 3.57c-.201.854-.199 1.92.256 2.932c.79 1.773 2.545 2.7 4.318 2.257c1.039-.259 1.704-.889 2.134-1.7c.485-.916.67-2.562-.279-3.701c-.788-.95-2.635-1.476-3.734-.169c-.396.479-.728 1.375-.368 2.256c.309.749 1.127 1.201 1.839.919c.523-.201.772-.649.606-1.294c-.063-.011-.063.205-.12.313a.771.771 0 0 1-.306.301c-.753.391-1.321-.282-1.3-1.046c.001-.611.496-1.167 1.2-1.248c.727-.082 1.422.367 1.73 1.046c.576 1.275-.111 2.793-1.373 3.269c-1.376.513-2.717-.228-3.342-1.356c-.585-1.059-.48-2.136-.172-2.994c.429-1.197 1.576-2.329 3.277-2.364c1.621-.031 3.405.993 3.938 3.253c.18.761.166 1.325.062 1.958c-.184 1.128-.67 2.16-1.661 3c-.978.823-2.496 1.233-3.688 1.044a5.05 5.05 0 0 1-2.923-1.542c-.866-.931-1.482-2.294-1.54-3.77a6.678 6.678 0 0 1 .814-3.431c.527-.946 1.557-1.962 2.714-2.479l.675-.252c2.703-.618 4.962.198 6.474 2.152c.831 1.082 1.435 2.577 1.52 4.02c.008.152-.952.542-1.394-.443" /><path fill="#f4c778" d="M17.996 19.977L3.34 55.626s-1.47 6.364 5.3 5.762l33.72-14.943" /><path fill="#e5b973" d="m10.607 59.31l13.459-32.732l-6.071-6.599L3.34 55.628s-1.47 6.364 5.3 5.762l1.835-.812c.012-.739.132-1.268.132-1.268" /><path fill="#d1a55e" d="M41.856 47.23c-2.593 2.697-10.174-1.073-16.938-8.422c-6.763-7.344-10.141-15.487-7.551-18.18c2.592-2.693 10.176 1.074 16.937 8.422c6.763 7.348 10.144 15.489 7.552 18.18" /><path fill="#ad8c5c" d="M18.318 29.322c1.448 2.979 3.745 6.317 6.683 9.512c3.041 3.302 6.244 5.871 9.09 7.467c.576-3.144-1.213-7.769-4.794-11.655c-3.626-3.941-8-5.942-10.976-5.324" /><path fill="#b43248" d="M63.743 41.4c-8.385-15.62-26.984-10.797-38.825-2.584c.328.346 1.072 1.116 1.392 1.469c.824 0 14.607-8.366 22.777-5.929c4.42 1.318 7.874 4.995 10.963 8.223c.45.469 1.925.255 2.899-.111c.293-.033.588-.195.748-.429c.078-.079.104-.153.093-.226a.57.57 0 0 0-.047-.413" /><path fill="#089083" d="M59.763 56.928C59.407 41.696 44.348 37.4 33.442 39.007c-.702.101-.923 1.222-.091 1.098c10.313-1.519 24.822 2.38 25.16 16.908c.021.777 1.27.595 1.254-.085" /><path fill="#04a69c" d="M45.3 2.867c-.253 1.524.944 2.976.975 4.5c.061 2.979-1.29 5.03-4.052 6.116c.734 1.644 1.547 3.177 3.03 3.975c6.06-2.755 7.261-9.436 4.29-14.864c-1.123-2.052-3.732-2.796-4.246.273" /><path fill="#ae92c4" d="M28.27.441c-.655-.619-3.767.825-3.155 1.406c10.45 9.899 10.491 26.802-1.58 35.502c-.015.006.485.582.719.818c.663-.109 4.298-2.656 5.264-3.589c1.559-1.348 2.905-3.01 3.982-5.04c5.259-9.134 3.365-20.949-5.23-29.09" /><path fill="#f7ec35" fill-rule="evenodd" d="M33.469 10.617c-.262-1.793-1.371-2.944-2.53-3.435a3.806 3.806 0 0 0-2.08-.293c-1.798.255-2.822 1.603-3.139 2.959c-.167.707-.165 1.588.21 2.426c.657 1.472 2.111 2.237 3.576 1.874c.864-.216 1.417-.742 1.771-1.414c.4-.757.551-2.117-.234-3.063c-.654-.784-2.184-1.224-3.094-.139c-.328.395-.603 1.14-.303 1.866c.257.622.935.997 1.524.765c.433-.17.641-.542.502-1.074c-.052-.012-.052.17-.103.263a.69.69 0 0 1-.253.247c-.623.324-1.09-.231-1.074-.865c.012-.51.409-.966.993-1.035c.607-.07 1.181.305 1.437.865c.475 1.058-.096 2.314-1.14 2.708c-1.136.425-2.248-.189-2.77-1.128c-.482-.873-.397-1.765-.142-2.473c.359-.992 1.305-1.935 2.715-1.962c1.345-.023 2.82.823 3.265 2.697c.146.629.14 1.101.05 1.619c-.151.935-.557 1.792-1.374 2.488c-.813.684-2.071 1.02-3.054.865a4.151 4.151 0 0 1-2.422-1.279c-.72-.768-1.23-1.896-1.276-3.121c-.04-1 .214-2.02.674-2.839c.437-.785 1.289-1.627 2.248-2.056l.561-.208c2.237-.514 4.105.162 5.359 1.781c.69.9 1.187 2.136 1.259 3.331c.007.12-.789.449-1.156-.37" /><g fill="#29abe2"><path d="M22.539 23.528c-1.592-2.632-14.14-18.492-4.119-19.27c1.557-.12 3.582-1.593.865-1.383c-6.245.482-9.789 3.202-7.658 9.78c1.087 3.353 3.235 6.262 5.365 9.01c2.442 3.151 5.22 11.683-3.312 10.551c-4.049-.537-7.099-8.208-1.913-6.571c.895.282 4.368-.789 3.291-1.128c-3.202-1.01-8.58-1.456-10.08 2.37c-2.22 5.646 7.248 7.04 10.487 6.758c4.972-.423 10.336-4.73 7.078-10.113" /><ellipse cx="19.842" cy="10.636" rx=".825" ry="1.502" /></g><ellipse cx="60.47" cy="15.933" fill="#04a69c" rx="1.567" ry="2.06" transform="rotate(-123.73 60.468 15.93)" /><ellipse cx="51.11" cy="48.11" fill="#b43248" rx="1.567" ry="2.061" transform="rotate(-51.757 51.11 48.107)" /></svg>
                )
                  :
                  (
                    <>
                      <span className="mt-3 text-azul dark:text-gray-400">
                        https://cortito.cl/123456
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

