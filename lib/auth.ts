import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { isUserRegistered } from "./isUserRegistered";
import bcrypt from "bcryptjs";
import { user } from "@prisma/client";

export const authConfig: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const dbUser = await isUserRegistered(credentials.email);

        const validPass = await bcrypt.compare(
          credentials.password,
          dbUser.password
        );

        if (dbUser && validPass) {
          return dbUser as user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
    // jwt: ({ token, user }) => {
    //   if (user) {
    //     const u = user as unknown as any;
    //     return {
    //       ...token,
    //       id: u.id,
    //       randomKey: u.randomKey,
    //     };
    //   }
    //   return token;
    // },
  },
  pages: {
    signIn: "/login",
    // signOut: "/auth/signout",
  },
};
