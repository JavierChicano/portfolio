import Image from "next/image";
import Competencias from "./components/compCompetencias";
import Contact from "./components/compContacto";
import Cursos from "./components/compCursos";
import Nombre from "./components/compNombre";
import Proyectos from "./components/compProyectos";
import SobreMi from "./components/compSobreMi";
import Tecnologias from "./components/compTecnologias";

export default function Home() {
  return (
    <main className="flex flex-col sm:grid sm:grid-cols-4 justify-center m-4 sm:m-8 gap-8">
      <section className="flex justify-center items-center order-1 sm:order-1">
        <div className="relative">
          <Image
            className="h-48 lg:h-64 rounded-full  shadow-lg shadow-red-500"
            src="/foto.png"
            alt="Foto de perfil"
            width={256}
            height={256}
          />
        </div>
      </section>
      <Cursos />
      <Proyectos />
      <SobreMi />
      <Nombre />
      <Tecnologias />
      <Competencias />
      <Contact />
    </main>
  );
}
