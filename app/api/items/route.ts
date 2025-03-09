import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const allItems = await prisma.item.findMany();
    // 増えたらページネーションとか。findManyは使わないほうがいい？
  return NextResponse.json(allItems);
}
