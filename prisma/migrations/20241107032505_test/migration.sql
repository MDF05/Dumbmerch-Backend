-- DropForeignKey
ALTER TABLE "ImageProduct" DROP CONSTRAINT "ImageProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_profileId_fkey";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageProduct" ADD CONSTRAINT "ImageProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
