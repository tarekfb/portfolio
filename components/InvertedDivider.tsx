"use client";
import { useContext } from "react";
import { DividerContext } from "./context/DividerProvider";
import { motion } from "framer-motion";

export default function RandomizedDivider() {
    const { firstPath} = useContext(DividerContext);

    return (
        <div style={{ transform: 'scaleY(-1)' }}>
            <svg viewBox="0 0 1440 320" className="w-full">
                <motion.path
                    className="fill-accent-light stroke-accent-light stroke-2"
                    initial={false}
                    animate={{ d: firstPath }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </svg>
        </div>
    )
}