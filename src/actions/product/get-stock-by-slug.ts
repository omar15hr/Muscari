'use server';

import prisma from '@/lib/prisma';


export const getStockBySlug = async( slug: string ): Promise<number> => {

  try {

    const stock = await prisma.product.findFirst({
      where: { slug },
      select: { 
        inStock_XS: true, 
        inStock_S: true, 
        inStock_M: true, 
        inStock_L: true, 
        inStock_XL: true, 
        inStock_XXL: true 
      }
    });

    return stock?.inStock_XS 
    ?? stock?.inStock_S 
    ?? stock?.inStock_M
    ?? stock?.inStock_L 
    ?? stock?.inStock_XL 
    ?? stock?.inStock_XXL 
    ?? 0 ;
  

  } catch (error) {
    return 0;
  }


}