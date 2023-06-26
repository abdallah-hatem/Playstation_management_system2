"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    await signOut({ callbackUrl: "/login" }).then(() => localStorage.clear());
  }
  return (
    <p onClick={handleSignOut} style={{ color: "red", cursor: "pointer" }}>
      Logout
    </p>
  );
}
