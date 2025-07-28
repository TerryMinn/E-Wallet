import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "../prisma/generated/client";

export default new PrismaClient().$extends(withAccelerate());
