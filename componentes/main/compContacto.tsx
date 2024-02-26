import CajaTitulo from "./cajaTitulo";
import git from "@/public/github.png";
import ln from "@/public/Linkedin.png";
import gmail from "@/public/gmail.png";

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
            <img className="h-10 sm:h-16 hover:scale-105" src={git.src}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/javier-chicano-miguel-28b580297/"
            target="_blank"
          >
            <img className="h-10 sm:h-16 hover:scale-105" src={ln.src}></img>
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
  );
}
