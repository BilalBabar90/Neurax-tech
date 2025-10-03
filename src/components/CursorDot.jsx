"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50"
      animate={{ x: position.x - 8, y: position.y - 8 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}
