import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const notam = await prisma.notam.create({
    data: {
      num_notam: "A0031/22 NOTAMN",
      champs_q: "DTTC/QMAHW/IV/B/A/000/999/3353N01047E005",
      champs_a: "DTTJ",
      champs_b: "1801160700",
      champs_c: "1803301600",
      champs_d: "DLY 0700 TO 1100 AND 1200 TO 1600 EXC SAT SUN AND HOL",
      champs_e:
        "GRASS CUTTING WORK ON BOTH EDGES OF RWY 09/27 TWYS A B C D AND PRKG AREA PRESENCE MEN AND EQPT HGT 2M DAY MARKED CAUTION ADVISED FLW TWR INSTRUCTIONS",
      champs_f: "",
      champs_g: "",
    },
  });
  console.log(notam);
}

main()
  .catch((e) => console.log(e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
