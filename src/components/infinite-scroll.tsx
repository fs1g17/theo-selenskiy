"use client";

import { useEffect, useRef } from "react";
import ImageCard from "@/components/image-card";
import { animate, motion, useMotionValue } from "framer-motion";

export default function InfiniteScroll() {
  const images = [
    "next-js.svg",
    "docker.svg",
    "firebase.svg",
    "node-js.svg",
    "react-js.svg",
    "typescript.svg"
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
    <div className="w-full h-[100px] relative overflow-hidden" id="poop">
      <motion.div
        className="flex gap-4 w-fit absolute left-0"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...images, ...images].map((src, idx) => (
          <ImageCard src={src} />
        ))}
      </motion.div>
    </div>
  );
}
