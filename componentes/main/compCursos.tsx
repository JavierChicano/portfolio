import CajaTitulo from "./cajaTitulo";
import cursoGit from "@/public/githubCurso.png";


  export default function Cursos() {
    return (
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
    )
}