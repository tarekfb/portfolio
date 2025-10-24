"use client";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react"
import { motion } from "framer-motion"



export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(document ? document.documentElement.classList.contains('dark') : false);

    const toggleThemeClasses = () => {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}

    const toggleDarkMode = () => {
        setIsDark((prevValue) => !prevValue);
        toggleThemeClasses();
        alert("hej")
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="text-background dark:text-foreground transition duration-300"
            onClick={toggleDarkMode}
        >
            <motion.div  >
                {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </motion.div>
        </Button>
    )
}