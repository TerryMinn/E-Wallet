import { db } from "@/lib";

export async function GET() {
  const data = await db.user.findFirst();
  return new Response(JSON.stringify(data));
}
