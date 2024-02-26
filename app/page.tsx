import foto from "@/public/foto.png";
import Cursos from "@/componentes/main/compCursos";
import Proyectos from "@/componentes/main/compProyectos";
import SobreMi from "@/componentes/main/compSobreMi";
import Nombre from "@/componentes/main/compNombre";
import Tecnologias from "@/componentes/main/compTecnologias";
import Competencias from "@/componentes/main/compCompetencias";
import Contact from "@/componentes/main/compContacto";

export default function Home() {
  return (
    <main className="flex flex-col sm:grid sm:grid-cols-4 justify-center m-4 sm:m-8 gap-8">
      <section className="flex justify-center items-center order-1 sm:order-1">
        <div className="relative">
          <img
            className="h-48 lg:h-64 rounded-full  shadow-lg shadow-red-500"
            src={foto.src}
            alt="Foto de perfil"
          ></img>
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
