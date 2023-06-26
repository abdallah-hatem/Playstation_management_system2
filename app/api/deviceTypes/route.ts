import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../db";

// GET all device types
export async function GET() {
  const types = await prisma.devicetype.findMany();

  if (!types) {
    return NextResponse.json(
      { message: "ERROR! no types found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: types }, { status: 200 });
}

// Create a device type
export async function POST(req: NextRequest, res: NextResponse) {
  const { name, hourRate, userId } = await req.json();

  const newType = await prisma.devicetype.create({
    data: { name, hourRate, userId },
  });

  if (!newType) {
    return NextResponse.json(
      { message: "ERROR!" }
      // { status: 404 }
    );
  }

  return NextResponse.json(
    { message: "new type added successfully", data: newType },
    { status: 200 }
  );
}
