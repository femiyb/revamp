import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";

export default function BlogPage() {
  return (
    <>
      <main className="py-16 px-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-teal-500 mb-8">
          Blog Page
        </h1>
        <BlogPreview />
      </main>
    </>
  );
}
