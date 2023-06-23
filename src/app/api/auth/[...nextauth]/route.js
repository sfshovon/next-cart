import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connectDB();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } 
            else {
              throw new Error("Wrong Credentials!");
            }
          } 
          else {
            throw new Error("User not found!");
          }
        } 
        catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: "/login"
  }
})

export { handler as GET, handler as POST };

