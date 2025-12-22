
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects, { type Tech } from "@/components/Projects";
import Contact from "@/components/Contact";
import DividerProvider from "@/components/context/DividerProvider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <DividerProvider>
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </DividerProvider>
      <Footer />
    </div>
  );
}
