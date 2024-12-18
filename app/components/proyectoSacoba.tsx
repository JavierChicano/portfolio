"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import next from "@/public/lenguajes/nextjs.png";
import ts from "@/public/lenguajes/ts.png";
import turso from "@/public/lenguajes/turso.webp";
import drizzle from "@/public/lenguajes/drizzle.png";
import tailwind from "@/public/lenguajes/tailwind.png";
import Image from "next/image";

export default function ProyectoSacoba() {
  const [verProyecto1, setProyecto1] = useState(false);
  useEffect(() => {
    const handleKeyPress = (e: { key: string }) => {
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
        className="flex justify-center items-center order-1 sm:order-1 mb-4 hover:scale-105 cursor-pointer "
        onClick={() => {
          setProyecto1(true);
        }}
      >
        <article className="relative w-72">
          <Image
            className="h-40 w-full rounded-lg overflow-hidden boxShadow"
            src="/Sacoba.png"
            alt="Proyecto Sacoba"
            width={256}
            height={256}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-lg">
            <span className="font-bold text-lg sm:text-xl p-2 backdrop-blur-md rounded-xl">
              Sacoba
            </span>
          </div>
        </article>
      </section>
      {/* Proyecto Sacoba */}
      <section
        className={cn(
          verProyecto1
            ? " fixed h-full w-full bg-black/60 z-10 flex top-0 left-0 items-center justify-center"
            : "hidden"
        )}
        onClick={() => {
          setProyecto1(false);
        }}
      >
        <section
          className="flex fondoTarjeta shadow-lg shadow-black/40 sm:h-4/5 sm:w-3/5 sm:rounded-l-3xl h-full w-full p-16 sm:p-20 flex-col overflow-y-scroll"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
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
              href="https://www.sacoba.es/"
              target="_blank"
            >
              Proyecto <span className="text-amber-500">Sacoba</span>
            </a>
            <a
              className="text-xl font-semibold text-emerald-400 italic"
              href="/CodigoSacoba.pdf"
              target="_blank"
            >
              Explicación código detallada
            </a>
          </h1>
          {/* Explicacion de la pagina/juego */}
          <section className="flex flex-col gap-2 mb-8">
            <p>
              El proyecto aborda el desarrollo de una plataforma web para
              Sacoba, una tienda especializada en muebles de cocina.
            </p>
            <p>
              Todos los datos, provienen de la digitalización de un catalógo y
              su posterior insercion en una base de datos, para que la
              información mostrada al usuario sea dinamica y pueda ser editada.
            </p>
            <p>
              Los usuario tienen la posibilidad de disfrutar de todo el proceso
              de compra sin necesidad de estar logueados, desde la
              personalización del producto hasta la compra de él.
            </p>
          </section>
          {/* Lenguajes y link al proyecto */}
          <section className="border-b border-t border-zinc-800 mb-8 ">
            <div className="flex justify-around my-4">
              <a
                className="w-1/2 flex justify-center"
                href="https://www.sacoba.es/"
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
                href="https://www.sacoba.es/"
                target="_blank"
              >
                <Image
                  className="h-72 w-auto"
                  src="/Sacoba2.png"
                  alt="Proyecto Mind2Mind"
                  width={500}
                  height={500}
                />
              </a>
              <h1 className="text-xl sm:hidden flex justify-center pt-5 mb-10 border-t border-zinc-800">
                Herramientas
              </h1>
              {/* Lenguajes usados en el proyecto */}
              <article className="sm:w-1/2 grid grid-rows-4 justify-center gap-5 self-center">
                <div className="flex items-center gap-10">
                  <img src={next.src} className="h-10 w-10"></img>
                  <p>Maquetación de la web</p>
                </div>
                <div className="flex items-center gap-10">
                  <img src={tailwind.src} className="h-10 w-10"></img>
                  <p>Estilos css de la página</p>
                </div>
                <div className="flex items-center gap-10">
                  <img src={ts.src} className="h-10 w-10"></img>
                  <p>Gestión de la lógica</p>
                </div>
                <div className="flex items-center gap-10">
                  <div className="w-10">
                    <img src={drizzle.src}></img>
                  </div>
                  <p>Gestión consultas a la BBDD con sqlite</p>
                </div>
                <div className="flex items-center gap-10">
                  <div className="w-10">
                    <img src={turso.src}></img>
                  </div>
                  <p>Host de la BBDD</p>
                </div>
              </article>
            </div>
          </section>
          {/* Explicacion de las problemas y soluciones */}
          <section className="flex justify-around mb-4">
            <h1 className="text-xl sm:w-1/2 flex justify-center text-center">
              Tecnologías usadas en cada area
            </h1>
          </section>
          {/* Primera explicacion  */}
          <section className="flex flex-col gap-6">
            <p>
              Como lenguaje base se usa React, en el framework de Next.js, para
              la lógica de la web interviene Typescript, y para los estilos CSS
              del frontend se usa Tailwind, la BBDD está hosteada en Turso en
              formato Sqlite, y por medio de Drizzle, se implementan las
              acciones de esta con la web.
            </p>
            <p>
              En cuanto a recibir información por parte del usuario, la que
              viene a través de los forms, se valida con la librería Zod, tanto
              en el lado del cliente como en el de servidor, también se hashean
              las contraseñas con bycrypt, para luego esa información, en el
              caso que sea de registro o logueo, guardarla en un token por medio
              de la librería JsonWebToken, y poder setearlo en las Cookies, para
              que el usuario no tenga que iniciar sesión cada vez que accede o
              refresca la página.{" "}
            </p>
            <p>
              La información del usuario que viene por medio de interactuar con
              la página, se almacena en un primer momento en estados locales del
              propio componente, para una vez recopilado todos los datos
              necesarios, como por ejemplo, la configuración en especifico que
              el cliente ha elegido para un producto, se procede a guardar en
              estados globales, gracias a la librería Zustand, se almacena esa
              selección en forma de objeto con todos los datos, si el usuario
              está usando la página sin haberse registrado se guarda en la tabla
              “carritoLocal” de la base de datos, la cual guarda los productos
              sin relacionarlos con el cliente, en esta tabla se almacena la
              fecha en la que el producto se guardó, lo que permite programar
              una funcion Cron que limpia la tabla de todos los productos que
              lleven mas de 1 semana guardados en ella, y como no tenemos
              clientes, guardamos los ID de esos productos en el LocalStorage
              del cliente. Sin embargo si esta logueado, se procesa y traslada a
              la correspondiente tabla en la BBDD para que perdure en el tiempo.
            </p>
            <p>
              Cabe decir que cada vez que se ejecuta una funcion asyncrona está
              try catcheada para evitar que corte el proceso de ejecución de la
              página en el caso de que esta falle.
            </p>
            <p>
              Por último, para notificar al cliente de; pedidos,
              restablecimiento de contraseña o comunicación con el host, se
              utiliza lo siguiente: La api de Resend junto con React Email, para
              la comunicación por correo de forma automática. Para poder tener
              un dominio propio “@sacoba.es” a la hora de enviar y recibir
              correos, una opción sería pagar el servicio para poder tenerlo o
              bien hacer lo siguiente, gracias a CloudFlare se redireccionan los
              correos que se manden a estos “correos propios” como
              (no-reply@sacoba.es, pedidos@sacoba.es, etc), y se mandan a un
              correo gmail para gestionarlo.{" "}
            </p>
            <p>
              El uso de CloudFlare no se queda ahi, aparte de brindar seguridad
              a la web, permite lo siguiente; la página al vender productos esta
              llena de imagenes, que producen un incremento del ancho de banda
              (por el peso de estas), en las peticiones del servidor de hosteo,
              que en nuestro caso será Vercel, sin hablar de que la web puede
              sufrir un ataque de DDoS, por ello CloudFlare nos ofrece subir las
              imagenes a su plataforma y que en la web en vez de requerir ancho
              de banda por imagenes requiera“peticiones”, de forma que pedir una
              imagen contará como una petición, de esta forma no importa el peso
              de las imagenes y esto deja de ser un problema.
            </p>
          </section>
        </section>
      </section>
    </>
  );
}
