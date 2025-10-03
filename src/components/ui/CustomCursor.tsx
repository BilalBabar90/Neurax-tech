"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorDot() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-orange-500 rounded-full pointer-events-none z-[9999]"
      animate={{ x: pos.x - 8, y: pos.y - 8 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}
