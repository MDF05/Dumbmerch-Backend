/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "profile" ALTER COLUMN "addres" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "phome" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "profile_name_key" ON "profile"("name");
