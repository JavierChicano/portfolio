"use client";
import CajaTitulo from "@/componentes/main/cajaTitulo";
import CodigoM2MJS from "@/codeSnippet/codigoM2MJS";
import foto from "@/public/foto.png";
import cursoGit from "@/public/githubCurso.png";
import git from "@/public/github.png";
import ln from "@/public/Linkedin.png";
import close from "@/public/close.png";
import gmail from "@/public/gmail.png";
import pageCoin from "@/public/CoinClicker.png";
import pageCoin2 from "@/public/CoinClicker2.png";
import pageM2M from "@/public/Mind2Mind.png";
import pageM2M2 from "@/public/Mind2Mind2.png";

// importacion de imagenes de lenguajes
import html from "@/public/lenguajes/html.png";
import js from "@/public/lenguajes/js.png";
import java from "@/public/lenguajes/java.png";
import css from "@/public/lenguajes/css.png";
import react from "@/public/lenguajes/react.png";
import php from "@/public/lenguajes/php.png";
import zustand from "@/public/lenguajes/zustand.png";
import mysql from "@/public/lenguajes/mysql.png";
import nextjs from "@/public/lenguajes/nextjs.png";
import ts from "@/public/lenguajes/ts.png";
import tailwind from "@/public/lenguajes/tailwind.png";
import { useState } from "react";
import CodigoM2MAJAX from "@/codeSnippet/codigoM2MAJAX";
import CodigoM2MPHP from "@/codeSnippet/codigoM2MPHP";
import { cn } from "@/lib/utils";

export default function Home() {
  const [verProyecto1, setProyecto1] = useState(false);
  const [verProyecto2, setProyecto2] = useState(false);
  console.log(verProyecto2);

  return (
    <>
      <main className="flex flex-col sm:grid sm:grid-cols-4 justify-center m-4 sm:m-8 gap-8">
        <section className="flex justify-center items-center order-1 sm:order-1">
          <div className="relative">
            <img
              className="h-48 lg:h-64 rounded-full  shadow-lg shadow-red-500"
              src={foto.src}
              alt="Foto de perfil"
            ></img>
          </div>
        </section>

        <section className="hidden justify-center sm:order-1 sm:col-span-2 bg-fondo sm:flex flex-col p-2 rounded-lg shadow-lg shadow-red-500">
          <CajaTitulo
            datos={{
              titulo: "Cursos",
            }}
          />
          <section className="flex flex-row ml-2 gap-7 justify-center mb-4 ">
            <article className="bg-secundario rounded-lg p-2 relative hover:scale-105 shadow shadow-white hover:shadow-red-500">
              <img
                className="h-40"
                src={cursoGit.src}
                alt="Descripción del contenido"
              />
              <h1 className="text-xs p-2 absolute bottom-10 flex items-center justify-center bg-contraste rounded-r-lg">
                GitHub Universe Cloud Skills Challenge
              </h1>
              <div className="flex mt-2">
                <p className="text-sm">
                  Curso de git y github, impartido por Microsoft.
                </p>
              </div>
            </article>

            <article className="bg-secundario rounded-lg p-2 relative hidden xl:block hover:scale-105 shadow shadow-white hover:shadow-red-500 ">
              <img
                className="h-40"
                src={cursoGit.src}
                alt="Descripción del contenido"
              />
              <h1 className="text-xs p-2 absolute bottom-10 flex items-center justify-center bg-contraste rounded-r-lg">
                GitHub Universe Cloud Skills Challenge
              </h1>
              <div className="flex mt-2">
                <p className="text-sm">
                  Curso de git y github, impartido Microsoft.
                </p>
              </div>
            </article>
          </section>
        </section>
        <section className="flex flex-col justify-center  order-5 sm:order-1 sm:row-span-4 bg-fondo p-2 rounded-lg shadow-lg shadow-red-500">
          <CajaTitulo
            datos={{
              titulo: "Proyectos",
            }}
          />
          <section
            className="flex justify-center items-center order-1 sm:order-1 mb-4 hover:scale-105 cursor-pointer"
            onClick={() => {
              setProyecto1(true);
            }}
          >
            <article className="relative w-72">
              <img
                className="h-40 w-full rounded-lg overflow-hidden shadow-lg shadow-red-500"
                src={pageCoin.src}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-red-400 bg-opacity-50 rounded-lg">
                <span className="text-white font-bold text-lg sm:text-xl p-2">
                  CoinClicker
                </span>
              </div>
            </article>
          </section>
          <section
            className="flex justify-center items-center order-1 sm:order-1 mb-4 hover:scale-105 cursor-pointer "
            onClick={() => {
              setProyecto2(true);
            }}
          >
            <article className="relative w-72">
              <img
                className="h-40  rounded-lg overflow-hidden shadow-lg shadow-red-500"
                src={pageM2M.src}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-red-400 bg-opacity-50 rounded-lg">
                <span className="text-white  font-bold text-lg sm:text-xl p-2">
                  Mind 2 Mind
                </span>
              </div>
            </article>
          </section>
          <section
            className="flex justify-center items-center order-1 sm:order-1 mb-4 hover:scale-105 cursor-pointer"
            onClick={() => {
              setProyecto1(true);
            }}
          >
            <article className="relative w-72">
              <img
                className="h-40 w-full rounded-lg overflow-hidden shadow-lg shadow-red-500"
                src={pageCoin.src}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-red-400 bg-opacity-50 rounded-lg">
                <span className="text-white font-bold text-lg sm:text-xl p-2">
                  CoinClicker
                </span>
              </div>
            </article>
          </section>
        </section>
        <section className="flex flex-col justify-center order-3 sm:order-1 sm:row-span-3 bg-fondo p-2 rounded-lg hover:scale-105 shadow-lg shadow-red-500">
          <CajaTitulo
            datos={{
              titulo: "Sobre mí",
            }}
          />

          <p className="text-xs sm:text-base p-2">
            Estudiante apasionado por aprender y crecer en un entorno dinámico.
          </p>
          <p className="text-xs sm:text-sm p-2 mb-2 -mt-2">
            Entusiasta de la informática y de la innovación, actualmente, estoy
            cursando un ciclo superior, buscando así, aplicar mis habilidades y
            conocimientos adquiridos en un entorno profesional.
          </p>
        </section>
        <section className="flex flex-col order-2 sm:order-1 sm:grid sm:col-span-2 sm:row-span-3 bg-fondo p-2 rounded-lg hover:scale-105 shadow-lg shadow-red-500">
          <div className="flex items-end justify-center">
            <h1 className="text-5xl lg:text-7xl flex justify-center">
              Javier Chicano
            </h1>
          </div>
          <h2 className="text-xl flex justify-center lg:-mb-20">
            <em>Desarrollador Web Full Stack</em>
          </h2>
          <a
            href="/CV.pdf"
            target="_blank"
            className="flex items-start justify-center"
          >
            <button className="bg-contraste p-2 rounded-lg text-sm mt-1 mb-1 lg:text-base lg:-mt-4">
              Abrir CV
            </button>
          </a>
        </section>

        <section className="flex flex-col justify-center order-4 sm:order-1 sm:col-span-2 bg-fondo p-2 rounded-lg hover:scale-105 shadow-lg shadow-red-500">
          <CajaTitulo
            datos={{
              titulo: "Tecnologías",
            }}
          />
          <section className="flex flex-row justify-center gap-6 mb-4 mt-2">
            <img className="h-10 sm:h-16" src={react.src} />
            <img className="h-10 sm:h-16" src={php.src} />
            <img className="h-10 sm:h-16" src={java.src} />
            <img className="h-10 sm:h-16" src={js.src} />
            <img className="h-10 sm:h-16" src={html.src} />
            <img className="h-10 sm:h-16" src={css.src} />
            <img className="h-10 sm:h-16" src={mysql.src} />
          </section>
        </section>
        <section className="hidden sm:flex flex-col justify-center order-8 sm:order-1 bg-fondo p-2 rounded-lg hover:scale-105 shadow-lg shadow-red-500">
          <CajaTitulo
            datos={{
              titulo: "Competencias",
            }}
          />
          <ul className="flex flex-col mb-4">
            <li className="flex justify-center">
              <em>Pensamiento analítico</em>
            </li>
            <li className="flex justify-center">
              <em>Proactivo</em>
            </li>
            <li className="flex justify-center">
              <em>Eficiencia y productividad</em>
            </li>
          </ul>
        </section>
        <section className="flex flex-col justify-center order-9 sm:order-1 bg-fondo p-2 rounded-lg hover:scale-105 shadow-lg shadow-red-500">
          <CajaTitulo
            datos={{
              titulo: "Contact Me",
            }}
          />

          <section className="flex flex-row justify-center ">
            <div className=" flex flex-row justify-center gap-6 mb-4 rounded-lg bg-secundario p-3">
              <a href="https://github.com/JavierChicano" target="_blank">
                <img
                  className="h-10 sm:h-16 hover:scale-105"
                  src={git.src}
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/javier-chicano-miguel-28b580297/"
                target="_blank"
              >
                <img
                  className="h-10 sm:h-16 hover:scale-105"
                  src={ln.src}
                ></img>
              </a>
              <a href="mailto:jchicano43@gmail.com">
                {" "}
                <img
                  className="h-10 sm:h-16 hover:scale-105"
                  src={gmail.src}
                  alt="Gmail"
                ></img>
              </a>
            </div>
          </section>
        </section>
      </main>

      {/* Vetanas modales de los proyectos */}
      {/* Proyecto Coin Clicker */}
      <section
        className={cn(
          verProyecto1
            ? " absolute h-full w-full bg-black/60 z-5 top-0 flex items-center justify-center"
            : "hidden"
        )}
      >
        <section className="flex bg-fondo h-4/5 w-3/5 rounded-3xl p-20 flex-col overflow-y-scroll">
          <span className="flex justify-end -mt-8 mb-3">
            {/* Que cuando Se haga click cambie el estado */}
            <img
              src={close.src}
              className="w-10 cursor-pointer"
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
                <img src={pageCoin2.src} className="h-72"></img>
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
            <p className="w-1/2">
              Se han generado múltiples intervalos debido a la{" "}
              <span className="font-semibold text-emerald-400">
                generación repetitiva de componentes.
              </span>{" "}
              Esta situación emerge al generar componentes de forma infinita, lo
              que resulta en la{" "}
              <span className="font-semibold text-emerald-400">
                creación ilimitada de intervalos.
              </span>
            </p>
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
            <p className="w-1/2">
              Se plantea la cuestión de{" "}
              <span className="font-semibold text-emerald-400">
                cómo acceder a cada componente,
              </span>
              considerando que{" "}
              <span className="font-semibold text-emerald-400">
                todos son idénticos y se generan de manera infinita.
              </span>
            </p>
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
      {/* Proyecto Mind 2 Mind */}
      <section
        className={cn(
          verProyecto2
            ? "absolute h-full w-full bg-black/60 z-5 top-0 flex items-center justify-center"
            : "hidden"
        )}
      >
        <section className="flex bg-fondo h-4/5 w-3/5 rounded-3xl p-20 flex-col overflow-y-scroll">
          <span className="flex justify-end -mt-8 mb-3">
            {/* Que cuando Se haga click cambie el estado */}
            <img
              src={close.src}
              className="w-10 cursor-pointer"
              onClick={() => {
                setProyecto2(false);
              }}
            />
          </span>
          <h1 className="text-3xl border-b w-full mb-8 flex justify-between ">
            <a
              className="text-3xl"
              href="https://javierchicano.github.io/Mind2Mind/"
              target="_blank"
            >
              Proyecto <span className="text-teal-400">Mind 2 Mind</span>
            </a>
            <a
              className="text-xl font-semibold text-emerald-400 italic"
              href="https://github.com/JavierChicano/Mind2Mind"
              target="_blank"
            >
              Github del proyecto
            </a>
          </h1>
          {/* Explicacion de la pagina/juego */}
          <section className="flex flex-col gap-2 mb-8">
            <p>
              Proyecto que ofrece una representación realista y funcional de un
              sitio web sobre el tratamiento del trastorno bipolar.
            </p>
            <p>
              Todos los datos, incluyendo información sobre terapias,
              especialistas, etc., así como los generados por el usuario, son
              almacenados en una base de datos local.
            </p>
            <p>
              Pudiendo así ofrecer la funcionalidad de{" "}
              <span className="italic">perfil,</span> que permite a los usuarios
              modificar sus datos, añadir terapias a favoritos, solicitar citas
              y comunicarse con especialistas a través de un chat.
            </p>
          </section>
          {/* Lenguajes y link al proyecto */}
          <section className="border-b border-t border-zinc-800 mb-8 ">
            <div className="flex justify-around my-4">
              <a
                className="w-1/2 flex justify-center"
                href="https://javierchicano.github.io/Mind2Mind/"
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
                href="https://javierchicano.github.io/Mind2Mind/"
                target="_blank"
              >
                <img src={pageM2M2.src} className="h-72"></img>
              </a>
              {/* Lenguajes usados en el proyecto */}
              <article className="w-1/2 grid grid-rows-4 justify-center gap-5 self-center">
                <div className="flex items-center gap-10">
                  <img src={html.src} className="h-10 w-10"></img>
                  <p>Maquetación de la web</p>
                </div>
                <div className="flex items-center gap-10">
                  <img src={css.src} className="h-10 w-10"></img>
                  <p>Estilos css de la página</p>
                </div>
                <div className="flex items-center gap-10">
                  <img src={js.src} className="h-10 w-10"></img>
                  <p>Gestión de la lógica</p>
                </div>
                <div className="flex items-center gap-10">
                  <div className="w-10">
                    <img src={php.src}></img>
                  </div>
                  <p>Gestión de la BBDD y sus consultas</p>
                </div>
              </article>
            </div>
          </section>
          {/* Explicacion de las problemas y soluciones */}
          <section className="flex justify-around mb-4">
            <h1 className="text-xl w-1/2 flex justify-center">
              Explicación del funcionamiento interno
            </h1>
          </section>
          {/* Primera explicacion  */}
          <div className="flex justify-around gap-20 p-4 mb-4 border-b border-zinc-800">
            <CodigoM2MJS />
            <p className="w-1/2 self-center">
              Una vez que el usuario envía el formulario con sus datos, el
              código JavaScript captura los valores de los campos y los valida.
              Una vez confirmada su corrección, invoca el método
              <span className="italic"> insertarRegistro,</span> pasando como
              parámetros las variables que contienen los valores de los campos
              del formulario.
            </p>
          </div>
          <div className="flex justify-around gap-20 p-4 mb-4 border-b border-zinc-800">
            <p className="w-1/2 self-center">
              Este es el método{" "}
              <span className="italic"> insertarRegistro,</span> que utiliza la
              función $.ajax() de jQuery para enviar datos al archivo php
              especificado, a través del método POST.
              <p className="my-4">
                El nombre <span className="italic"> function,</span> corresponde
                al caso concreto del switch de casos que contiene el archivo
                php.
              </p>
              <p>
                Cuando se completa la solicitud con éxito, se verifica la
                respuesta del servidor y se establecen algunas variables de
                sesión mediante <span className="italic">sessionStorage</span> y
                se redirige al usuario a la página perfil/perfilMain.html
              </p>
            </p>
            <CodigoM2MAJAX />
          </div>
          <div className="flex justify-around gap-20 p-4 mb-4 border-b border-zinc-800">
            <CodigoM2MPHP />
            <p className="w-1/3 self-center">
              Obteniendo las variables, comprueba con un select a la bbdd si el
              usuario existe, si existe pasa el siguiente mensage al ajax
              "Correo electronico ya registrado", en el caso de que no exista lo
              inserta en la tabla paciente e imprime el mensaje "Resgistro
              exitoso"
              <p className="my-4">
                Por ultimo pasa <span className="italic">$response</span> al
                ajax por medio de <span className="italic">json_encode</span>
              </p>
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
