"use client";

import { useMotionValue } from "framer-motion";
import { useTransform } from "framer-motion";
import { useEffect } from "react";
import { animate } from "framer-motion";
import { motion } from "framer-motion";

interface CountProps {
  counts: number;
  duration?: number; 
}

export default function CountAnimation({ counts, duration = 3 }: CountProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    new Intl.NumberFormat().format(Math.round(latest))
  );

  useEffect(() => {
    const controls = animate(count, counts, { duration }); 

    return () => controls.stop();
  }, [counts, duration, count]);
  return (
    <motion.div className="text-3xl font-semibold text-gray-700">
      {rounded}
    </motion.div>
  );
}
