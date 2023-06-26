import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../db";
import { isUserRegistered } from "../../../../lib/isUserRegistered";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, email, password } = await req.json();

  if (await isUserRegistered(email)) {
    return NextResponse.json({ message: "ERROR! user already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  if (!newUser) {
    return NextResponse.json({ message: "ERROR!" });
  }

  return NextResponse.json(
    { message: "User added successfully", user: newUser },
    { status: 200 }
  );
}
