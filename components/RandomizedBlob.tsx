"use client";

import { useContext } from "react";
import { BlobContext } from "./context/BlobProvider";
import { motion } from "framer-motion"; // 👈 Import motion

export default function RandomizedBlob() {
    const { blobPathData } = useContext(BlobContext);
    return (
        <motion.svg viewBox="0 0 250 250" className="w-72 h-72 md:w-96 md:h-96 absolute bottom-20 md:bottom-30 right-5 md:right-15" xmlns="http://www.w3.org/2000/svg">
            <motion.path className="fill-accent/50" 
            // d="M45.6,-25.2C54.9,-10.1,55.4,11.1,46.4,30.5C37.3,49.8,18.7,67.3,-3.2,69.2C-25,71,-50,57.2,-55.9,39.6C-61.8,22.1,-48.6,0.8,-36.1,-16.1C-23.6,-33,-11.8,-45.6,3.2,-47.4C18.1,-49.3,36.2,-40.3,45.6,-25.2Z"
            animate={{d: blobPathData}}
            transition={{duration: 1, ease: "easeInOut"}}
           />
        </motion.svg>
    )
}