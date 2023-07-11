-- CreateTable
CREATE TABLE "circle" (
    "id" SERIAL NOT NULL,
    "center" DOUBLE PRECISION[],
    "radius" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "circle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "polygon" (
    "id" SERIAL NOT NULL,
    "points" JSONB[],

    CONSTRAINT "polygon_pkey" PRIMARY KEY ("id")
);
