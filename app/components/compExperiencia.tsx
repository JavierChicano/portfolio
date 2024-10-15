import CajaTitulo from "./cajaTitulo";
import Empresa from "./experienciaEmpresa";

const descripcionDeloitte = "En Delivery Analyst Financial Crime and Fraud Prevention, trabajando con clientes y la herramienta Actimize"

export default function Experiencia() {
  return (
    <section className="order-4 sm:order-1 sm:col-span-2 flex flex-col p-2 neumorphism">
      <CajaTitulo
        datos={{
          titulo: "Experiencia",
        }}
      />
      <section className="flex flex-col ml-2 gap-7 justify-center">
        <Empresa
          datos={{
            img: "deloitteLogo",
            puesto: "Prácticas",
            tipo: "Deloitte - Jornada Completa",
            duracion: "abril 2024 - junio 2024 . 3 meses",
            descripcion: descripcionDeloitte,
          }}
        />
      </section>
    </section>
  );
}
