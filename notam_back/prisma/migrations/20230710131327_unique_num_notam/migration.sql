/*
  Warnings:

  - A unique constraint covering the columns `[num_notam]` on the table `Notam` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Notam_num_notam_key" ON "Notam"("num_notam");
