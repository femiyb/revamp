import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
import Skills from "@/components/Skills";
import BlogPreview from "@/components/BlogPreview";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <BlogPreview />
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
