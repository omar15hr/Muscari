import Link from 'next/link';



import { BackButton, Title } from '@/components';
import { ProductsInFavorites } from './ui/ProductsInFavorites';




export default function FavoritePage() {


  // redirect('/empty');



  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        <BackButton path={'/'} />

        <Title title='Favoritos' />

        <div className="">

          <ProductsInFavorites />

        </div>

      </div>

    </div>
  );
}