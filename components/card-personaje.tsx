import { CardData } from "@/domain/interfaces";
import Image from "next/image";

export default function CardPersonaje({ data }:{ data : CardData}) {
  console.log('data :', data.img)
  const urlOrBg = data.img.includes('image_not_available') ? 'bg-red-800' : ''
  return (
    <div className="flex">
      <section className="border-gray-500 border rounded">
        <Image className="rounded" src={'/img/bg-card.png'} width={200} height={364} alt="personaja marvel" />
      </section>
      <div className="relative">

        <div className="absolut w-24 h-12 text-center mt-[22px] -ml-[148px]">
          {data.name}
        </div>

        <div className={`absolut rounded-full h-[114px] w-[114px] mt-[15px] -ml-[158px] ${urlOrBg}`}>
          {data.img.includes('image_not_available') 
            ? <></> 
            : <img src={data.img} className="rounded-full h-[114px] w-[114px]" />
          }
        </div>

        <div className="absolut bg-[#1d2329] h-8 w-12 mt-[46px] -ml-24">
          {data.comics}
        </div>
        
        <div className="absolut bg-[#1d2329] h-8 w-12 mt-[26px] -ml-24">
          {data.series}
        </div> 

      </div>
    </div>
  )
}