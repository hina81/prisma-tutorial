import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const itemCategory = await prisma.itemCategory.findMany({
    // include と true でリレーションの展開
    // select でカラムを選択できる（ここではしてない）
    include: {
      items: true,
    },
  });
  console.log(itemCategory);
  return NextResponse.json(itemCategory);
}
