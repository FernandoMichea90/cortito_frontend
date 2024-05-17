
import Acortador from "@/section/Home/Acortador";
import Estadisticas from "@/section/Home/Estadisticas";
import Intro from "@/section/Home/Intro";
import ListasUrl from "@/section/Home/ListasUrl";

export default function Home() {

  const renderPolygon = () => (
    <div>
      <div className='styled-polygon left op-blanco-100 h-[80px]' ></div>
      <div className='styled-polygon right op-blanco-25 h-[80px] z-40' ></div>
      <div className='styled-polygon right op-blanco-50 h-[60px] z-10' ></div>
      <div className='styled-polygon right op-blanco-100 h-[40px] z-20' ></div>

    </div>
  )



  return (
    <>    
    <main className="flex  flex-col items-center justify-between">
      <Intro />

      <div className='mt-[100vh]'>
        {renderPolygon()}
      </div>
      <div className="w-full z-10 bg-blanco">
        <Acortador />
        <ListasUrl />
      </div>
    </main>
    </>
  );
}
