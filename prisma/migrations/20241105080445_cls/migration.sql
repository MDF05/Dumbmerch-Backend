-- DropForeignKey
ALTER TABLE "ImageProduct" DROP CONSTRAINT "ImageProduct_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "Image" TEXT;
