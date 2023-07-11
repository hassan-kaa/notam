/*
  Warnings:

  - The primary key for the `Notam` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Notam" DROP CONSTRAINT "Notam_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "num_notam" DROP DEFAULT,
ALTER COLUMN "num_notam" SET DATA TYPE TEXT,
ADD CONSTRAINT "Notam_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Notam_num_notam_seq";
