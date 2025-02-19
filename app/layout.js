import '../styles/globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata = {
  title: "Femi YB",
  description: "I do stuff with code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-gray-100 h-full flex flex-col">
        <div className="flex flex-col min-h-screen w-full">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
