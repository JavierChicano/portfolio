import CajaTitulo from "@/componentes/main/cajaTitulo";
import foto from "@/public/foto.png";
import cursoGit from "@/public/githubCurso.png";
import git from "@/public/github.png";
import ln from "@/public/Linkedin.png";
import gmail from "@/public/gmail.png";
import pageCoin from "@/public/page.jpeg";

export default function Home() {
  return (
    <main className="flex flex-col sm:grid sm:grid-cols-4 justify-center m-4 sm:m-8 gap-8">
      <section className="flex justify-center items-center order-1 sm:order-1">
        <div className="relative">
          <img
            className="h-48 lg:h-64 rounded-full  shadow-lg shadow-red-500"
            src={foto.src}
            alt="Descripción de la imagen"
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
                Curso de git y github, impartida por Microsoft.
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
                Curso de git y github, impartida Microsoft.
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
        <section className="flex justify-center items-center order-1 sm:order-1 mb-4 hover:scale-105">
          <a
            href="https://javierchicano.github.io/coin-clicker-v2/"
            target="_blank"
            className="relative"
          >
            <img
              className="h-40  rounded-lg overflow-hidden shadow-lg shadow-red-500"
              src={pageCoin.src}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-red-400 bg-opacity-50 rounded-lg">
              <span className="text-white font-bold text-lg sm:text-xl p-2">
                CoinClicker
              </span>
            </div>
          </a>
        </section>
        <section className="flex justify-center items-center order-1 sm:order-1 mb-4 hover:scale-105">
          <a
            href="https://javierchicano.github.io/coin-clicker-v2/"
            target="_blank"
            className="relative"
          >
            <img
              className="h-40  rounded-lg overflow-hidden shadow-lg shadow-red-500"
              src={pageCoin.src}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-red-400 bg-opacity-50 rounded-lg">
              <span className="text-white  font-bold text-lg sm:text-xl p-2">
                CoinClicker
              </span>
            </div>
          </a>
        </section>
        <section className="flex justify-center items-center order-1 sm:order-1 mb-4 hover:scale-105">
          <a
            href="https://javierchicano.github.io/coin-clicker-v2/"
            target="_blank"
            className="relative"
          >
            <img
              className="h-40 rounded-lg overflow-hidden shadow-lg shadow-red-500"
              src={pageCoin.src}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-red-400 bg-opacity-50 rounded-lg">
              <span className="text-white font-bold text-lg sm:text-xl p-2">
                CoinClicker
              </span>
            </div>
          </a>
        </section>
      </section>
      <section className="flex flex-col justify-center order-3 sm:order-1 sm:row-span-3 bg-fondo p-2 rounded-lg hover:scale-105 shadow-lg shadow-red-500">
        <div className="sm:-mt-6">
          <CajaTitulo
            datos={{
              titulo: "Sobre mí",
            }}
          />
        </div>

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
        <section className="flex flex-row justify-center gap-2 mb-4">
          <img
            className="h-10 sm:h-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          />
          <img
            className="h-10 sm:h-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
          />
          <img
            className="h-10 sm:h-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
          />
          <img
            className="h-10 sm:h-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
          />
          <img
            className="h-10 sm:h-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <img
            className="h-10 sm:h-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <img
            className="h-10 sm:h-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
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
    </main>
  );
}
