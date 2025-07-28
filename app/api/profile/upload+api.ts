import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.getAll("file")[0];

    if (!file) {
      return Response.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (!(file instanceof Blob)) {
      return Response.json({ error: "Invalid file type" }, { status: 400 });
    }

    const fileBuffer = await file.arrayBuffer();
    const base64Image = Buffer.from(fileBuffer).toString("base64");
    const dataUri = `data:${file.type};base64,${base64Image}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "profile",
    });

    return Response.json({ url: result.url });
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
