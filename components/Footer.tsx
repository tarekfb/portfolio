import MadeWith from "./MadeWith";

export default function Footer() {
    return (
        <footer className=" bg-accent-lightest flex flex-col items-center gap-y-2 p-8 text-sm w-full">
            <div>
                <span className="text-muted-foreground mb-8 dark:text-foreground/75">Copyright 2025</span> | Tarek Bermalm
            </div>
            <MadeWith />
        </footer>
    )
}