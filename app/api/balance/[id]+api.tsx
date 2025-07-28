import { db } from "@/lib";

export async function GET(req: Request, params: { id: string }) {
  const { id } = params;
  try {
    if (!id) {
      return Response.json({ error: "id is not valid" }, { status: 400 });
    }
    const balance = await db.balance.findUnique({
      where: { userId: id as string },
    });
    return Response.json({ data: balance }, { status: 200 });
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
