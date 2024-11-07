/*
  Warnings:

  - You are about to drop the column `imageProductId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ImageProduct" DROP CONSTRAINT "ImageProduct_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageProductId",
ADD COLUMN     "image" TEXT;
