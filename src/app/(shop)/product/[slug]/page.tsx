export const revalidate = 604800; //7 días


import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { titleFont } from "@/config/fonts";
import { BackButton, ProductMobileSlideshow, ProductSlideshow } from "@/components";
import { getProductBySlug } from "@/actions";
import { AddToCart, AddToFavorite } from './ui';
import { DialogItem } from "@/components/dialog-short-sleeve";
import { DialogLongItem } from "@/components/dialog-long-sleeve";
import { DialogBodiesItem } from "@/components/dialog-bodies/DialogBodiesItem";



interface Props {
  params: {
    slug: string;
  };
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title ?? "Producto no encontrado",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Producto no encontrado",
      description: product?.description ?? "",
      // images: [], // https://misitioweb.com/products/image.png
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function ProductBySlugPage({ params }: Props) {


  const { slug } = params;
  const product = await getProductBySlug(slug);
  const dialogGender = product?.gender;


  if (!product) {
    notFound();
  };



  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">
        <BackButton path={`/gender/${dialogGender}`} />

        <h1 className={` ${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>


        <p className="text-lg mb-5">${product.price}</p>


        <AddToCart product={product} />
        <AddToFavorite product={product} />

        {/* Descripción */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>

        {/* Origen */}
        <h3 className="font-bold text-sm mt-4">Origen</h3>
        <p className="font-light">Prenda manufacturada en Estados Unidos.</p>

        <div className="mt-5">
          {
            // PRODUCTOS POLERAS MANGA CORTA
            product.gender === 'men' && product.title.includes('Tee') && !product.title.includes('Long')
            ? <DialogItem dialogGender={'men'} />
            : product.gender === 'women' && product.title.includes('Tee') && !product.title.includes('Long')
            ? <DialogItem dialogGender={'women'} />
            : product.gender === 'kid' && product.title.includes('Tee') && !product.title.includes('Long')
            ? <DialogItem dialogGender={'kid'} />
            
            
            // PRODUCTOS POLERAS MANGA LARGA, CHAQUETAS, HOODIE O SWEARTSHIRT
            : product.gender === 'men' 
              && product.title.includes('Tee') 
              && product.title.includes('Long')
              || product.title.includes('Hoodie')
              || product.title.includes('Jacket')
              || product.title.includes('Sweatshirt')

            ? <DialogLongItem dialogGender={'men'} />
            : product.gender === 'women' 
              && product.title.includes('Tee') 
              && product.title.includes('Long')
              || product.title.includes('Hoodie')
              || product.title.includes('Jacket')
              || product.title.includes('Sweatshirt')


            ? <DialogLongItem dialogGender={'women'} />
            : product.gender === 'kid' 
              && product.title.includes('Tee') 
              && product.title.includes('Long')
              || product.title.includes('Hoodie')
              || product.title.includes('Jacket')
              || product.title.includes('Sweatshirt')


            ? <DialogLongItem dialogGender={'kid'} />
            
            
            // PRODUCTOS BODIES PARA NIÑOS
            : product.gender === 'kid' && product.title.includes('Onesie')
            ? <DialogBodiesItem />
            : ''
          }
        </div>
      </div>
    </div>
  );
}
