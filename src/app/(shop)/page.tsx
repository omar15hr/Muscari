export const revalidate = 60; // 60 segundos


import { redirect } from 'next/navigation';

import { getPaginatedProductsWithImages } from '@/actions';
import FirstPromo from '@/components/ui/promo-section/FirstPromo';
import ProductFeatures from '@/components/ui/promo-section/Product-Features';
import CardsPromo from '@/components/ui/promo-section/CardsPromo';
import SocialMedia from '@/components/ui/promo-section/SocialMedia';



interface Props {
  searchParams: {
    page?: string; 
  }
}


export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt( searchParams.page ) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });


  if ( products.length === 0 ) {
    redirect('/');
  };


  return (
    <div>

      <FirstPromo />
      <ProductFeatures />
      <CardsPromo />
      <SocialMedia />
      
    </div>
  );
}
