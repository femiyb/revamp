import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BlogPreview from "@/components/home/BlogPreview";
import BlogContainer from "@/components/blog/BlogContainer";

export default function BlogPage() {
  return (
    <>
      <main className="py-16 px-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-teal-500 mb-8">
          Blog Page
        </h1>
        <BlogContainer />
      </main>
    </>
  );
}
