import Image from "next/image";


interface Props {
  src?: string;
  alt: string;
  style?: React.StyleHTMLAttributes<HTMLImageElement>['style'];
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
  width: number;
  height: number;
}

export function ProductImage({
  src,
  alt,
  className,
  width,
  height,
  style
}: Props) {


  const localSrc = ( src )
    ? src.startsWith('http')
      ? src
      : `/products/${ src }`
    : '/imgs/placeholder.jpg'

  return (
    <Image
      src={ localSrc }
      width={ width }
      height={ height }
      alt={ alt }
      className={ className }
      style={ style }
    />
  )
}