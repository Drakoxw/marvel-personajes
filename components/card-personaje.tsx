import { CardData } from "@/domain/interfaces";
import Image from "next/image";

export default function CardPersonaje({ data }:{ data : CardData}) {

  return (
    <div className="flex">
      <section className="border-gray-500 border rounded">
        <Image className="rounded" src={'/img/bg-card.png'} width={200} height={364} alt="personaja marvel" />
      </section>
    </div>
  )
}