import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import AboutContent from '@/components/about/AboutContent';

export const metadata = {
  title: "About Me | Femi YB",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutContent />
    </>
  );
}
