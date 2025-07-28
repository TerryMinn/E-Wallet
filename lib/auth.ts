import { expo } from "@better-auth/expo";
import bcrypt from "bcryptjs";
import { betterAuth, User } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../prisma/generated/client";

interface CustomUser extends User {
  pin: string;
}

const prisma = new PrismaClient();
export const auth = betterAuth({
  user: {
    additionalFields: {
      pin: {
        type: "string",
        required: true,
        input: true,
      },
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [expo()],
  emailAndPassword: {
    enabled: true,
  },
  databaseHooks: {
    user: {
      create: {
        before: async (data, ctx) => {
          const userData = data as CustomUser;
          if (
            userData.pin &&
            typeof userData.pin === "string" &&
            userData.pin.length > 0
          ) {
            const hashedPin = await bcrypt.hash(userData.pin, 10);
            return {
              data: {
                ...userData,
                pin: hashedPin,
              },
            };
          }

          return { data };
        },
      },
      update: {
        before: async (data, ctx) => {
          const userData = data as CustomUser;
          if (
            userData.pin &&
            typeof userData.pin === "string" &&
            userData.pin.length > 0
          ) {
            const hashedPin = await bcrypt.hash(userData.pin, 10);
            return {
              data: {
                ...userData,
                pin: hashedPin,
              },
            };
          }

          return { data };
        },
      },
    },
  },
});

type Session = typeof auth.$Infer.Session;
