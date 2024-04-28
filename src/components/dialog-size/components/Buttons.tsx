import { useState } from "react";


export function Buttons({onTypeOfMeasur}:any) {
  const [boton1Activo, setBoton1Activo] = useState(true);
  const [boton2Activo, setBoton2Activo] = useState(false);

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
        className={boton1Activo ? "bg-blue-500 rounded" : 'bg-blue-200 rounded'}
      >
        Medidas del Producto
      </button>
      <button 
        onClick={handleClickBody}
        className={boton2Activo ? "bg-red-500 rounded" : 'bg-red-200 rounded'}
      >
        Medidas del Cuerpo
      </button>
    </div>
  )
}