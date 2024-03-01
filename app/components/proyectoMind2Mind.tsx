"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import pageM2M2 from "@/public/Mind2Mind2.png";
import pageM2M from "@/public/Mind2Mind.png";
import html from "@/public/lenguajes/html.png";
import js from "@/public/lenguajes/js.png";
import php from "@/public/lenguajes/php.png";
import css from "@/public/lenguajes/css.png";
import CodigoM2MPHP from "../codeSnippet/codigoM2MPHP";
import CodigoM2MAJAX from "../codeSnippet/codigoM2MAJAX";
import CodigoM2MJS from "../codeSnippet/codigoM2MJS";
import Image from "next/image";

export default function ProyectoMind2Mind() {
  const [verProyecto1, setProyecto1] = useState(false);
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
            className="h-40 w-full rounded-lg overflow-hidden shadow-lg shadow-red-500"
            src="/Mind2Mind.png"
            alt="Proyecto Mind2Mind"
            width={256}
            height={256}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-red-400 bg-opacity-50 rounded-lg">
            <span className="text-white  font-bold text-lg sm:text-xl p-2">
              Mind 2 Mind
            </span>
          </div>
        </article>
      </section>
      {/* Proyecto Mind 2 Mind */}
      <section
        className={cn(
          verProyecto1
            ? "absolute h-full w-full bg-black/60 z-5 top-0 flex items-center justify-center"
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
                <Image
                  className="h-72 w-auto"
                  src="/Mind2Mind2.png"
                  alt="Proyecto Mind2Mind"
                  width={500}
                  height={500}
                />
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
            <aside className="w-1/2 self-center">
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
            </aside>
            <CodigoM2MAJAX />
          </div>
          <div className="flex justify-around gap-20 p-4 mb-4 border-b border-zinc-800">
            <CodigoM2MPHP />
            <aside className="w-1/3 self-center">
              Obteniendo las variables, comprueba con un select a la bbdd si el
              usuario existe, si existe pasa el siguiente mensage al ajax
              "Correo electronico ya registrado", en el caso de que no exista lo
              inserta en la tabla paciente e imprime el mensaje "Resgistro
              exitoso"
              <p className="my-4">
                Por ultimo pasa <span className="italic">$response</span> al
                ajax por medio de <span className="italic">json_encode</span>
              </p>
            </aside>
          </div>
        </section>
      </section>
    </>
  );
}
