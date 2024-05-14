import Link from 'next/link';
import { IoArrowBack } from "react-icons/io5";

export const BackButton = ({path}: any) => {


  return (
    <>
      <Link href={path} className='flex text-white w-40 hover:bg-blue-300 hover:text-black bg-blue-700 rounded px-4 mx-2 py-1 mb-2'>
        <IoArrowBack className='' size={25} />
        Volver
      </Link>
    </>
  )
}