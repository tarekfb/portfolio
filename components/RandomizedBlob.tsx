"use client";
import { useContext } from "react";
import { BlobContext } from "./context/BlobProvider";
import { motion } from "framer-motion"; 

export default function RandomizedBlob() {
    const { blobPathData } = useContext(BlobContext);
    return (
        <motion.svg viewBox="0 0 250 250" className="w-72 h-72 md:w-96 md:h-96 absolute bottom-20 md:bottom-30 right-5 md:right-15z" xmlns="http://www.w3.org/2000/svg">
            <motion.path className="fill-accent/50" 
            animate={{d: blobPathData}}
            transition={{duration: 1}}
           />
        </motion.svg>
    )
}
