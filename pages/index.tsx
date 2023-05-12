import Navbar from "@/components/nav-bar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full h-full bg-gray-900 text-gray-900 bg-[url('/img/wallpaper-2.jpg')] bg-cover bg-fixed bg-center py-8 px-12">
        <section className="w-full h-[calc(100vh-144px)] overflow-auto">
          <div className="bg-white bg-opacity-75 p-6 rounded">
            <h1 className="text-2xl">
              Prueba tecnica:{" "}
              <span className="font-extrabold">Desarrollador de front-end</span>
            </h1>
            <div className="border-gray-500 border rounded p-4 mt-4">
              <h2>
                Por: <span className="font-extrabold">
                  Wilmar Roncancio
                </span>{" "}
              </h2>
              <h2>
                Celular: <span className="font-extrabold">3108018388</span>{" "}
              </h2>
              <h2>
                Email:{" "}
                <span className="font-extrabold">drakowdev@gmail.com</span>{" "}
              </h2>
              <h2>
                Linkedin:{" "}
                <span className="font-extrabold">
                  <a
                    href="https://www.linkedin.com/in/will-ronmen-b344761bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >will-ronmen-b344761bb</a>
                </span>
              </h2>
              <h2>
                Github:{" "}
                <span className="font-extrabold">
                  <a
                    href="https://github.com/Drakoxw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >/Drakoxw</a>
                </span>
              </h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
