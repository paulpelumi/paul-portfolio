"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useState, type PointerEvent, type ReactNode } from "react";

const SPRING = { stiffness: 180, damping: 22, mass: 0.6 };

export function PortraitMorph({
  srcA,
  srcB,
  alt,
}: {
  srcA: string;
  srcB: string;
  alt: string;
}): ReactNode {
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, SPRING);
  const y = useSpring(pointerY, SPRING);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>): void => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(horizontal * 8);
    pointerY.set(vertical * 8);
  };

  const resetPointer = (): void => {
    setHovered(false);
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ x, y, scale: hovered && !reduceMotion ? 1.015 : 1 }}
        transition={{ scale: { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] } }}
      >
        <Image
          src={srcA}
          alt={alt}
          fill
          priority
          sizes="(min-width: 768px) 400px, 85vw"
          className="pointer-events-none object-cover object-top"
        />
        <Image
          src={srcB}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 768px) 400px, 85vw"
          className={`pointer-events-none object-cover object-top transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
        />
      </motion.div>
    </div>
  );
}