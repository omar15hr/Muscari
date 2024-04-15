import Image from "next/image"

const products = [
  {
    description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
    images: [
      '/products/1740176-00-A_0_2000.jpg',
    ],
    inStock: 7,
    src: '/product/mens_chill_crew_neck_sweatshirt',
    price: 75,
    sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
    slug: "mens_chill_crew_neck_sweatshirt",
    type: 'shirts',
    tags: [ 'sweatshirt' ],
    title: "Polera deportiva manga larga para hombre",
    gender: 'men'
  },
  {
    description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
    images: [
      '/products/1740507-00-A_0_2000.jpg',
      '/products/1740507-00-A_1.jpg',
    ],
    inStock: 5,
    src: '/product/men_quilted_shirt_jacket',
    price: 200,
    sizes: [ 'XS', 'S', 'M', 'XL', 'XXL' ],
    slug: "men_quilted_shirt_jacket",
    type: 'shirts',
    tags: [ 'jacket' ],
    title: "Chaqueta para hombre",
    gender: 'men'
  },

  {
    description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
    images: [
      '/products/1740250-00-A_0_2000.jpg',
      '/products/1740250-00-A_1.jpg'
    ],
    inStock: 10,
    src: '/product/men_raven_lightweight_zip_up_bomber_jacket',
    price: 130,
    sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
    slug: "men_raven_lightweight_zip_up_bomber_jacket",
    type: 'shirts',
    tags: [ 'shirt' ],
    title: "Chaqueta ligera con cierre para hombre",
    gender: 'men'
  },

  {
    description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
    images: [
      '/products/1740280-00-A_0_2000.jpg',
      '/products/1740280-00-A_1.jpg',
    ],
    inStock: 50,
    src: '/product/men_turbine_long_sleeve_tee',
    price: 45,
    sizes: [ 'XS', 'S', 'M', 'L' ],
    slug: "men_turbine_long_sleeve_tee",
    type: 'shirts',
    tags: [ 'shirt' ],
    title: "Polera manga larga para hombre",
    gender: 'men'
  },
]

export default async function CardsPromo() {

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos más vendidos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.title} className="group relative">
              <div className="shadow-md aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  width={300}
                  height={300}
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.src}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
