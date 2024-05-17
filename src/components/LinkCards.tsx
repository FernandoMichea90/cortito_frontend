'use client'
import React, { useEffect, useState } from 'react'
import LinkCard from './LinkCard'
import LinkChart from './LinkChart'
import { api } from '@/utils/axios'
import { PATH_SHORT_URL } from '@/api/path'

const LinkCards = () => {


  const [shortUrl, setShortUrl] = useState([])
  const [cargando, setCargando] = useState(false)

const fetchShortUrls=async()=>{

  try {
    const response = await api.get(PATH_SHORT_URL.getShortUrls());
    console.log(response)
    setShortUrl(response.data.shortUrls); // Assumes response.data contains the array of short URLs
  } catch (error) {
    console.log(error);
  } finally {
    setCargando(false); // Ensure loading state is reset
  }

}

useEffect(() => {
  setCargando(true)
  fetchShortUrls();

}, [])

return (
  <>
    {cargando ? (
      <p>Loading...</p>
    ) : (
      <div className="flex flex-wrap justify-between">
      {shortUrl && shortUrl.length > 0 && (
        <>
          {shortUrl.map((url, index) => (
            <LinkCard key={index} shorturl={url} />
          ))}
          <div className="w-full flex justify-end">
            <a href="#" className="text-blue-500">Ver más...</a>
          </div>
        </>
      )}
    </div>
    )}
  </>
);

}

export default LinkCards