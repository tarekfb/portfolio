"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


// "use client";
// import { Sun, Moon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useCallback, useEffect, useState } from "react"
// import { motion } from "framer-motion"



// export default function DarkModeToggle() {
//     const [isDark, setIsDark] = useState(false);

//     const toggleThemeClasses = useCallback(() => {
//         // if set via local storage previously
//         if (localStorage.getItem('color-theme')) {
//             if (localStorage.getItem('color-theme') === 'light') {
//                 document.documentElement.classList.add('dark');
//                 localStorage.setItem('color-theme', 'dark');
//             } else {
//                 document.documentElement.classList.remove('dark');
//                 localStorage.setItem('color-theme', 'light');
//             }

//             // if NOT set via local storage previously
//         } else {
//             if (document.documentElement.classList.contains('dark')) {
//                 document.documentElement.classList.remove('dark');
//                 localStorage.setItem('color-theme', 'light');
//             } else {
//                 document.documentElement.classList.add('dark');
//                 localStorage.setItem('color-theme', 'dark');
//             }
//         }
//     }, [])

//     useEffect(() => {
//         // This code only runs on the client.
//         const initialDark = document.documentElement.classList.contains('dark');
//         setIsDark(initialDark);
//     }, []); // Run once on client mount

//     const toggleDarkMode = useCallback(() => {
//         setIsDark((prevValue) => !prevValue);
//         toggleThemeClasses();
//     }, [setIsDark, toggleThemeClasses])

//     return (
//         <Button
//             variant="ghost"
//             size="icon"
//             className="text-background dark:text-foreground transition duration-300"
//             onClick={toggleDarkMode}
//         >
//             <motion.div  >
//                 {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
//             </motion.div>
//         </Button>
//     )
// }