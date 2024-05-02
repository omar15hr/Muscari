
import { countries_products_women } from "@/utils/products/longSleeve/women/ProductSizesCmWomen";
import { countries_inches_products_women } from "@/utils/products/longSleeve/women/ProductSizesInWomen";

const columnas = ["Talla", "Tipo de talla", "Hombro", "Largo", "Largo de manga", "Pecho"];

export function ProductTableWomen({ countrySizes, unitsMeasurement }: any) {

  const sizes = (
    countrySizes === 'US'
      ? countries_products_women[0].US
      : countrySizes === 'BR'
        ? countries_products_women[1].BR
        : countrySizes === 'EU'
          ? countries_products_women[2].EU
          : countrySizes === 'DE'
            ? countries_products_women[3].DE
            : countrySizes === 'SG'
              ? countries_products_women[4].SG
              : countrySizes === 'AU'
                ? countries_products_women[5].AU
                : countrySizes === 'JP'
                  ? countries_products_women[6].JP
                  : countrySizes === 'UK'
                    ? countries_products_women[7].UK
                    : countrySizes === 'IT'
                      ? countries_products_women[8].IT
                      : countrySizes === 'MX'
                        ? countries_products_women[9].MX
                        : countrySizes === 'FR'
                          ? countries_products_women[10].FR
                          : ''
  );

  const sizes_inches = (
    countrySizes === 'US'
      ? countries_inches_products_women[0].US_inches
      : countrySizes === 'BR'
        ? countries_inches_products_women[1].BR_inches
        : countrySizes === 'EU'
          ? countries_inches_products_women[2].EU_inches
          : countrySizes === 'DE'
            ? countries_inches_products_women[3].DE_inches
            : countrySizes === 'SG'
              ? countries_inches_products_women[4].SG_inches
              : countrySizes === 'AU'
                ? countries_inches_products_women[5].AU_inches
                : countrySizes === 'JP'
                  ? countries_inches_products_women[6].JP_inches
                  : countrySizes === 'UK'
                    ? countries_inches_products_women[7].UK_inches
                    : countrySizes === 'IT'
                      ? countries_inches_products_women[8].IT_inches
                      : countrySizes === 'MX'
                        ? countries_inches_products_women[9].MX_inches
                        : countrySizes === 'FR'
                          ? countries_inches_products_women[10].FR_inches
                          : ''
  );

  return (
    <>
      <div className="flex flex-col mt-5">
        <table className="min-w-full border-collapse border border-slate-500">
          <thead className="bg-white border-b rounded">
            <tr>
              {columnas.map((columna, index) => (
                <th key={index} scope="col" className="bg-blue-gray-50 text-sm text-black px-6 py-2 text-center border-blue-gray-100">
                  {columna}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              unitsMeasurement === 'IN'
                ? (Array.isArray(sizes_inches) && sizes_inches.map((item, index) => (
                  <tr key={index} className="text-sm text-black text-center py-4 border-blue-gray-100 hover:bg-gray-200">
                    <td className="hover:bg-gray-400" style={{ padding: '12px' }}>{item.talla}</td>
                    <td className="hover:bg-gray-400">{item.tt}</td>
                    <td className="hover:bg-gray-400">{item.hombro}</td>
                    <td className="hover:bg-gray-400">{item.largo}</td>
                    <td className="hover:bg-gray-400">{item.largo_manga}</td>
                    <td className="hover:bg-gray-400">{item.pecho}</td>
                  </tr>
                )))
                : (Array.isArray(sizes) && sizes.map((item, index) => (
                  <tr key={index} className="text-sm text-black text-center py-4 border-blue-gray-100 hover:bg-gray-200">
                    <td className="hover:bg-gray-400" style={{ padding: '12px' }}>{item.talla}</td>
                    <td className="hover:bg-gray-400">{item.tt}</td>
                    <td className="hover:bg-gray-400">{item.hombro}</td>
                    <td className="hover:bg-gray-400">{item.largo}</td>
                    <td className="hover:bg-gray-400">{item.largo_manga}</td>
                    <td className="hover:bg-gray-400">{item.pecho}</td>
                  </tr>)
                ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}