
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import DividerProvider from "@/components/context/DividerProvider";
import Footer from "@/components/Footer";
import SunMoon from "@/components/SunMoon";

export default function Home() {
  return (
    <div className="min-h-screen">
      <DividerProvider>
        <Navbar />
        <Hero />
        <SunMoon />
        <Projects />
        <Contact />
      </DividerProvider>
      <Footer />
    </div>
  );
}
