"use client";
import { animate, motion, useInView, useMotionValue, useTransform, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface MonthlyVisitorsProps {
  amount: number;
}

export default function MonthlyVisitors({ amount }: MonthlyVisitorsProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(count, amount, { duration: 5 });
    }
  }, [count, inView, amount]);

  return <div>Monthly visitors: <motion.span ref={ref} className="font-mono text-accent">{rounded}</motion.span>+</div>
}
