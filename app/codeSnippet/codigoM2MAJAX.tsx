import copy from "@/public/copy.png";
import check from "@/public/check.png";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodigoM2MAJAX = () => {
  const codeString = `function insertarRegistro(nombre, apellidos, email, password) {
    //Pasar los datos al php a través del método post
    $.ajax({
        type: "POST",
        url: "BBDD/insertarDatos.php", // Nombre del archivo
        data: {
            funcion: "registro",
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            password: password,
        },
        success: function(response) {
            console.log(response);
            //Comprobacion de la consulta
            if (response.status === "success") {
                sessionStorage.setItem("sesionIniciada", "true");
                sessionStorage.setItem("correoUsuario", email);
                window.location.href = "perfil/perfilMain.html";
            } else {
                //Acciones que hace si es erroneo la consulta
                mensajeError.textContent = response.message;
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
        },
    });
}`;
  const codigoEstilo = {
    padding: "10px",
    fontSize: "12px",
  };

  //Estado
  const [copiar, setCopiar] = useState(false);
  return (
    <div className=" rounded-lg overflow-hidden sm:w-2/3">
      <aside className="flex justify-between px-4 text-white text-sm items-center p-2 bg-emerald-800">
        <p className="text-sm sm:block hidden">Código de ejemplo</p>
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
export default CodigoM2MAJAX;
