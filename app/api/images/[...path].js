import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { path } = params;

  // Rebuild the WordPress image URL
  const imageUrl = `https://www.femiyb.com/wp-content/uploads/${path.join("/")}`;
  console.log("Fetching image from:", imageUrl);  // This MUST appear!

  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      console.error(`Failed to fetch image. Status: ${response.status}`);
      return new NextResponse("Failed to fetch image", { status: response.status });
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get("content-type") || "image/jpeg";

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    console.error("Error fetching image:", error.message);
    return new NextResponse("Error fetching image", { status: 500 });
  }
}
