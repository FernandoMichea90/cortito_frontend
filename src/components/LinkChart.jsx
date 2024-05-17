'use client'
import React from 'react';

// import { memo } from 'react';
import dynamic from 'next/dynamic';
 const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
// export default memo(ApexChart);


// Define las opciones y series fuera del componente
const options = {
  chart: {
    id: 'apexchart-example',
    sparkline: {
        enabled: true,
      },
  },
  // grosor de la linea
  stroke: {
    width: 1
  },
  xaxis: {
     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  },
  // desabilitar el modal que muestra la interseccion de los ejes. 
  tooltip: {
    enabled: false // Deshabilitar el tooltip
  }
};

const series = [{
  name: 'Click',
  data: [0,0, 2, 0, 0, 0, 3, 0, 0, 0]
}];



const LinkChart = () => {
  return (
    <div>
        <ApexChart type='line' options={options} series={series} height={25} width={125}></ApexChart>
    </div>
  );
};

export default LinkChart;
