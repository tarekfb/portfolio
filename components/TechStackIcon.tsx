import StackIcon from "tech-stack-icons";
import { Tech } from "./Projects";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechStackIconProps {
  tech: Tech;
  size?: "md" | "lg";
}

export default function TechStackIcon({ tech, size = "lg" }: TechStackIconProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className={`size-${size === "md" ? "5" : "9"} -mr-1.5 rounded-full overflow-hidden flex items-center justify-center p-0.5 bg-background border border-solid border-accent`}>
          <div className="rounded-full p-1.5 flex items-center justify-center bg-background">
            <StackIcon name={tech} variant={tech === "nextjs" ? "dark" : "light"}/>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tech}</p>
      </TooltipContent>
    </Tooltip>
    
  );
}