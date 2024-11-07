/*
  Warnings:

  - You are about to drop the column `Image` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Image",
ADD COLUMN     "image" TEXT;
