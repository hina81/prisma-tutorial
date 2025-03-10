import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const itemCategory = await prisma.itemCategory.findMany();
  // categoryは全部表示させたいからfindMany
  return NextResponse.json(itemCategory);
}
