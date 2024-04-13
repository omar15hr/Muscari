export const revalidate = 60; // 60 segundos

import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';
import { ProductGridKids } from '@/components/products/product-grid-kids/ProductGrid';
import { ProductGridWomen } from '@/components/products/product-grid-women/ProductGrid';

import { Gender } from '@prisma/client';
import { redirect } from 'next/navigation';



interface Props {
  params: {
    gender: string;
  },
  searchParams: {
    page?: string; 
  }
}


export default async function GenderByPage({ params, searchParams }: Props) {

  const { gender } = params;

  const page = searchParams.page ? parseInt( searchParams.page ) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ 
    page, 
    gender: gender as Gender,
  });


  if ( products.length === 0 ) {
    redirect(`/gender/${ gender }`);
  }
  

  const labels: Record<string, string>  = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }

  // if ( id === 'kids' ) {
  //   notFound();
  // }


  return (
    <>
      <Title
        title={`Artículos ${ labels[gender] }`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      {
        labels[gender] === labels['women']
        ? <ProductGridWomen products={ products }/>
        : labels[gender] === labels['men']
        ? <ProductGrid products={ products }/>
        : <ProductGridKids products={ products }/>
      }

      {/* <Pagination totalPages={ totalPages }  /> */}
      
    </>
  );
}