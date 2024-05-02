
import { countries_products_kids } from "@/utils/products/shortSleeve/kid/ProductSizesCmKids";
import { countries_inches_products_kids } from "@/utils/products/shortSleeve/kid/ProductSizesInKids";

const columnas = ["Talla", "Hombro", "Largo", "Largo de manga", "Pecho"];


export function ProductTableKid({ unitsMeasurement }: any) {

  const sizes = countries_products_kids[0].US;

  const sizes_inches = countries_inches_products_kids[0].US_inches;

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
                    <td className="hover:bg-gray-400">{item.hombro}</td>
                    <td className="hover:bg-gray-400">{item.largo}</td>
                    <td className="hover:bg-gray-400">{item.largo_manga}</td>
                    <td className="hover:bg-gray-400">{item.pecho}</td>
                  </tr>
                )))
                : (Array.isArray(sizes) && sizes.map((item, index) => (
                  <tr key={index} className="text-sm text-black text-center py-4 border-blue-gray-100 hover:bg-gray-200">
                    <td className="hover:bg-gray-400" style={{ padding: '12px' }}>{item.talla}</td>
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