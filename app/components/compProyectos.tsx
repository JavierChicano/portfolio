import CajaTitulo from "./cajaTitulo";
import ProyectoCoinClicker from "./proyectoCoinClicker";
import ProyectoMind2Mind from "./proyectoMind2Mind";
import ProyectoSacoba from "./proyectoSacoba";


export default function Proyectos() {
  return (
    <section className="flex flex-col justify-center order-5 sm:order-1 sm:row-span-4 bg-fondo sm:p-2 neumorphism pb-6 p-2 gap-2">
      <CajaTitulo
        datos={{
          titulo: "Proyectos",
        }}
      />
      <ProyectoSacoba />
      <ProyectoMind2Mind/>
      <ProyectoCoinClicker />
    </section>
  );
}
