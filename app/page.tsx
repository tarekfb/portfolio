
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BlobProvider from "@/components/context/BlobProvider";
import DividerProvider from "@/components/context/DividerProvider";
import TechStackIcon from "@/components/TechStackIcon";

const techs = ["react", "nextjs", "typescript", "tailwindcss"]
export default function Home() {
  return (
    <div className="min-h-screen">
      <DividerProvider>
        <BlobProvider>
          <Navbar />
          <Hero />
        </BlobProvider>
        {/* This div hack blocks a bottom border on slanted div in hero. preferaly  remove bottom border and this hack */}
        <div className=" absolute w-full h-4 bg-background  -mt-2" />
        <Projects />
        <Contact />
      </DividerProvider>
      <footer className="container bg-accent-lightest flex flex-col items-center gap-y-2 px-8">
        <div>
          <span className="text-muted-foreground mb-8 dark:text-foreground/75">Copyright 2025</span> | Tarek Bermalm
        </div>
        <div>Made with: <div className="space-x-1.5"><TechStackIcon tech="react" /><TechStackIcon tech="nextjs" /><TechStackIcon tech="tailwindcss" /><TechStackIcon tech="typescript" /></div> </div>
      </footer>
    </div>
  );
}
