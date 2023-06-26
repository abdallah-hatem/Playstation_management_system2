import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../db";

export async function GET() {
  const users = await prisma.user.findMany();

  if (!users) {
    return NextResponse.json(
      { message: "ERROR! no users found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: users }, { status: 200 });
}
