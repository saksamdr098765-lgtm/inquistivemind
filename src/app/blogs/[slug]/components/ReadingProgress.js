"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage = (scrollTop / scrollHeight) * 100;
      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    calculateProgress();
    window.addEventListener("scroll", calculateProgress);

    return () => {
      window.removeEventListener("scroll", calculateProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-1.5 w-full bg-slate-100/50 backdrop-blur-sm">
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-amber-500 via-orange-500 to-[#D6451B] transition-[width] duration-150 ease-out shadow-sm shadow-orange-500/50"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}