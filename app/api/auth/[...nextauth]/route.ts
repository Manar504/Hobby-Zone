import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import { sql } from "@vercel/postgres";
import { compare } from "bcrypt";
const handler = NextAuth({
  // session: {
  //   strategy: 'jwt',
  // },
  pages: {
    signIn: '/Login',
  },
  providers: [
    GoogleProvider({
      clientId: "111338226945-rg9phea9h585ouugg7l62sn337iiucvl.apps.googleusercontent.com" ?? "",
      clientSecret: "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" ?? "",
    }),

    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        //
        const response = await sql`
        SELECT * FROM users WHERE email=${credentials?.email}`;
        const user = response.rows[0];

        const passwordCorrect = await compare(
          credentials?.password || '',
          user.password
        );

        console.log({ passwordCorrect });

        if (passwordCorrect) {
          return {
            id: user.id,
            email: user.email,
          };
        }

        return null;
      },
    }),

  ],
});

export { handler as GET, handler as POST };