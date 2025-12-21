"use client";
import { useContext } from "react";
import { BlobContext } from "./context/BlobProvider";
import { motion } from "framer-motion";

export default function RandomizedBlob({ children }: { children?: React.ReactNode }) {
    const { blobPathData } = useContext(BlobContext);
    return (
        <div className="flex items-center justify-center group">
            <motion.svg viewBox="0 0 192 192" className="size-72 md:size-72" xmlns="http://www.w3.org/2000/svg">
                <motion.path className="fill-accent/50 group-hover:stroke-red-300 stroke-4"
                    animate={{ d: blobPathData }}
                    transition={{ duration: 1 }}
                />
            </motion.svg>
            {children && children}
        </div>

    )
}
