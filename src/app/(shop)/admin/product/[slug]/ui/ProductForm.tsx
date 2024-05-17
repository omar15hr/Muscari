"use client";

import { createUpdateProduct, deleteProductImage } from "@/actions";
import { ProductImage } from "@/components";
import { Category, Product, ProductImage as ProductWithImage } from "@/interfaces";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";



interface Props {
  product: Partial<Product> & { ProductImage?: ProductWithImage[] };
  categories: Category[];
}


const sizes = ["XS", "S", "M", "L", "XL", "XXL"];


interface FormInputs {
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock_XS: number;
  inStock_S: number;
  inStock_M: number;
  inStock_L: number;
  inStock_XL: number;
  inStock_XXL: number;
  sizes: string[];
  tags: string;
  gender: 'men' | 'women' | 'kid' | 'unisex';
  categoryId: string;

  images?: FileList;
}



export const ProductForm = ({ product, categories }: Props) => {

  const router = useRouter();


  const {
    handleSubmit,
    register,
    formState: { isValid },
    getValues,
    setValue,
    watch,
  } = useForm<FormInputs>({
    defaultValues: {
      ...product,
      tags: product.tags?.join(', '),
      sizes: product.sizes ?? [],

      images: undefined,
    }
  });


  watch('sizes');


  const onSizeChanged = (size: string) => {

    const sizes = new Set(getValues('sizes'));
    sizes.has(size) ? sizes.delete(size) : sizes.add(size);

    setValue('sizes', Array.from(sizes));


  }


  const onSubmit = async (data: FormInputs) => {

    const formData = new FormData();

    const { images, ...productToSave } = data;

    if (product.id) {
      formData.append('id', product.id ?? '');
    }

    formData.append('title',       productToSave.title);
    formData.append('slug',        productToSave.slug);
    formData.append('description', productToSave.description);
    formData.append('price',       productToSave.price.toString());
    formData.append('inStock_XS',  productToSave.inStock_XS.toString());
    formData.append('inStock_S',   productToSave.inStock_S.toString());
    formData.append('inStock_M',   productToSave.inStock_M.toString());
    formData.append('inStock_L',   productToSave.inStock_L.toString());
    formData.append('inStock_XL',  productToSave.inStock_XL.toString());
    formData.append('inStock_XXL', productToSave.inStock_XXL.toString());
    formData.append('sizes',       productToSave.sizes.toString());
    formData.append('tags',        productToSave.tags);
    formData.append('categoryId',  productToSave.categoryId);
    formData.append('gender',      productToSave.gender);


    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
    }


    const { ok, product: updatedProduct } = await createUpdateProduct(formData);

    if (!ok) {
      alert('Producto no se pudo actualizar');
      return;
    }


    router.replace(`/admin/products`);

  }




  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3"
    >
      {/* Textos */}
      <div className="w-100 mx-5">
        <div className="flex flex-col mb-2">
          <span>Título</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" {...register('title', { required: true })} />
        </div>

        <div className="flex flex-col mb-2">
          <span>Slug</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" {...register('slug', { required: true })} />
        </div>

        <div className="flex flex-col mb-2">
          <span>Descripción</span>
          <textarea
            rows={5}
            className="p-2 border rounded-md bg-gray-200"
            {...register('description', { required: true })}
          ></textarea>
        </div>

        <div className="flex flex-col mb-2">
          <span>Price</span>
          <input type="number" className="p-2 border rounded-md bg-gray-200" {...register('price', { required: true, min: 0 })} />
        </div>

        <div className="flex flex-col mb-2">
          <span>Tags</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" {...register('tags', { required: true })} />
        </div>

        <div className="flex flex-col mb-2">
          <span>Gender</span>
          <select className="p-2 border rounded-md bg-gray-200" {...register('gender', { required: true })} >
            <option value="">[Seleccione]</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Categoria</span>
          <select className="p-2 border rounded-md bg-gray-200" {...register('categoryId', { required: true })} >
            <option value="">[Seleccione]</option>
            {
              categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))
            }
          </select>
        </div>

        <button className="flex w-30 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-5">
          Guardar
        </button>
      </div>

      {/* Selector de tallas y fotos */}
      <div className="w-full">

        {/* As checkboxes */}
        <div className="flex flex-col">

          <span>Tallas</span>
          <div className="flex flex-wrap">

            {
              sizes.map(size => (
                // bg-blue-500 text-white <--- si está seleccionado
                <div
                  key={size}
                  onClick={() => onSizeChanged(size)}
                  className={
                    clsx(
                      "p-2 border cursor-pointer rounded-md mr-2 mb-2 w-14 transition-all text-center",
                      {
                        'bg-blue-500 text-white': getValues('sizes').includes(size)
                      }
                    )
                  }
                >
                  <span>{size}</span>
                </div>
              ))
            }

          </div>


          <div className="flex flex-col mb-2 w-80">
            <span>{`Inventario XS`}</span>
            <input
              type="number"
              className="p-2 border rounded-md bg-gray-200"
              {...register('inStock_XS', { required: true, min: 0 })}
            />
          </div>

          <div className="flex flex-col mb-2 w-80">
            <span>{`Inventario S`}</span>
            <input
              type="number"
              className="p-2 border rounded-md bg-gray-200"
              {...register('inStock_S', { required: true, min: 0 })}
            />
          </div>

          <div className="flex flex-col mb-2 w-80">
            <span>{`Inventario M`}</span>
            <input
              type="number"
              className="p-2 border rounded-md bg-gray-200"
              {...register('inStock_M', { required: true, min: 0 })}
            />
          </div>

          <div className="flex flex-col mb-2 w-80">
            <span>{`Inventario L`}</span>
            <input
              type="number"
              className="p-2 border rounded-md bg-gray-200"
              {...register('inStock_L', { required: true, min: 0 })}
            />
          </div>

          <div className="flex flex-col mb-2 w-80">
            <span>{`Inventario XL`}</span>
            <input
              type="number"
              className="p-2 border rounded-md bg-gray-200"
              {...register('inStock_XL', { required: true, min: 0 })}
            />
          </div>

          <div className="flex flex-col mb-2 w-80">
            <span>{`Inventario XXL`}</span>
            <input
              type="number"
              className="p-2 border rounded-md bg-gray-200"
              {...register('inStock_XXL', { required: true, min: 0 })}
            />
          </div>

          <div className="flex flex-col mb-2 w-80">

            <span>Fotos</span>
            <input
              type="file"
              {...register('images')}
              multiple
              className="p-2 border rounded-md bg-gray-200"
              accept="image/png, image/jpeg, image/avif"
            />

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {
              product.ProductImage?.map(image => (
                <div key={image.id}>
                  <ProductImage
                    alt={product.title ?? ''}
                    src={image.url}
                    width={300}
                    height={300}
                    className="rounded-t shadow-md"
                  />

                  <button
                    type="button"
                    onClick={() => deleteProductImage(image.id, image.url)}
                    className="flex justify-center rounded-md bg-red-500 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-b-xl w-full"
                  >
                    Eliminar
                  </button>


                </div>
              ))
            }
          </div>


        </div>
      </div>
    </form>

  );
};