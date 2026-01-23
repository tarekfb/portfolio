"use client";
import { useContext } from "react";
import { DividerContext } from "./context/DividerProvider";
import { motion } from "framer-motion";

export default function RandomizedDivider() {
    const { firstPath, secondPath, thirdPath } = useContext(DividerContext);

    return (
        <>
            <div className="-mb-96 md:-mb-[40vh]">
                <svg viewBox="0 0 1440 320" className="w-full">
                    <motion.path
                        className="fill-accent-light stroke-accent-light stroke-2"
                        initial={false}
                        animate={{ d: thirdPath }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                </svg>
                <div className="h-96 bg-accent-light"></div>
            </div>
            <div className="-mb-96 md:-mb-[40vh]">
                <svg viewBox="0 0 1440 320" className="w-full">
                    <motion.path
                        className="fill-accent-lighter stroke-accent-lighter stroke-2 "
                        initial={false}
                        animate={{ d: secondPath }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                </svg>
                <div className="h-96 bg-accent-lighter"></div>
            </div>
            <svg viewBox="0 0 1440 320" className="w-full">
                <motion.path
                    className="fill-accent-lightest stroke-accent-lightest stroke-2"
                    initial={false}
                    animate={{ d: firstPath }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </svg>
        </>
    )
}