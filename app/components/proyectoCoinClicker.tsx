"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import zustand from "@/public/lenguajes/zustand.png";
import nextjs from "@/public/lenguajes/nextjs.png";
import ts from "@/public/lenguajes/ts.png";
import tailwind from "@/public/lenguajes/tailwind.png";
import react from "@/public/lenguajes/react.png";
import Image from "next/image";

export default function ProyectoCoinClicker() {
  const [verProyecto1, setProyecto1] = useState(false);

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
            className="h-40 w-full rounded-lg overflow-hidden shadow-lg shadow-red-500"
            src="/CoinClicker.png"
            alt="Proyecto CoinClicker"
            width={256}
            height={256}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-red-400 bg-opacity-50 rounded-lg">
            <span className="text-white font-bold text-lg sm:text-xl p-2">
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
            ? " absolute h-full w-full bg-black/60 z-5 flex top-0 items-center justify-center col-start-1"
            : "hidden"
        )}
      >
        <section className="flex bg-fondo h-4/5 w-3/5 rounded-3xl p-20 flex-col overflow-y-scroll">
          <span className="flex justify-end -mt-8 mb-3">
            {/* Que cuando Se haga click cambie el estado */}
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
          <h1 className="text-3xl border-b w-full mb-8 flex justify-between ">
            <a
              className="text-3xl"
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
                <h1 className="text-xl w-1/2 flex justify-center">
                  Link al proyecto
                </h1>
              </a>
              <h1 className="text-xl w-1/2 flex justify-center">
                Herramientas
              </h1>
            </div>
            <div className="flex justify-around my-4 ">
              <a
                className="w-1/2 flex justify-center"
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
              {/* Lenguajes usados en el proyecto */}
              <article className="w-1/2 grid grid-rows-5 justify-center gap-4 self-center">
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
          <section className="flex justify-around mb-4">
            <h1 className="text-xl w-1/2 flex justify-center">
              Problemas afrontados
            </h1>
            <h1 className="text-xl w-1/2 flex justify-center">Soluciones</h1>
          </section>
          {/* Primera explicacion  */}
          <div className="flex justify-around gap-20 p-4 mb-4 border-b border-zinc-800">
            <aside className="w-1/2">
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
            <p className="w-1/2">
              <span className="font-semibold text-emerald-400">
                Se incluyó el intervalo en el layout,
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
          <div className="flex justify-around gap-20 p-4 mb-4 border-b border-zinc-800">
            <aside className="w-1/2">
              Se plantea la cuestión de{" "}
              <span className="font-semibold text-emerald-400">
                cómo acceder a cada componente,
              </span>
              considerando que{" "}
              <span className="font-semibold text-emerald-400">
                todos son idénticos y se generan de manera infinita.
              </span>
            </aside>
            <p className="w-1/2">
              Se implementó la{" "}
              <span className="font-semibold text-emerald-400">
                creación de un mapa
              </span>{" "}
              que utiliza la clave de la fila para{" "}
              <span className="font-semibold text-emerald-400">
                asociar un objeto que contiene todos los datos del componente
                respectivo.
              </span>
            </p>
          </div>
          {/* Tercera explicacion */}
          <div className="flex justify-around gap-20 p-4 mb-4 border-b border-zinc-800">
            <p className="w-1/2">
              Adaptar la{" "}
              <span className="font-semibold text-emerald-400">
                version de escritorio a movil.
              </span>
            </p>
            <p className="w-1/2">
              Se consolidan{" "}
              <span className="font-semibold text-emerald-400">
                múltiples columnas en una sola,
              </span>{" "}
              y se implementa una{" "}
              <span className="font-semibold text-emerald-400">
                funcionalidad de navegación mediante flechas
              </span>{" "}
              para alternar entre ellas.
            </p>
          </div>
          {/* Cuarta explicacion */}
          <div className="flex justify-around gap-20 p-4 mb-4 border-b border-zinc-800">
            <p className="w-1/2">
              Conforme avanzaba el juego,{" "}
              <span className="font-semibold text-emerald-400">
                las unidades de medida de las monedas
              </span>{" "}
              se volvían excesivamente grandes e inmanejables.
            </p>
            <p className="w-1/2">
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
