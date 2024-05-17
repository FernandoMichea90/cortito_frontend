import LinkCard from '@/components/LinkCard'
import LinkCards from '@/components/LinkCards'
import React from 'react'

const ListasUrl = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='relative mb-[30px] w-[80vw]  pb-[20px]'>
        <div className='flex flex-row items-center text-2xl text-azul text-left'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="#8b8d8e" d="m138.058 296.404l-40.791-40.791l49.274-49.274c44.561-44.561 117.064-44.56 161.626 0l-40.791 40.791c-22.067-22.068-57.977-22.069-80.045 0z" /><path fill="#646768" d="M287.656 341.136c-30.527 0-59.227-11.888-80.812-33.475c-44.56-44.56-44.561-117.064 0-161.625l97.892-97.892c21.587-21.586 50.286-33.474 80.813-33.474s59.227 11.888 80.813 33.474c21.586 21.586 33.474 50.287 33.474 80.813s-11.888 59.227-33.474 80.813l-97.893 97.892c-21.585 21.586-50.284 33.474-80.813 33.474m97.893-268.78c-15.118 0-29.332 5.888-40.023 16.578l-97.892 97.892c-22.068 22.069-22.068 57.977 0 80.045c10.69 10.69 24.904 16.578 40.022 16.578c15.119 0 29.332-5.887 40.022-16.577l97.893-97.893c10.69-10.69 16.578-24.904 16.578-40.022c0-15.119-5.888-29.332-16.578-40.023c-10.69-10.69-24.904-16.578-40.022-16.578" /><path fill="#8b8d8e" d="M343.932 70.414c-5.605 0-11.037-2.976-13.923-8.237c-4.214-7.681-1.403-17.324 6.278-21.538c31.379-17.211 69.118-17.305 98.494-.244c7.576 4.4 10.15 14.109 5.75 21.686c-4.401 7.576-14.108 10.15-21.686 5.75c-19.52-11.338-45.938-11.094-67.299.625a15.798 15.798 0 0 1-7.614 1.958M129.461 499.277c-29.267 0-58.533-11.14-80.813-33.419c-44.56-44.561-44.56-117.066 0-161.627l70.465-70.464l40.79 40.791l-70.465 70.465c-22.068 22.068-22.068 57.977 0 80.045c11.033 11.033 25.53 16.55 40.022 16.551c14.496.002 28.987-5.516 40.023-16.551l97.892-97.893c10.69-10.69 16.578-24.904 16.578-40.022s-5.887-29.332-16.578-40.022l40.791-40.791c44.561 44.561 44.561 117.066 0 161.626l-97.892 97.893c-22.28 22.279-51.546 33.418-80.813 33.418" /></svg>
            <h3 className='mx-2'>Mis enlaces</h3>
        </div>
      </div>
      {/* list Short Urls */}
      <div className='relative mb-[100px] w-[80vw] pt-[20px] pb-[20px]'>
      
      <LinkCards></LinkCards>
      </div>
    </div>

  )
}

export default ListasUrl