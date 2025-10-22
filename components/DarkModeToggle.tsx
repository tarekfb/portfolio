"use client";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react"
import { motion } from "framer-motion"

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

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(document ? document.documentElement.classList.contains('dark') : false);

    const toggleDarkMode = () => {
        setIsDark((prevValue) => !prevValue);
        toggleThemeClasses();
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="text-background transition duration-300"
            onClick={toggleDarkMode}
        >
            <motion.div  >
                {isDark ? <Sun /> : <Moon />}
            </motion.div>
        </Button>
    )
}


// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark');
// } else {
//     document.documentElement.classList.remove('dark')
// }