import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Hero from "@/components/home/Hero";
import AboutMe from "@/components/home/AboutSummary";
import Skills from "@/components/home/SkillsPreview";
import BlogPreview from "@/components/home/BlogPreview";

export default function RootLayout({ children }) {
  return (
    <>
    <main className="flex flex-col min-h-screen">
        <Hero />
        <AboutMe />
        <Skills />
        <BlogPreview />
        </main>
</>
  );
}
