"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ViewProjects({ terminalText, targetId, placeholder }: { terminalText: string, placeholder: string, targetId: string }) {
    const [text, setText] = useState<string>("");

    useEffect(() => {
        const typingSpeed = 100;
        let index = -1; // hack that prevents state timing issues 
        const interval = setInterval(async () => {
            index += 1;
            setText((prev) => prev + terminalText[index])

            if (index >= terminalText.length - 1) {
                clearInterval(interval)
            }

            return () => clearInterval(interval);
        }, typingSpeed)
    }, [])

    return (

        <Tooltip>
            <TooltipTrigger>
                <a href={targetId} className="inline-flex items-center font-mono bg-foreground text-background px-1.5 py-1 text-2xl rounded-lg hover:bg-foreground/75 active:bg-foreground/75 focus:bg-foreground/75">
                    <span className="font-mono"><span className="text-accent">{'> '}</span>{text}</span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="ml-1 inline-block w-2 h-6 bg-accent"
                    />
                </a>
            </TooltipTrigger>
            <TooltipContent>
                {<p>{placeholder}</p>}
            </TooltipContent>
        </Tooltip>

    )
}
