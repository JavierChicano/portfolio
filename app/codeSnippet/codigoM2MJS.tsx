import copy from "@/public/copy.png";
import check from "@/public/check.png";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodigoM2MJS = () => {
  const codeString = `formRegistro.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombreRegistro").value;
    var apellidos = document.getElementById("apellidosRegistro").value;
    var email = document.getElementById("emailRegistro").value;
    var password = document.getElementById("passwordRegistro").value;
    //Se validan los formularios

    //Se llama al método que los pasa através de ajax al php
    insertarRegistro(nombre, apellidos, email, password);
  }`;
  const codigoEstilo = {
    padding: "10px",
    fontSize: "12px",
  };

  //Estado
  const [copiar, setCopiar] = useState(false);
  return (
    <div className="bg-emerald-800 rounded-lg overflow-hidden">
      <aside className="flex justify-between px-4 text-white text-sm items-center p-2">
        <p className="text-sm">Código de ejemplo</p>
        {copiar ? (
          <button className="py-1 items-center gap-2 flex">
            <img style={{ width: "15px" }} src={check.src}></img>
            ¡Copiado!
          </button>
        ) : (
          <button className="py-1 items-center gap-2 flex" onClick={()=>{
            //Copiar el codigo al portalpapeles
            navigator.clipboard.writeText(codeString)
            setCopiar(true)
            setTimeout(()=>{
              setCopiar(false);
            }, 3000)
          }}>
            <img style={{ width: "15px" }} src={copy.src}></img>
            Copiar código
          </button>
        )}
      </aside>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={codigoEstilo}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
export default CodigoM2MJS;
