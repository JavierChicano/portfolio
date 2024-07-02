import Image from "next/image";

type EmpresaParams = {
    img: string;
    puesto: string;
    tipo: string;
    duracion: string;
    descripcion: string;
  };

export default function Empresa({ datos }: { datos: EmpresaParams }) {
  return (
    <div className="flex gap-6">
      <aside className="flex gap-4 lg:w-2/3">
        <div>
          <Image
            src={`/${datos.img}.png`}
            alt="Foto de perfil"
            width={60}
            height={60}
          />
        </div>
        <article>
          <h1 className="text-xl">{datos.puesto}</h1>
          <h3>{datos.tipo}</h3>
          <h3>{datos.duracion}</h3>
        </article>
      </aside>
      <div className="border border-contraste hidden lg:block"></div>
      <div className="hidden lg:flex flex-wrap max-w-lg self-center">{datos.descripcion}</div>
    </div>
  );
}
