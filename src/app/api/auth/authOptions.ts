import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcryptjs";
import UserModel from "@/models/User";
import { connectToDatabase } from "@/lib/mongodb";
import { CustomUser } from "@/types/customUser";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        fullName: { label: "Full Name", type: "text" },
        programType: { label: "Program Type", type: "text" }
      },
      async authorize(credentials) {
        await connectToDatabase();

        if (!credentials) {
          return null;
        }

        const { email, password, fullName, programType } = credentials;

        let user = await UserModel.findOne({ email });

        if (!user && fullName && programType) {
          const hashedPassword = await hash(password, 12);
          user = await UserModel.create({
            email,
            password: hashedPassword,
            fullName,
            programType
          });
        }

        if (user) {
          const isValid = await compare(password, user.password);
          if (isValid) {
            return {
              id: user._id.toString(),
              email: user.email,
              name: user.fullName
            };
          }
        }

        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as CustomUser).id = token.id as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/signin"
  }
};

export default authOptions; // Export as default
