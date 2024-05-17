/*
  Warnings:

  - You are about to drop the column `inStock` on the `Product` table. All the data in the column will be lost.
  - Added the required column `inStock_L` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inStock_M` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inStock_S` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inStock_XL` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inStock_XS` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inStock_XXL` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "inStock",
ADD COLUMN     "inStock_L" INTEGER NOT NULL,
ADD COLUMN     "inStock_M" INTEGER NOT NULL,
ADD COLUMN     "inStock_S" INTEGER NOT NULL,
ADD COLUMN     "inStock_XL" INTEGER NOT NULL,
ADD COLUMN     "inStock_XS" INTEGER NOT NULL,
ADD COLUMN     "inStock_XXL" INTEGER NOT NULL;
