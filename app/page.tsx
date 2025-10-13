
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* This div hack blocks a bottom border on slanted div in hero. preferaly  remove bottom border and this hack */}
      <div className=" absolute w-full h-4 bg-background  -mt-2"/>
      <Projects />
      {/* <Contact /> */}
    </div>

  );
}
