"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const COLORS = [
  "#F59E0B", // amber-500
  "#FBBF24", // amber-400
  "#EAB308", // yellow-500
  "#FACC15", // yellow-400
  "#FEF08A", // yellow-200
  "#10B981", // emerald-500
  "#3B82F6", // blue-500
];

export default function GameConfetti({ count = 36, duration = 2.8, onComplete }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const distance = 80 + Math.random() * 220;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance - (40 + Math.random() * 80);
      const size = 6 + Math.random() * 8;
      const color = COLORS[i % COLORS.length];
      const rotation = Math.random() * 720 - 360;
      const isStar = i % 3 === 0;

      return {
        id: i,
        x,
        y,
        size,
        color,
        rotation,
        isStar,
      };
    });

    setParticles(items);

    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [count, duration, onComplete]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 1, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [1, 1, 0],
            scale: [0, 1.3, 0.7],
            x: p.x,
            y: p.y,
            rotate: p.rotation,
          }}
          transition={{
            duration: 1.6 + Math.random() * 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            backgroundColor: p.isStar ? "transparent" : p.color,
            borderRadius: p.isStar ? "0" : "50%",
          }}
        >
          {p.isStar ? (
            <span
              style={{
                fontSize: p.size * 1.6,
                color: p.color,
                display: "block",
                lineHeight: 1,
              }}
            >
              ★
            </span>
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}
