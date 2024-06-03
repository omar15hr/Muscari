import Image from "next/image";


const features = [
  { name: 'Origin', description: 'Diseñado por Good Goods, Inc.' },
  { name: 'Material', description: 'Base de nogal macizo con imanes de tierras raras y cubierta de tarjeta de acero con recubrimiento en polvo' },
  { name: 'Dimensiones', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Acabado', description: 'Lijado a mano y acabado con aceite natural.' },
  { name: 'Incluye', description: 'Bandeja para tarjetas de madera y 3 paquetes de recambio.' },
  { name: 'Consideraciones', description: 'Fabricado con materiales naturales. El grano y el color varían con cada artículo.' },
]

export default function ProductFeatures() {
  return (
    <div className="">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-10 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            width={400} height={400}
            className="rounded-lg bg-gray-100 shadow-md"
          />
          <Image
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
            width={400} height={400}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 shadow-md"
          />
          <Image
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
            width={400} height={400}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 shadow-md"
          />
          <Image
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
            width={400} height={400}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce nuestros productos</h2>
          <p className="mt-4 text-gray-500">
          En Muscari Clothing, nos apasionan los textiles de alta calidad. Nos enorgullecemos de ofrecer una amplia gama de productos para satisfacer todas tus necesidades, desde ropa suave y acogedora hasta telas duraderas.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <h3 className="font-medium text-gray-900">{feature.name}</h3>
                <h5 className="mt-2 text-sm text-gray-500">{feature.description}</h5>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
