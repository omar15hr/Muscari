import { AU_inches, BR_inches, DE_inches, EU_inches, FR_inches, IT_inches, JP_inches, MX_inches, SG_inches, UK_inches, US_inches } from "../../type-size/body/TypeOfSizeTableBodyIn";



const columnas = ["Talla", "Tipo de talla", "Altura", "Pecho", "Contorno cintura", "Contorno caderas"];


export function SizeTableInBody({ countrySizes }: any) {


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
                      <th scope="col" key={columna} className="bg-blue-gray-50 text-xs text-black px-6 py-4 text-center border-blue-gray-100">
                        {columna}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {
                    countrySizes === 'US'
                      ?
                      (US_inches.map((columna) => (
                        <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                          <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                          <td className="hover:bg-gray-400">{columna.us}</td>
                          <td className="hover:bg-gray-400">{columna.altura}</td>
                          <td className="hover:bg-gray-400">{columna.pecho}</td>
                          <td className="hover:bg-gray-400">{columna.contorno_cintura}</td>
                          <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                        </tr>
                      )))

                      : countrySizes === 'BR'
                        ?
                        (BR_inches.map((columna) => (
                          <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                            <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                            <td className="hover:bg-gray-400">{columna.br}</td>
                            <td className="hover:bg-gray-400">{columna.altura}</td>
                            <td className="hover:bg-gray-400">{columna.pecho}</td>
                            <td className="hover:bg-gray-400">{columna.contorno_cintura}</td>
                            <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                          </tr>
                        )))
                        : countrySizes === 'EU'
                          ?
                          (EU_inches.map((columna) => (
                            <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                              <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                              <td className="hover:bg-gray-400">{columna.eu}</td>
                              <td className="hover:bg-gray-400">{columna.altura}</td>
                              <td className="hover:bg-gray-400">{columna.pecho}</td>
                              <td className="hover:bg-gray-400">{columna.contorno_cintura}</td>
                              <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                            </tr>
                          )))
                          : countrySizes === 'DE'
                            ?
                            (DE_inches.map((columna) => (
                              <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                                <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                                <td className="hover:bg-gray-400">{columna.de}</td>
                                <td className="hover:bg-gray-400">{columna.altura}</td>
                                <td className="hover:bg-gray-400">{columna.pecho}</td>
                                <td className="hover:bg-gray-400">{columna.contorno_cintura}</td>
                                <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                              </tr>
                            )))

                            : countrySizes === 'SG'
                              ?
                              (SG_inches.map((columna) => (
                                <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                                  <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                                  <td className="hover:bg-gray-400">{columna.sg}</td>
                                  <td className="hover:bg-gray-400">{columna.altura}</td>
                                  <td className="hover:bg-gray-400">{columna.pecho}</td>
                                  <td className="hover:bg-gray-400">{columna.contorno_cintura}</td>
                                  <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                                </tr>
                              )))

                              : countrySizes === 'AU'
                                ?
                                (AU_inches.map((columna) => (
                                  <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                                    <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                                    <td className="hover:bg-gray-400">{columna.au}</td>
                                    <td className="hover:bg-gray-400">{columna.altura}</td>
                                    <td className="hover:bg-gray-400">{columna.pecho}</td>
                                    <td className="hover:bg-gray-400">{columna.contorno_cintura}</td>
                                    <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                                  </tr>
                                )))

                                : countrySizes === 'JP'
                                  ?
                                  (JP_inches.map((columna) => (
                                    <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                                      <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                                      <td className="hover:bg-gray-400">{columna.jp}</td>
                                      <td className="hover:bg-gray-400">{columna.altura}</td>
                                      <td className="hover:bg-gray-400">{columna.pecho}</td>
                                      <td className="hover:bg-gray-400">{columna.contorno_cintura}</td>
                                      <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                                    </tr>
                                  )))
                                  : countrySizes === 'UK'
                                    ?
                                    (UK_inches.map((columna) => (
                                      <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                                        <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                                        <td className="hover:bg-gray-400">{columna.uk}</td>
                                        <td className="hover:bg-gray-400">{columna.altura}</td>
                                        <td className="hover:bg-gray-400">{columna.pecho}</td>
                                        <td className="hover:bg-gray-400">{columna.contorno_cintura}</td>
                                        <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                                      </tr>
                                    )))
                                    : countrySizes === 'IT'
                                      ?
                                      (IT_inches.map((columna) => (
                                        <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                                          <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                                          <td className="hover:bg-gray-400">{columna.it}</td>
                                          <td className="hover:bg-gray-400">{columna.altura}</td>
                                          <td className="hover:bg-gray-400">{columna.pecho}</td>
                                          <td className="hover:bg-gray-400">{columna.contorno_cintura}</td>
                                          <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                                        </tr>
                                      )))
                                      : countrySizes === 'MX'
                                        ?
                                        (MX_inches.map((columna) => (
                                          <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                                            <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                                            <td className="hover:bg-gray-400">{columna.mx}</td>
                                            <td className="hover:bg-gray-400">{columna.altura}</td>
                                            <td className="hover:bg-gray-400">{columna.pecho}</td>
                                            <td className="hover:bg-gray-400">{columna.contorno_cintura}</td>
                                            <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                                          </tr>
                                        )))
                                        : countrySizes === 'FR'
                                          ?
                                          (FR_inches.map((columna) => (
                                            <tr className="text-xs font-medium text-black text-center border hover:bg-gray-200">
                                              <th className="px-6 py-4 hover:bg-gray-400 font-bold">{columna.talla}</th>
                                              <td className="hover:bg-gray-400">{columna.fr}</td>
                                              <td className="hover:bg-gray-400">{columna.altura}</td>
                                              <td className="hover:bg-gray-400">{columna.pecho}</td>
                                              <td className="hover:bg-gray-400">{columna.contorno_cintura}</td>
                                              <td className="hover:bg-gray-400">{columna.contorno_caderas}</td>
                                            </tr>
                                          )))
                                          : ''
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}