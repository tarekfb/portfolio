"use client";

import { useContext } from "react";
import { DividerContext } from "./context/DividerProvider";
import { motion } from "framer-motion"; // 👈 Import motion

export default function RandomizedDivider() {
    const { dividerPathData } = useContext(DividerContext);
    return (
        <motion.svg viewBox="0 0 1440 320"  xmlns="http://www.w3.org/2000/svg">
            <motion.path initial={false} className="fill-accent/25"
                animate={{ d: dividerPathData }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </motion.svg>
    )
}