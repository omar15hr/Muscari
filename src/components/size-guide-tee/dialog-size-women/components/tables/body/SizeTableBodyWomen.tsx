import { AU, BR, DE, EU, FR, IT, JP, MX, SG, UK, US } from "../../type-size/body/TypeOfSizeTableBodyCmWomen";


const columnas = ["Talla", "Tipo de talla", "Altura", "Pecho", "Contorno cintura", "Contorno caderas"];


export function SizeTableBodyWomen({ countrySizes }: any) {


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
                  {
                    countrySizes === 'US'
                      ?
                      (US.map((columna) => (
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
                        (BR.map((columna) => (
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
                          (EU.map((columna) => (
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
                            (DE.map((columna) => (
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
                              (SG.map((columna) => (
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
                                (AU.map((columna) => (
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
                                  (JP.map((columna) => (
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
                                    (UK.map((columna) => (
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
                                      (IT.map((columna) => (
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
                                        (MX.map((columna) => (
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
                                          (FR.map((columna) => (
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