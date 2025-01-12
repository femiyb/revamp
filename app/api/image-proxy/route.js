import https from "https";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return new Response("Image URL missing", { status: 400 });
  }

  return new Promise((resolve) => {
    https.get(imageUrl, (imageRes) => {
      const contentType = imageRes.headers["content-type"] || "image/jpeg";

      resolve(
        new Response(imageRes, {
          status: imageRes.statusCode,
          headers: {
            "Content-Type": contentType,
          },
        })
      );
    }).on("error", () => {
      resolve(new Response("Failed to fetch image", { status: 500 }));
    });
  });
}
