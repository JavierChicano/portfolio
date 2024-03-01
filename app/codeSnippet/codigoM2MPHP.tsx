import copy from "@/public/copy.png";
import check from "@/public/check.png";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodigoM2MPHP = () => {
  const codeString = `switch ($funcion) {
    case 'registro':
        //Coger valores del ajax
        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Preparar la consulta de inserción para el caso de registro
        $verificarExistencia = "SELECT correoElectronico FROM paciente 
        WHERE correoElectronico = '$email'";
        $resultadoVerificacion = $conexion->query($verificarExistencia);

        if ($resultadoVerificacion->num_rows > 0) {
            // Ya existe un registro con esa clave primaria
            $response = array('status' => 'error', 
            'message' => 'Correo electrónico ya registrado');
        } else {
            // No existe un registro con esa clave primaria, 
            // proceder con la inserción
            $sql = "INSERT INTO paciente 
            (correoElectronico, nombre, apellidos, contraseña) 
            VALUES ('$email', '$nombre', '$apellidos', '$password')";

            if ($conexion->query($sql) === TRUE) {
                // La inserción fue exitosa
                $response = array('status' => 'success', 
                'message' => 'Registro exitoso');
            } else {
                // Hubo un error en la inserción
                $response = array('status' => 'error', 
                'message' => 'Error en el registro: ' . $conexion->error);
            }
        }
        break;
        json_encode($response);`;
  const codigoEstilo = {
    padding: "10px",
    fontSize: "12px",
  };

  //Estado
  const [copiar, setCopiar] = useState(false);
  return (
    <div className="bg-emerald-800 rounded-lg overflow-hidden sm:w-2/3">
      <aside className="flex justify-between px-4 text-white text-sm items-center p-2">
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
export default CodigoM2MPHP;
