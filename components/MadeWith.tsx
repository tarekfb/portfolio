"use client";
import TechStackIcon from "@/components/TechStackIcon";
import { Tech } from "./Projects";
import { useTheme } from "next-themes";

const techs: Tech[] = ["react", "nextjs", "typescript", "tailwindcss"]
export default function MadeWith() {
    const { theme } = useTheme()

    return (<div className="flex items-center justify-center gap-x-2">Made with
        <div className="space-x-1.5">
            {techs.map(
                (tech, i) => (<TechStackIcon tech={tech} variant={tech === "nextjs" && theme === 'light' ? "light" : "dark"} key={i} size="md" />)
            )}
        </div>
    </div>)
}