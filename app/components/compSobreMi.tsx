import CajaTitulo from "./cajaTitulo";

export default function SobreMi() {
  return (
    <section className="flex flex-col justify-center order-3 sm:order-1 sm:row-span-3 bg-fondo p-2 rounded-lg hover:scale-105 shadow-lg shadow-red-500">
      <CajaTitulo
        datos={{
          titulo: "Sobre mí",
        }}
      />
      <p className="text-xs sm:text-base p-2">
        Estudiante apasionado por aprender y crecer en un entorno dinámico.
      </p>
      <p className="text-xs sm:text-sm p-2 mb-2 -mt-2">
        Entusiasta de la informática y de la innovación, actualmente, estoy
        cursando un ciclo superior, buscando así, aplicar mis habilidades y
        conocimientos adquiridos en un entorno profesional.
      </p>
    </section>
  );
}
