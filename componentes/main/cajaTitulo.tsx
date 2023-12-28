
type CajaTituloParams = {
    titulo: string;
  };
  
  export default function CajaTitulo({ datos }: { datos: CajaTituloParams }) {
    const { titulo } = datos;
    return (
        <div className="flex p-2">
          <h1 className="text-xl sm:text-2xl mb-2 rounded-lg p-2 bg-contraste">
           {titulo}
          </h1>
        </div>
    )
}