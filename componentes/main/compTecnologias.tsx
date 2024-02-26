import CajaTitulo from "./cajaTitulo";
// importacion de imagenes de lenguajes
import html from "@/public/lenguajes/html.png";
import js from "@/public/lenguajes/js.png";
import java from "@/public/lenguajes/java.png";
import css from "@/public/lenguajes/css.png";
import react from "@/public/lenguajes/react.png";
import php from "@/public/lenguajes/php.png";
import mysql from "@/public/lenguajes/mysql.png";

export default function Tecnologias() {
  return (
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
  );
}
