import CajaTitulo from "./cajaTitulo";
import CursoGitHub from "./cursoIndividualGit";

export default function Cursos() {
  return (
    <section className="hidden justify-center sm:order-1 sm:col-span-2 bg-fondo sm:flex flex-col p-2 rounded-lg shadow-lg shadow-red-500">
      <CajaTitulo
        datos={{
          titulo: "Cursos",
        }}
      />
      <section className="flex flex-row ml-2 gap-7 justify-center mb-4 ">
        <CursoGitHub />
        <CursoGitHub />
      </section>
    </section>
  );
}
