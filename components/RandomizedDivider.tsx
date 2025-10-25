"use client";

import { useContext } from "react";
import { DividerContext } from "./context/DividerProvider";
import { motion } from "framer-motion";

export default function RandomizedDivider() {
    const { dividerPathData, dividerPathData2, dividerPathData3 } = useContext(DividerContext);
    return (
        <>
            <div className="-mb-32 md:-mb-72">
                <motion.svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <motion.path initial={false} className="fill-accent-light"
                        animate={{ d: dividerPathData3 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                </motion.svg>
                <div className="h-24 md:h-34 bg-accent-light"></div>
            </div>
            <div className="-mb-32 md:-mb-66">
                <motion.svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <motion.path initial={false} className="fill-accent-lighter"
                        animate={{ d: dividerPathData2 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                </motion.svg>
                <div className="h-24 md:h-34 bg-accent-lighter"></div>
            </div>

            <motion.svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <motion.path initial={false} className="fill-accent-lightest"
                    animate={{ d: dividerPathData }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </motion.svg>
            {/* <div className="h-24 bg-accent/25"></div> */}
        </>
    )
}