export const revalidate = 60; // 60 segundos

import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";
import { ProductGridKids } from "@/components/products/product-grid-kids/ProductGrid";
import { ProductGridWomen } from "@/components/products/product-grid-women/ProductGrid";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Gender } from "@prisma/client";
import { redirect } from "next/navigation";

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
  };
}

export default async function GenderByPage({ params, searchParams }: Props) {
  const { gender } = params;
  const genderTitle = gender === 'men' ? 'hombres' : gender === 'women' ? 'mujeres' : 'niños';

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({
      page,
      gender: gender as Gender,
    });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  const labels: Record<string, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
  };

  return (
    <>
      <Title title={`Artículos ${labels[gender]}`} className="mb-2 mx-1" />

      <div className="p-2 mx-4 mb-4 text-black">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-lg">
                Inicio
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-lg">{genderTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="p-3 mx-4 mb-4 text-black">
        {labels[gender] === labels["women"] ? (
          <ProductGridWomen products={products} />
        ) : labels[gender] === labels["men"] ? (
          <ProductGrid products={products} />
        ) : (
          <ProductGridKids products={products} />
        )}
      </div>
    </>
  );
}
