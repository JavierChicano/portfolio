import CajaTitulo from "./cajaTitulo";

export default function Competencias() {
  return (
    <section className="hidden sm:flex flex-col justify-center order-8 sm:order-1 bg-fondo p-2 rounded-lg hover:scale-105 shadow-lg shadow-red-500">
      <CajaTitulo
        datos={{
          titulo: "Competencias",
        }}
      />
      <ul className="flex flex-col mb-4">
        <li className="flex justify-center">
          <em>Pensamiento analítico</em>
        </li>
        <li className="flex justify-center">
          <em>Proactivo</em>
        </li>
        <li className="flex justify-center">
          <em>Eficiencia y productividad</em>
        </li>
      </ul>
    </section>
  );
}
