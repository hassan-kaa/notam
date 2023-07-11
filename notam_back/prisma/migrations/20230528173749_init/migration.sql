-- CreateTable
CREATE TABLE "Notam" (
    "num_notam" SERIAL NOT NULL,
    "champs_q" TEXT NOT NULL,
    "champs_a" TEXT NOT NULL,
    "champs_b" TEXT NOT NULL,
    "champs_c" TEXT NOT NULL,
    "champs_d" TEXT NOT NULL,
    "champs_e" TEXT NOT NULL,
    "champs_f" TEXT NOT NULL,
    "champs_g" TEXT NOT NULL,

    CONSTRAINT "Notam_pkey" PRIMARY KEY ("num_notam")
);
