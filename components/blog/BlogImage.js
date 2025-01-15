import Image from "next/image";

export default function BlogImage({ imageUrl, altText }) {
  return (
    <Image
      src={`/api/image-proxy?url=${encodeURIComponent(imageUrl)}`} // Proxy the image URL
      alt={altText}
      width={800}
      height={600}
      layout="responsive"
      loading="lazy"  // Lazy loading
      placeholder="blur"  // Optional: Add a blur effect while loading
      blurDataURL="/assets/placeholder.png"  // Optional: Low-quality placeholder
    />
  );
}
