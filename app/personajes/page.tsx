"use client"

import Navbar from "@/components/nav-bar";
import RootLayout from "../layout";
import CardVertical from "@/components/card-vertical";
import { generateNumberRandom, generateRange } from "@/utils";
import YouTube, { YouTubeProps } from "react-youtube";
import { CardData, MarvelResponse } from "@/domain/interfaces";
import { useEffect, useState } from "react";
import CardPersonaje from "@/components/card-personaje";

export default function Personajes() {
  const [data, setData] = useState<CardData[]>([]);
  useEffect(() => {
    const key = 'a1bfbf51599dfee6d9b2195e642e1651'
    const hash = '8291aa386f14f30dd8f080dd890fcee4'
    const ts = 1

    fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${key}&ts=${ts}&hash=${hash}`)
    .then(res => res.json())
    .then((json: MarvelResponse) => {
      const data = json.data.results.map((hero) => {
        return {
          img: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
          name: hero.name,
          comics: hero.comics.available,
          series: hero.series.available
        }
      })
      setData(data)
    })
    .catch(err => console.warn(err))
  }, [])
  const nextMovie = 'The Marvels'
  const videoID = 'OMWRSrFlqoM'
  const classGrad = 'h-5 bg-gradient-to-t from-teal-500 from-10% via-teal-200 via-70% to-teal-500 to-100%'
  const totalMeta = 100;
  const totalProducidas = generateNumberRandom(totalMeta/2, totalMeta);
  const porcents: number[] = generateRange(totalMeta)

  const opts: YouTubeProps['opts'] = {
    height: '135',
    width: '277',
    playerVars: {
      autoplay: 1,
    },
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }
  return (
    <RootLayout >
      <Navbar />
      <main className="w-full h-full bg-gray-900 text-gray-300 bg-[url('/img/wallpaper.jpg')] bg-cover bg-fixed bg-center py-8 px-12">
        <section className="flex justify-between items-center">
          <div className="cards-superior w-full flex gap-4">

            <CardVertical addClass="w-full md:!w-7/12 lg:!w-2/5">
              <div className="w-12/12">
                <p className="font-extrabold">PROGRESO DE LAS PELICULAS PRODUCIDAS</p>

                <div className="progress mt-4">
                  <p className="text-amber-500 text-[8px] text-end"> {totalMeta} Peliculas</p>
                  <p className="text-amber-500 text-[8px] text-end"> Meta de producion</p>
                  <div className="-skew-x-12 border-amber-500 border-2">
                    <div className="flex border-sky-900 border-2">
                      {porcents.map((porc, i) => {
                        return (<div className={`border-sky-900 border-r w-[10%] ${ totalProducidas >= porc ? classGrad : 'bg-white' }`} key={i} /> )
                      })}
                    </div>
                  </div>
                  <p className="text-teal-500 text-[8px] text-end mt-1"> {totalProducidas} Peliculas producidas</p>
                </div>
              </div>
            </CardVertical>

            {/* <CardVertical addClass="hidden lg:!flex lg:!w-4/12">
              <div className="w-12/12">
                <YouTube videoId={videoID} opts={opts} onReady={onPlayerReady} />
              </div>
            </CardVertical> */}

            <CardVertical addClass="hidden md:!flex md:!w-5/12 lg:!w-4/12">
              <div className="w-full h-full bg-cover flex justify-end items-end bg-center bg-[url('https://www.nacionflix.com/__export/1676478225478/sites/debate/img/2023/02/15/the-marvels_1.jpg_172596871.jpg')]">
                <span className="text-white mr-4">
                  Próximamente: <b>{ nextMovie }</b>
                </span>
              </div>
            </CardVertical>
          </div>

        </section>

        <section className="mt-4">
          <div className="cards-personajes flex flex-wrap gap-4 justify-center">
            {data.length > 0 ? data.map((el, i) => {
              return (<CardPersonaje data={el} key={i} />)
            })  : <></>}
          </div>
        </section> 
        
      </main>
    </RootLayout>
  )
}