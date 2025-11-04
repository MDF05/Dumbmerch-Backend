/*
  Warnings:

  - Changed the type of `gross_amount` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "gross_amount",
ADD COLUMN     "gross_amount" DECIMAL(65,30) NOT NULL;
