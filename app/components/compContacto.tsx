import CajaTitulo from "./cajaTitulo";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex flex-col justify-center order-9 sm:order-1 bg-fondo p-2 rounded-lg hover:scale-105 shadow-lg shadow-red-500">
      <CajaTitulo
        datos={{
          titulo: "Contact Me",
        }}
      />

      <section className="flex flex-row justify-center ">
        <div className=" flex flex-row justify-center gap-6 mb-4 rounded-lg bg-secundario p-3">
          <a href="https://github.com/JavierChicano" target="_blank">
            <Image
              className="h-10 sm:h-16 hover:scale-105 w-auto"
              src="/github.png"
              alt="Logo github"
              width={200}
              height={200}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/javier-chicano-miguel-28b580297/"
            target="_blank"
          >
            <Image
              className="h-10 sm:h-16 hover:scale-105 w-auto"
              src="/Linkedin.png"
              alt="Logo Linkedin"
              width={200}
              height={200}
            />
          </a>
          <a href="mailto:jchicano43@gmail.com">
            <Image
              className="h-10 sm:h-16 w-auto hover:scale-105 "
              src="/gmail.png"
              alt="Logo Gmail"
              width={200}
              height={200}
            />
          </a>
        </div>
      </section>
    </section>
  );
}
