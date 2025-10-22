import ColorPicker from "@/components/ColorPicker";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {

  return (
    <nav className=" top-0 left-0 right-0 z-50 bg-foreground dark:bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-background dark:text-foreground">TB</h1>
            <ColorPicker />
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            
          </div>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
