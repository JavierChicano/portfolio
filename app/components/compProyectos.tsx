import CajaTitulo from "./cajaTitulo";
import ProyectoCoinClicker from "./proyectoCoinClicker";
import ProyectoMind2Mind from "./proyectoMind2Mind";


export default function Proyectos() {
  return (
    <section className="flex flex-col justify-center  order-5 sm:order-1 sm:row-span-4 bg-fondo p-2 rounded-lg shadow-lg shadow-red-500">
      <CajaTitulo
        datos={{
          titulo: "Proyectos",
        }}
      />
      <ProyectoCoinClicker />
      <ProyectoMind2Mind/>
      <ProyectoCoinClicker />
    </section>
  );
}