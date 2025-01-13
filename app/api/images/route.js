import { NextResponse } from "next/server";

// Handle the GET request
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const imagePath = searchParams.get("path");

  if (!imagePath) {
    return NextResponse.json({ error: "Image path is missing" }, { status: 400 });
  }

  const imageUrl = `https://www.femiyb.com/wp-content/uploads/${imagePath}`;
  console.log("Fetching image from:", imageUrl);  // Debugging log

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
