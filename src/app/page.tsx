import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PatentGallery } from "@/components/PatentGallery";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="patents">
        <PatentGallery />
      </div>
      <About />
      <Footer />
    </div>
  );
}