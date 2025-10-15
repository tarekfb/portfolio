import StackIcon from "tech-stack-icons";
import { Tech } from "./Projects";
 
 
export default function TechStackIcon({ tech }: { tech: Tech }) {
  return (
    <div className="size-9 -mr-1.5 rounded-full overflow-hidden flex items-center justify-center p-0.5 bg-accent">
      <div className="rounded-full p-1.5 flex items-center justify-center bg-background">
      <StackIcon name={tech} />
      </div>
    </div>
  );
}
