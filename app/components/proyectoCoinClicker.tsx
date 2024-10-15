"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import zustand from "@/public/lenguajes/zustand.png";
import nextjs from "@/public/lenguajes/nextjs.png";
import ts from "@/public/lenguajes/ts.png";
import tailwind from "@/public/lenguajes/tailwind.png";
import react from "@/public/lenguajes/react.png";
import Image from "next/image";

export default function ProyectoCoinClicker() {
  const [verProyecto1, setProyecto1] = useState(false);
  useEffect(() => {
    const handleKeyPress = (e: { key: string; }) => {
      if (e.key === "Escape") {
        setProyecto1(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <>
      <section
        className="flex justify-center items-center order-1 sm:order-1 mb-4 hover:scale-105 cursor-pointer"
        onClick={() => {
          setProyecto1(true);
        }}
      >
        <article className="relative w-72">
          <Image
            className="h-40 w-full rounded-lg overflow-hidden boxShadow"
            src="/CoinClicker.png"
            alt="Proyecto CoinClicker"
            width={256}
            height={256}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-lg">
            <span className="font-bold text-lg sm:text-xl p-2 backdrop-blur-md rounded-xl">
              CoinClicker
            </span>
          </div>
        </article>
      </section>
      {/* Vetanas modales de los proyectos */}
      {/* Proyecto Coin Clicker */}
      <section
        className={cn(
          verProyecto1
            ? "fixed h-full w-full bg-black/60 z-10 flex top-0 left-0 items-center justify-center"
            : "hidden"
        )}
        onClick={() => {
          setProyecto1(false);
        }}
      >
        <section className="flex fondoTarjeta shadow-lg shadow-black/40 sm:h-4/5 sm:w-3/5 sm:rounded-l-3xl h-full w-full p-16 sm:p-20 flex-col overflow-y-scroll"
        onClick={(e) => {
          e.stopPropagation(); 
        }}>
          <span className="flex justify-end -mt-8 mb-3">
            <Image
              className="h-full w-10 cursor-pointer"
              src="/close.png"
              alt="Close"
              width={256}
              height={256}
              onClick={() => {
                setProyecto1(false);
              }}
            />
          </span>
          <h1 className="text-3xl border-b border-white/50 w-full mb-8 flex justify-between sm:flex-row flex-col">
            <a
              className="sm:text-3xl text-2xl"
              href="https://cookie-clicker-v3.vercel.app/"
              target="_blank"
            >
              Proyecto <span className="text-amber-500">Coin Clicker</span>
            </a>
            <a
              className="text-xl font-semibold text-emerald-400 italic"
              href="https://github.com/JavierChicano/cookie-clicker-v3.git"
              target="_blank"
            >
              Github del proyecto
            </a>
          </h1>
          {/* Explicacion de la pagina/juego */}
          <section className="flex flex-col gap-2 mb-8">
            <p>El juego está inspirado en Cookie Clicker.</p>
            <p>
              Cada clic en la moneda te otorga una moneda. Puedes usar estas
              monedas para incrementar tu producción.
            </p>
            <p>
              Las mejoras tienen un coste y nivel que aumentan con cada compra.
            </p>
            <p>
              Por ejemplo, la mejora de fuerza duplica tus ganancias por clic.
              Otras, proporcionan ingresos pasivos cada segundo.
            </p>
            <p>
              En el futuro, se planea añadir nuevas funcionalidades junto con
              cambios visuales en el propio juego.
            </p>
          </section>
          {/* Lenguajes y link al proyecto */}
          <section className="border-b border-t border-zinc-800 mb-8 ">
            <div className="flex justify-around my-4">
              <a
                className="w-1/2 flex justify-center"
                href="https://cookie-clicker-v3.vercel.app/"
                target="_blank"
              >
                <h1 className="text-xl sm:w-1/2 flex justify-center">
                  Link al proyecto
                </h1>
              </a>
              <h1 className="text-xl w-1/2 sm:flex justify-center hidden">
                Herramientas
              </h1>
            </div>
            <div className="flex justify-around my-4 sm:flex-row flex-col">
              <a
                className="sm:w-1/2 flex justify-center"
                href="https://cookie-clicker-v3.vercel.app/"
                target="_blank"
              >
                <Image
                  className="h-72 w-auto"
                  src="/CoinClicker2.png"
                  alt="Proyecto CoinClicker"
                  width={500}
                  height={500}
                />
              </a>
              <h1 className="text-xl sm:hidden flex justify-center pt-5 mb-10 border-t border-zinc-800">
                Herramientas
              </h1>
              {/* Lenguajes usados en el proyecto */}
              <article className="sm:w-1/2 grid grid-rows-5 justify-center gap-4 self-center">
                <div className="flex items-center gap-10">
                  <img src={react.src} className="h-10 w-10"></img>
                  <p>Lenguaje base del proyecto</p>
                </div>
                <div className="flex items-center gap-10">
                  <img src={nextjs.src} className="h-10 w-10"></img>
                  <p>Framework de react</p>
                </div>
                <div className="flex items-center gap-10">
                  <img src={ts.src} className="h-10 w-10"></img>
                  <p>Gestión de la lógica</p>
                </div>
                <div className="flex items-center gap-10">
                  <div className="w-10">
                    <img src={zustand.src}></img>
                  </div>
                  <p>Gestión de estados</p>
                </div>
                <div className="flex items-center gap-10">
                  <div className="w-10">
                    <img src={tailwind.src}></img>
                  </div>
                  <p>Estilos css de la página</p>
                </div>
              </article>
            </div>
          </section>
          {/* Explicacion de las problemas y soluciones */}
          <section className="flex justify-around mb-4 sm:flex-row flex-col">
            <h1 className="text-xl sm:w-1/2 flex justify-center">
              Problemas afrontados
            </h1>
            <h1 className="text-xl w-1/2 sm:flex justify-center hidden">
              Soluciones
            </h1>
          </section>
          {/* Primera explicacion  */}
          <div className="flex justify-around gap-8 sm:gap-20 p-4 mb-4 border-b border-zinc-800 flex-wrap sm:flex-nowrap">
            <aside className="sm:w-1/2">
              Se han generado múltiples intervalos debido a la{" "}
              <span className="font-semibold text-emerald-400">
                generación repetitiva de componentes.
              </span>{" "}
              Esta situación emerge al generar componentes de forma infinita, lo
              que resulta en la{" "}
              <span className="font-semibold text-emerald-400">
                creación ilimitada de intervalos.
              </span>
            </aside>
            <p className="sm:w-1/2">
              Se incluyó el{" "}
              <span className="font-semibold text-emerald-400">
                intervalo en el layout,
              </span>{" "}
              en lugar de en el componente De esta manera, se generará
              únicamente una vez, proporcionando una{" "}
              <span className="font-semibold text-emerald-400">
                gestión más eficiente
              </span>{" "}
              de los recursos.
            </p>
          </div>
          {/* Segunda explicacion  */}
          <div className="flex justify-around gap-8 sm:gap-20 p-4 mb-4 border-b border-zinc-800 flex-wrap sm:flex-nowrap">
            <aside className="sm:w-1/2">
              Se plantea la cuestión de cómo{" "}
              <span className="font-semibold text-emerald-400">
                acceder a cada componente,
              </span>{" "}
              considerando que{" "}
              <span className="font-semibold text-emerald-400">
                todos son idénticos
              </span>{" "}
              y se generan de manera infinita.
            </aside>
            <p className="sm:w-1/2">
              Se implementó la{" "}
              <span className="font-semibold text-emerald-400">
                creación de un mapa
              </span>{" "}
              que utiliza la clave de la fila para asociar un{" "}
              <span className="font-semibold text-emerald-400"> objeto</span>{" "}
              que contiene todos los{" "}
              <span className="font-semibold text-emerald-400">datos</span> del
              componente respectivo.
            </p>
          </div>
          {/* Tercera explicacion */}
          <div className="flex justify-around gap-8 sm:gap-20 p-4 mb-4 border-b border-zinc-800 flex-wrap sm:flex-nowrap">
            <p className="sm:w-1/2">
              Adaptar la{" "}
              <span className="font-semibold text-emerald-400">
                version de escritorio a movil.
              </span>
            </p>
            <p className="sm:w-1/2">
              Se consolidan{" "}
              <span className="font-semibold text-emerald-400">
                múltiples columnas en una sola,
              </span>{" "}
              y se implementa una funcionalidad de{" "}
              <span className="font-semibold text-emerald-400">
                navegación mediante flechas
              </span>{" "}
              para alternar entre ellas.
            </p>
          </div>
          {/* Cuarta explicacion */}
          <div className="flex justify-around gap-8 sm:gap-20 p-4 mb-4 border-b border-zinc-800 flex-wrap sm:flex-nowrap">
            <p className="sm:w-1/2">
              Conforme avanzaba el juego, las{" "}
              <span className="font-semibold text-emerald-400">
                 unidades de medida de las monedas
              </span>{" "}
              se volvían excesivamente grandes e inmanejables.
            </p>
            <p className="sm:w-1/2">
              Se ha creado una{" "}
              <span className="font-semibold text-emerald-400">
                página dedicada a la gestión de unidades,
              </span>{" "}
              que incluye métodos para mostrar las monedas de dos formas
              diferentes abreviadas.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
