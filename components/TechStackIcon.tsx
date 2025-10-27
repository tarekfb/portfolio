import StackIcon from "tech-stack-icons";
import { Tech } from "./Projects";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface TechStackIconProps {
  tech: Tech;
  size?: "md" | "lg";
  variant?: "light" | "dark" | "grayscale";
}

function Icon({ tech, size = "lg", variant = "dark" }: TechStackIconProps) {
  return (
    <div className={`size-${size === "md" ? "8" : "9"} -mr-1.5 rounded-full overflow-hidden flex items-center justify-center p-0.5 bg-background border border-solid border-accent`}>
      <div className="rounded-full p-1.5 flex items-center justify-center bg-background">
        <StackIcon name={tech} variant={variant} />
      </div>
    </div>
  )
}

export default function TechStackIcon({ tech, size = "lg", variant = "dark" }: TechStackIconProps) {
  return (
    <>
      <div className="inline md:hidden">
        <Popover>
          <PopoverTrigger>
            <Icon tech={tech} size={size} variant={variant} />
          </PopoverTrigger>
          <PopoverContent>
            <p>{tech}</p>
          </PopoverContent>
        </Popover>
      </div>
      <div className="hidden md:inline">
        <Tooltip>
          <TooltipTrigger>
            <Icon tech={tech} size={size} variant={variant} />
          </TooltipTrigger>
          <TooltipContent>
           { <p>{tech}</p>}
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}