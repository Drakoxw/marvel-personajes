import Navbar from "@/components/nav-bar";
import RootLayout from "../layout";

export default function Personajes() {

  return (
    <RootLayout >
      <Navbar />
      <main className="w-full h-full bg-gray-900 bg-[url('/img/wallpaper.jpg')] bg-cover bg-center">
        Hola desde Personajes
      </main>
    </RootLayout>
  )
}