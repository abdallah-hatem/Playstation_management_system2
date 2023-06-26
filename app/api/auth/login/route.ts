import { NextRequest, NextResponse } from "next/server";
import { isUserRegistered } from "../../../../lib/isUserRegistered";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } = await req.json();

  const user = await isUserRegistered(email);

  if (!user) {
    return NextResponse.json(
      { message: "ERROR! user not found" },
      { status: 404 }
    );
  }

  const validPass = await bcrypt.compare(password, user.password);

  if (!validPass) {
    return NextResponse.json(
      { message: "ERROR! incorrect password" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { message: "User logged in successfully", data: { id: user.id } },
    { status: 200 }
  );
}
