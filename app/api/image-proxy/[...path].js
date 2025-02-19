import { NextResponse } from 'next/server';

// Fetch the image from the original WordPress uploads folder
export async function GET(req, { params }) {
  const { path } = params;

  // Correctly construct the full WordPress URL
  const imageUrl = `https://app.femiyb.me/wp-content/uploads/${path.join('/')}`;
  console.log('Fetching image from:', imageUrl); // Debugging URL

  try {
    const response = await fetch(imageUrl);

    // Handle fetch errors
    if (!response.ok) {
      console.error(`Failed to fetch image. Status: ${response.status}`);
      return new NextResponse('Failed to fetch image', {
        status: response.status,
      });
    }

    // Process the image content
    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache for performance
      },
    });
  } catch (error) {
    console.error('Error fetching image:', error.message);
    return new NextResponse('Error fetching image', { status: 500 });
  }
}
