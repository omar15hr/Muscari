import { useState } from "react";


export function ButtonsKids({onTypeOfMeasur}:any) {
  const [boton1Activo, setBoton1Activo] = useState(false);
  const [boton2Activo, setBoton2Activo] = useState(true);

  const handleClickProduct = () => {
    onTypeOfMeasur('product');
    setBoton1Activo(true);
    setBoton2Activo(false);
  };

  const handleClickBody = () => {
    onTypeOfMeasur('body');
    setBoton1Activo(false);
    setBoton2Activo(true);
  };




  return (
    <div className="flex flex-wrap gap-5 items-center justify-center mt-5">
      <button 
        onClick={handleClickProduct}
        className={
          boton1Activo 
            ? "bg-blue-800 rounded p-3 text-white w-60" 
            : 'bg-blue-200 rounded p-3 text-white w-60'}
      >
        Medidas del Producto
      </button>
      <button 
        onClick={handleClickBody}
        className={
          boton2Activo 
            ? "bg-blue-800 rounded p-3 text-white w-60" 
            : 'bg-blue-200 rounded p-3 text-white w-60'}
      >
        Medidas del Cuerpo
      </button>
    </div>
  )
}