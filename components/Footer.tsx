import TechStackIcon from "@/components/TechIconContainer";
import { Tech } from "./Projects";

const techs: Tech[] = ["react", "nextjs", "typescript", "tailwindcss"]
export default function Footer() {
    return (
        <footer className="bg-accent-lightest flex flex-col items-center gap-y-2 p-8 pt-0 text-sm w-full">
            <span className="text-muted-foreground dark:text-foreground/75">Copyright 2025 | Tarek Bermalm</span>
            <div className="flex items-center justify-center gap-x-2 text-muted-foreground dark:text-foreground/75">Made with
                <div className="">
                    {techs.map(tech => (<TechStackIcon tech={tech} key={tech} size="md" />))}
                </div>
            </div>
        </footer>
    )
}