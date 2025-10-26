
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects, { type Tech } from "@/components/Projects";
import Contact from "@/components/Contact";
import BlobProvider from "@/components/context/BlobProvider";
import DividerProvider from "@/components/context/DividerProvider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <DividerProvider>
        <BlobProvider>
          <Navbar />
          <Hero />
        </BlobProvider>
        {/* This div hack blocks a bottom border on slanted div in hero. preferaly remove bottom border and this hack */}
        <div className="absolute w-full h-4 bg-background -mt-2" />
        <Projects />
        <Contact />
      </DividerProvider>
      <Footer />
    </div>
  );
}
