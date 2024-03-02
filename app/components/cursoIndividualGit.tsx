import Image from "next/image";

export default function CursoGitHub() {
    return (
        <article className="bg-secundario rounded-lg p-2 relative hidden sm:block hover:scale-105 shadow shadow-white hover:shadow-red-500 ">
          <Image
            className="h-40 w-full"
            src="/githubCurso.png"
            alt="Imagen curso"
            width={200}
            height={200}
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
    )}