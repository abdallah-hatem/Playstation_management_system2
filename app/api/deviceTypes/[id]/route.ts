import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../db";

export async function DELETE(req: NextRequest, { params }, res: NextResponse) {
  const id = Number(params.id);

  const deleteType = await prisma.devicetype.delete({
    where: { id },
  });

  if (!deleteType) {
    return NextResponse.json(
      { message: "ERROR!" }
      // { status: 404 }
    );
  }

  return NextResponse.json(
    { message: "type deleted successfully" },
    { status: 200 }
  );
}

export async function GET(req: NextRequest, { params }, res: NextResponse) {
  const userId = Number(params.id);
  const types = await prisma.devicetype.findMany({ where: { userId } });

  if (!types) {
    return NextResponse.json(
      { message: "ERROR! no types found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: types }, { status: 200 });
}
