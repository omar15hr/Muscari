import Link from 'next/link';
import { IoArrowBack } from "react-icons/io5";

export const BackButton = ({path}: any) => {


  return (
    <>
      <Link href={path} className='flex w-40 hover:bg-red-300 bg-red-200 rounded px-4 mx-2 py-1 mb-2'>
        <IoArrowBack className='' size={20} />
        Volver
      </Link>
    </>
  )
}