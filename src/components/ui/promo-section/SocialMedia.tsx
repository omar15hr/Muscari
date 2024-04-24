import Image from "next/image";



const people = [
  {
    name: 'Facebook',
    role: 'www.facebook.com/muscariclothing',
    imageUrl:
      '/social-media/facebook.png',
  },
  {
    name: 'Instagram',
    role: 'www.instagram.com/muscariclothing',
    imageUrl:
      '/social-media/instagram.png',
  },
  
  {
    name: 'Tiktok',
    role: 'www.tiktok.com/muscariclothing',
    imageUrl:
      '/social-media/tiktok.png',
  },
  {
    name: 'Twitter',
    role: 'www.twitter.com/muscariclothing',
    imageUrl:
      '/social-media/twitter.png',
  },
]

export default function SocialMedia() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Síguenos en nuestras redes sociales</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ofrecemos nuestros productos por redes sociales, te brindamos una calidad atención y te permitirá conocernos un poco más.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
