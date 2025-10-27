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
import TechIcon from "./TechIcon";

interface TechStackIconProps {
  tech: Tech;
  size?: "md" | "lg";
}

export default function TechStackIcon({ tech, size = "lg", }: TechStackIconProps) {
  return (
    <>
      <div className="inline md:hidden">
        <Popover>
          <PopoverTrigger>
            <TechIcon tech={tech} size={size}  />
          </PopoverTrigger>
          <PopoverContent>
            <p>{tech}</p>
          </PopoverContent>
        </Popover>
      </div>
      <div className="hidden md:inline">
        <Tooltip>
          <TooltipTrigger>
            <TechIcon tech={tech} size={size} />
          </TooltipTrigger>
          <TooltipContent>
           { <p>{tech}</p>}
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}