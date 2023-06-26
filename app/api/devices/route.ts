import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../db";

// GET all devices
export async function GET() {
  const devices = await prisma.device.findMany({
    include: { devicetype: true },
  });

  if (!devices) {
    return NextResponse.json(
      { message: "ERROR! no devices found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: devices }, { status: 200 });
}

// Create a device
export async function POST(req: NextRequest, res: NextResponse) {
  const { name, userId, deviceTypeId } = await req.json();

  const newDevice = await prisma.device.create({
    data: { name, userId, deviceTypeId },
  });

  if (!newDevice) {
    return NextResponse.json(
      { message: "ERROR!" }
      // { status: 404 }
    );
  }

  return NextResponse.json(
    { message: "new device added successfully", data: newDevice },
    { status: 200 }
  );
}
