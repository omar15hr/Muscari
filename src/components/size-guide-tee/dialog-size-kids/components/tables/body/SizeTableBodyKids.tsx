import { US } from "../../type-size/body/TypeOfSizeTableBodyCmkids";


const columnas = ["Talla", "Altura", "Pecho", "Contorno cintura"];


export function SizeTableBodyKids({ countrySizes }: any) {


  return (
    <>
      <div className="flex flex-col mt-5">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border-collapse border border-slate-500">
                <thead className="bg-white border-b rounded">
                  <tr>
                    {columnas.map((columna) => (
                      <th scope="col" className="bg-blue-gray-50 text-xs text-black px-6 py-4 text-center border-blue-gray-100">
                        {columna}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {US.map((columna) => (
                    <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                      <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                      <td className="hover:bg-gray-400">{columna.altura}</td>
                      <td className="hover:bg-gray-400">{columna.pecho}</td>
                      <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}