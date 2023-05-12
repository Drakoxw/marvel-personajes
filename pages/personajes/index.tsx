import { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

import Navbar from "@/components/nav-bar";
import CardPersonaje from "@/components/card-personaje";
import LayoutHydrated from "@/components/hydrated";
import CardVertical from "@/components/card-vertical";
// import RootLayout from "../layout";

import { filterTable, generateNumberRandom, generateRange } from "@/utils";
import { CardData } from "@/domain/interfaces";
import { getHeroes } from "@/external/http";
import Loading from "@/components/loading";

export default function Personajes() {
  const [data, setData] = useState<CardData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [showContent, setshowContent] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const res = await getHeroes();
      setData(res);
    })();
  }, []);

  const nextMovie = "The Marvels";
  const videoID = "OMWRSrFlqoM";
  const classGrad =
    "h-5 bg-gradient-to-t from-teal-500 from-10% via-teal-200 via-70% to-teal-500 to-100%";
  const totalMeta = 100;
  const totalProducidas = generateNumberRandom(totalMeta / 2, totalMeta);
  const porcents: number[] = generateRange(totalMeta);

  const opts: YouTubeProps["opts"] = {
    height: "135",
    width: "277",
    playerVars: {
      autoplay: 1,
    },
  };

  const nextPage = () => {
    if (data.length > 0 && page < data.length / 5) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const renderPaginador = (): JSX.Element => {
    if (data.length > 0) {
      return (
        <div className="w-full justify-center items-center mt-6 text-amber-500 flex gap-4">
          <svg
            onClick={() => prevPage()}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>

          <span className="font-bold text-2xl">
            {page}/{data.length > 0 ? data.length / 5 : 0}
          </span>

          <svg
            onClick={() => nextPage()}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-arrow-right-circle-fill cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
        </div>
      );
    }
    return <></>
  };

  return (
    <section className={`w-full ${data.length > 0 ? 'h-full' : 'h-screen'}`}>
      <Navbar />
      <main className="w-full h-full bg-gray-900 text-gray-300 bg-[url('/img/wallpaper.jpg')] bg-cover bg-fixed bg-center py-8 px-12">
        <section className={`flex justify-between items-center `}>
          <div className="cards-superior w-full flex gap-4">
            <CardVertical addClass="w-full md:!w-7/12 lg:!w-2/5 p-4">
              <div className="w-12/12">
                <p className="font-extrabold">
                  PROGRESO DE LAS PELICULAS PRODUCIDAS
                </p>

                <div className="progress mt-4">
                  <p className="text-amber-500 text-[8px] text-end">
                    {" "}
                    {totalMeta} Peliculas
                  </p>
                  <p className="text-amber-500 text-[8px] text-end">
                    {" "}
                    Meta de producion
                  </p>
                  <div className="-skew-x-12 border-amber-500 border-2">
                    <div className="flex border-sky-900 border-2">
                      {porcents.map((porc, i) => {
                        return (
                          <div
                            className={`border-sky-900 border-r w-[10%] ${
                              totalProducidas >= porc ? classGrad : "bg-white"
                            }`}
                            key={i}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <p className="text-teal-500 text-[8px] text-end mt-1">
                    {" "}
                    {totalProducidas} Peliculas producidas
                  </p>
                </div>
              </div>
            </CardVertical>

            <CardVertical addClass="hidden lg:!flex lg:!w-4/12">
              <div className="w-12/12">
                <YouTube
                  videoId={videoID}
                  opts={opts}
                  onReady={onPlayerReady}
                />
              </div>
            </CardVertical>

            <CardVertical addClass="hidden md:!flex md:!w-5/12 lg:!w-4/12">
              <div className="w-full h-full bg-cover flex justify-end items-end bg-center bg-[url('https://www.nacionflix.com/__export/1676478225478/sites/debate/img/2023/02/15/the-marvels_1.jpg_172596871.jpg')]">
                <span className="text-white mr-4">
                  Próximamente: <b>{nextMovie}</b>
                </span>
              </div>
            </CardVertical>
          </div>
        </section>

        <section className="mt-4">
          <div className="cards-personajes flex flex-wrap gap-4 justify-center">
            {data.length > 0 ? (
              filterTable(data, page).map((el, i) => {
                return <CardPersonaje data={el} key={i} />;
              })
            ) : (
              <Loading />
            )}
          </div>

          {renderPaginador()}
        </section>
      </main>
    </section>
  );
}
