import CajaTitulo from "./cajaTitulo";

export default function SobreMi() {
  return (
    <section className="flex flex-col justify-center order-3 sm:order-1 sm:row-span-3 bg-fondo p-2 rounded-lg hover:scale-105 shadow-lg shadow-red-500">
      <CajaTitulo
        datos={{
          titulo: "Sobre mí",
        }}
      />
      <p className="text-xs sm:text-sm p-2 mb-2 -mt-2">
        Profesional apasionado por el aprendizaje continuo y el desarrollo en
        entornos dinámicos. Con un ferviente interés en la informática y la
        innovación, cuento con experiencia previa en un ciclo superior y estoy
        comprometido a aplicar mis habilidades y conocimientos en un entorno
        profesional.
      </p>
    </section>
  );
}
