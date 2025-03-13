import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const item = await prisma.item.findMany({
    include: {
      availableOptionCategories: {
        include: {
          optionCategory: {
            include: {
              options: true,
            },
          },
        },
      },
    },
  });
//   console.log(item);
  return NextResponse.json(item);
}
