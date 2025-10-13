"use client";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ColorPicker from "@/components/ColorPicker";

function Navbar() {
  const [isLight, setIsLight] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsLight(false);
    }
  };

  return (
    <nav className=" top-0 left-0 right-0 z-50 bg-foreground">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-background">TB</h1>
          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div> */}

            <ColorPicker />


          {/*  Light Dark Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-background"
              onClick={() => setIsLight(!isLight)}
            >
              {isLight ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
