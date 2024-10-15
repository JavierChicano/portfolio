import Image from "next/image";
import Competencias from "./components/compCompetencias";
import Contact from "./components/compContacto";
import Nombre from "./components/compNombre";
import Proyectos from "./components/compProyectos";
import SobreMi from "./components/compSobreMi";
import Tecnologias from "./components/compTecnologias";
import Experiencia from "./components/compExperiencia";

export default function Home() {
  return (
    <main className="flex flex-col sm:grid sm:grid-cols-4 justify-center mt-8 m-4 gap-8">
      <section className="flex justify-center items-center order-1 sm:order-1">
        <div className="relative">
          <Image
            className="h-48 lg:h-64 w-auto rounded-full boxShadow"
            src="/foto.png"
            alt="Foto de perfil"
            width={256}
            height={256}
          />
        </div>
      </section>
      <Experiencia />
      <Proyectos />
      <SobreMi />
      <Nombre />
      <Tecnologias />
      <Competencias />
      <Contact />
    </main>
  );
}
