export default function Nombre() {
  return (
    <section className="flex flex-col order-2 sm:order-1 sm:grid sm:col-span-2 sm:row-span-3 bg-fondo sm:p-2 py-6  rounded-lg hover:scale-105 shadow-lg shadow-red-500">
      <div className="flex items-end justify-center">
        <h1 className="text-5xl lg:text-7xl flex justify-center">
          Javier Chicano
        </h1>
      </div>
      <h2 className="text-xl flex justify-center lg:-mb-20">
        <em>Desarrollador Web Full Stack</em>
      </h2>
      <a
        href="/CV.pdf"
        target="_blank"
        className="flex items-start justify-center"
      >
        <button className="bg-contraste p-2 rounded-lg text-sm mt-1 mb-1 lg:text-base lg:-mt-4">
          Abrir CV
        </button>
      </a>
    </section>
  );
}
