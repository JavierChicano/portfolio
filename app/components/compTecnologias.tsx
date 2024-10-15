import CajaTitulo from "./cajaTitulo";
import Image from "next/image";

export default function Tecnologias() {
  return (
    <section className="flex flex-col order-5 sm:order-1 sm:col-span-2 bg-fondo p-2 neumorphism">
      <CajaTitulo
        datos={{
          titulo: "Tecnologías",
        }}
      />
      <section className="flex flex-row justify-center gap-6 mb-4 mt-2 flex-wrap px-10">
        <Image
          className="h-10 w-auto sm:h-16 "
          src="/lenguajes/react.png"
          width={100}
          height={100}
          alt="React logo"
        />
        <Image
          className="h-10 w-auto sm:h-16 "
          src="/lenguajes/php.png"
          width={100}
          height={100}
          alt="PHP logo"
        />
        <Image
          className="h-10 w-auto sm:h-16 "
          src="/lenguajes/java.png"
          width={100}
          height={100}
          alt="Java logo"
        />
        
        <Image
          className="h-10 w-auto sm:h-16 "
          src="/lenguajes/js.png"
          width={100}
          height={100}
          alt="JS logo"
        />
        <Image
          className="h-10 w-auto sm:h-16 "
          src="/lenguajes/html.png"
          width={100}
          height={100}
          alt="HTML logo"
        />
        <Image
          className="h-10 w-auto sm:h-16 "
          src="/lenguajes/css.png"
          width={100}
          height={100}
          alt="CSS logo"
        />
        <Image
          className="h-10 w-auto sm:h-16 "
          src="/lenguajes/mysql.png"
          width={100}
          height={100}
          alt="MySQL logo"
        />
      </section>
    </section>
  );
}
