import { titleFont } from "@/config/fonts";
import Image from "next/image";

export function Instructions() {


  return (
    <div className="text-black">
      <div className="space-y-12 border-b border-gray-900/10 pb-12" />
      <div className="flex flex-wrap">
        <div className={` ${titleFont.className}`}>
          <h1 className={` ${titleFont.className} text-lg mt-4`}>¿Cómo medir la talla del producto?</h1>
          <h2 className="text-md mt-4 font-semibold">1. Hombro</h2>
          <p className="text-sm mt-1">Mida desde donde la costura del hombro se encuentra con la manga de un lado al otro.</p>
          <h2 className="text-md mt-4 font-semibold">2. Busto</h2>
          <p className="text-sm mt-1">Mida desde los puntos debajo de las axilas de un lado a otro.</p>
          <h2 className="text-md mt-4 font-semibold">3. Largo de vestido/ Largo</h2>
          <p className="text-sm mt-1">Mida desde donde la costura del hombro se une al cuello hasta el dobladillo.</p>
          <h2 className="text-md mt-4 font-semibold">5. Largo de manga</h2>
          <p className="text-sm mt-1">Mida desde donde la costura del hombro se encuentra con la sisa hasta el puño.</p>
        </div>
        <Image
          className=""
          src={"/imgs/imagen-guia-talla.jpg"}
          width={200}
          height={200}
          alt={"Imagen de guia de polera"}
        />
      </div>
    </div>
  );
}