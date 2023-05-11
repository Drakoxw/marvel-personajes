"use client"

import { ROUTES } from "@/domain/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from "react";

function selected() {
  return (
    <div className="-top-[44px] absolute">
      <div className="rotate-45 w-6 h-6 border-amber-500 border ml-[36px]">
        <div className="border-amber-500 border w-5 h-5">
          <div className="border-amber-500 border w-4 h-4">
          </div>
        </div>
      </div>
    </div>
  )
}

const Title = "Marvel";
function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        <Link className="text-xl font-semibold" href="/">
          {Title}
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        {ROUTES.map((el, i) => {
          return (
            <a
              className="text-xl font-medium my-4"
              href={el.route}
              key={i}
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              {el.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const route = usePathname()

  return (
    <nav className="flex filter drop-shadow-md bg-gray-950 text-gray-200 font-bold px-12 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-auto flex items-center">
        <Link className="text-2xl font-semibold flex" href="/">
          <Image
            src="/img/Marvel-emblema.jpg"
            alt="logo marvel"
            height={76}
            width={140}
          />
        </Link>
      </div>
      <div className="w-full flex justify-start items-center h-full">
        <div className="hidden h-full ml-4 md:flex justify-center items-center">
          {ROUTES.map((el, i) => {
            return (
              <Link className={`px-4 h-full w-[130px] flex flex-col items-center justify-center ${route === el.route ? 'selected' : '' }`} href={el.route} key={i}>
                <div className="relative w-full">{ route === el.route ? selected() : <></>}</div>
                {el.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-auto flex items-center gap-4">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="yellow"
            className="bi bi-bell-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-gear-wide-connected"
            viewBox="0 0 16 16"
          >
            <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
          </svg>
        </span>
      </div>

      <div className="ml-8">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`h-1 w-full bg-gray-200 rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-gray-200 rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-gray-200 rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
