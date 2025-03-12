export const revalidate = 60; // 60 segundos

import CardsPromo from "@/components/ui/promo-section/CardsPromo";
import FirstPromo from "@/components/ui/promo-section/FirstPromo";
import ProductFeatures from "@/components/ui/promo-section/Product-Features";
import SocialMedia from "@/components/ui/promo-section/SocialMedia";

export default async function Home() {
  return (
    <div>
      <FirstPromo />
      <ProductFeatures />
      <CardsPromo />
      <SocialMedia />
    </div>
  );
}
