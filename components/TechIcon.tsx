"use client";
import StackIcon from "tech-stack-icons";
import { Tech } from "./Projects";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface TechStackIconProps {
  tech: Tech;
  size?: "md" | "lg";
}

export default function TechIcon({ tech, size = "lg", }: TechStackIconProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`size-${size === "md" ? "8" : "9"} -mr-1.5 rounded-full overflow-hidden flex items-center justify-center p-0.5 bg-background border border-solid border-accent`}>
      <div className="rounded-full p-1.5 flex items-center justify-center bg-background">
        <StackIcon name={tech} variant={tech === "nextjs" && theme === 'light' ? "light" : "dark"} />
      </div>
    </div>
  )
}
