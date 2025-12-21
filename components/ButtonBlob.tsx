"use client";
import { useContext } from "react";
import { BlobContext } from "./context/BlobProvider";
import { motion } from "framer-motion";

export default function ButtonBlob({ children, targetId }: { children: React.ReactNode, targetId: string }) {
    const { blobPathData } = useContext(BlobContext);
    return (

        <a href={targetId} className=" inline-flex  items-center font-mono bg-foreground text-background px-2 py-1 text-3xl">
            <span className="font-mono"><span className="text-accent">{'> '}</span>{children}</span>
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1 inline-block w-2 h-6 bg-accent"
            />
            {/* 
            <motion.svg viewBox="0 0 96 96" className="size-56 md:size-72" xmlns="http://www.w3.org/2000/svg">
                <a href={targetId} className="cursor-pointer group">
                    <motion.path className="fill-accent/50 group-hover:stroke-red-300 stroke-4"
                        animate={{ d: blobPathData }}
                        transition={{ duration: 1 }}
                    />
                </a>
            </motion.svg>
            <div className="absolute pointer-events-none">
                {children}
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48" // Scaled up for visibility
                    height="48"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, 8, 0] }} // Moves down 8px and back
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
                    <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" />
                </motion.svg>
            </div> */}
        </a>

    )
}
