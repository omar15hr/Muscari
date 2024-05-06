export const revalidate = 60; // 60 segundos



import { getPaginatedProductsWithImages } from '@/actions';
import { redirect } from 'next/navigation';
import CardsPromo from '@/components/ui/promo-section/CardsPromo';
import FirstPromo from '@/components/ui/promo-section/FirstPromo';
import ProductFeatures from '@/components/ui/promo-section/Product-Features';
import SocialMedia from '@/components/ui/promo-section/SocialMedia';
import { HeroParallaxDemo } from '@/components/ui/promo-section/ParallaxDemo';


interface Props {
  searchParams: {
    page?: string;
  } 
}


export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products } = await getPaginatedProductsWithImages({ page });


  if (products.length === 0) {
    redirect('/');
  };


  return (
    <div>

      {/* <HeroParallaxDemo /> */}
      <FirstPromo />
      <ProductFeatures />
      <CardsPromo />
      <SocialMedia />

    </div>
  );
}
