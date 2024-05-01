import { titleFont } from "@/config/fonts";
import Image from "next/image";

const bodyInstructions = [
  {
    title: '1. Tu Busto',
    description: 'Mide la circunferencia sobre la parte más completa de tu pecho.'
  },
  {
    title: '2. Tu Cintura',
    description: 'Mida desde los puntos debajo de las axilas de un lado a otro.'
  },
  {
    title: '3. Tus Caderas',
    description: 'Mide el contorno total de tus caderas'
  },
];

const productInstructions = [
  {
    title: '1. Hombro',
    description: 'Mida desde donde la costura del hombro se encuentra con la manga de un lado al otro.'
  },
  {
    title: '2. Busto',
    description: 'Mida desde los puntos debajo de las axilas de un lado a otro.'
  },
  {
    title: '3. Largo de vestido/ Largo',
    description: 'Mida desde donde la costura del hombro se une al cuello hasta el dobladillo.'
  },
  {
    title: '4. Largo de manga',
    description: 'Mida desde donde la costura del hombro se encuentra con la sisa hasta el puño.'
  },
];



export function Instructions({typeItem}: any) {


  return (
    <div className="text-black">
      <div className="space-y-12 border-b border-gray-900/10 pb-12" />
      <div className="flex flex-wrap items-center justify-center">
        <div className={` ${titleFont.className} `}>
          <h1 className={` ${titleFont.className} text-lg mt-4`}>¿Cómo medir la talla del producto?</h1>
          {
            typeItem === 'body'
              ? (bodyInstructions.map((item) => (
                  <div key={item.title}>
                    <h2 className="text-md mt-4 font-semibold">{item.title}</h2>
                    <p className="text-sm mt-1">{item.description}</p>
                  </div>
                )))
              : (productInstructions.map((item) => (
                  <div key={item.title}>
                    <h2 className="text-md mt-4 font-semibold">{item.title}</h2>
                    <p className="text-sm mt-1">{item.description}</p>
                  </div>
                )))
          }
        </div>
        {
          typeItem === 'product'
          ? (<Image
            className=""
            src={"/imgs/imagen-guia-talla.jpg"}
            width={200}
            height={200}
            alt={"Imagen de guia de polera"}
          />)
          : (<Image
            className=""
            src={"/imgs/body-instruction.jpg"}
            width={200}
            height={200}
            alt={"Imagen de guia de polera"}
          />)
        }
      </div>
    </div>
  );
}