export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table
import { getPaginatedProductsWithImages } from "@/actions";
import { BackButton, Pagination, ProductImage, Title } from "@/components";
import { currencyFormat } from "@/utils";

import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";


interface Props {
  searchParams: {
    page?: string; 
  }
}

export default async function OrdersPage({ searchParams }: Props) {


  const page = searchParams.page ? parseInt( searchParams.page ) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({ page });


  return (
    <>
      <BackButton path={'/'} />
      <Title title="Mantenimiento de productos" className="mx-5" />

      <div className="flex justify-end mb-5 mx-5">
        <Link href="/admin/product/new" className="flex w-50 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <IoCardOutline className="mx-1 mt-1" />
          Nuevo Producto
        </Link>
      </div>

      <div className="mt-10">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Imagen
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Titulo
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Precio
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Género
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Inventario
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Tallas
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <Link href={ `/product/${ product.slug }` }>
                    <ProductImage 
                      src={ product.ProductImage[0]?.url }
                      width={ 80 }
                      height={ 80 }
                      alt={ product.title }
                      className="w-20 h-20 object-cover rounded"
                    />
                  </Link>
                </td>


                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <Link 
                    href={`/admin/product/${ product.slug }`}
                    className="hover:underline"
                  >
                    { product.title}
                  </Link>
                </td>


                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  { currencyFormat( product.price )}
                </td>


                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  { product.gender }
                </td>


                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {
                    product.inStock_XS + 
                    product.inStock_S + 
                    product.inStock_M + 
                    product.inStock_L + 
                    product.inStock_XL + 
                    product.inStock_XXL
                  }
                </td>


                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  { product.sizes.join(', ') }
                </td>
                
              </tr>
            ))}

            
          </tbody>
        </table>

        <Pagination totalPages={ totalPages } />

      </div>
    </>
  );
}
