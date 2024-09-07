"use client";

import { useEffect, useRef } from "react";
import ImageCard from "@/components/image-card";
import { animate, motion, useMotionValue } from "framer-motion";

export default function InfiniteScroll() {
  const images = [
    "next-js.svg",
    "next-js.svg",
    "next-js.svg",
    "next-js.svg",
    "next-js.svg",
    "next-js.svg",
  ];
  const ref = useRef<HTMLDivElement>(null);

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    let controls;

    let width = ref.current.scrollWidth;
    let finalPosition = -width / 2 - 16;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => controls.stop();
  }, [ref, xTranslation]);

  return (
    <motion.div
      className="flex gap-4 w-fit absolute left-0	"
      ref={ref}
      style={{ x: xTranslation }}
    >
      {[...images, ...images].map((src, idx) => (
        <ImageCard src={src} />
      ))}
    </motion.div>
  );
}
