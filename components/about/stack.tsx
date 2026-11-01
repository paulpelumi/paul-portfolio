"use client";

import { RotateCcw } from "lucide-react";
import type { Body } from "matter-js";
import { useEffect, useRef, useState, type ReactNode } from "react";

const CHIPS = [
  { label: "React", background: "#176B7B", foreground: "#FFFFFF" },
  { label: "Next.js", background: "#172334", foreground: "#FFFFFF" },
  { label: "TypeScript", background: "#285F9D", foreground: "#FFFFFF" },
  { label: "JavaScript", background: "#D6B523", foreground: "#172334" },
  { label: "Node.js", background: "#277052", foreground: "#FFFFFF" },
  { label: "Express.js", background: "#253B53", foreground: "#FFFFFF" },
  { label: "PostgreSQL", background: "#37688E", foreground: "#FFFFFF" },
  { label: "Drizzle ORM", background: "#50835E", foreground: "#FFFFFF" },
  { label: "Tailwind CSS", background: "#147E92", foreground: "#FFFFFF" },
  { label: "GitHub", background: "#172334", foreground: "#FFFFFF" },
  { label: "Postman", background: "#A84E2C", foreground: "#FFFFFF" },
] as const;

type ChipBody = {
  body: Body;
  width: number;
  height: number;
};

const WALL_PADDING = 16;
const WALL_THICKNESS = 160;

export function Stack(): ReactNode {
  const arenaRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const chipRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const arena = arenaRef.current;
    const measure = measureRef.current;
    if (!arena || !measure) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const initialize = async (): Promise<void> => {
      const Matter = await import("matter-js");
      if (cancelled) return;

      const { Engine, Runner, World, Bodies, Body, Mouse, MouseConstraint, Events } = Matter;
      let width = arena.clientWidth;
      let height = arena.clientHeight;
      const engine = Engine.create();
      engine.gravity.y = 1;

      const floor = Bodies.rectangle(
        width / 2,
        height + WALL_THICKNESS / 2,
        width + WALL_THICKNESS * 2,
        WALL_THICKNESS,
        { isStatic: true },
      );
      const leftWall = Bodies.rectangle(
        -WALL_THICKNESS / 2,
        height / 2,
        WALL_THICKNESS,
        height * 3,
        { isStatic: true },
      );
      const rightWall = Bodies.rectangle(
        width + WALL_THICKNESS / 2,
        height / 2,
        WALL_THICKNESS,
        height * 3,
        { isStatic: true },
      );
      World.add(engine.world, [floor, leftWall, rightWall]);

      const measuredChips = Array.from(measure.children) as HTMLElement[];
      const states: ChipBody[] = CHIPS.flatMap((_, index) => {
        const element = chipRefs.current[index];
        const measured = measuredChips[index];
        if (!element || !measured) return [];

        const bounds = measured.getBoundingClientRect();
        const chipWidth = bounds.width;
        const chipHeight = bounds.height;
        const halfWidth = chipWidth / 2;
        const minX = Math.min(width / 2, WALL_PADDING + halfWidth);
        const maxX = Math.max(minX, width - WALL_PADDING - halfWidth);
        const x = minX + Math.random() * (maxX - minX);
        const y = -80 - index * 52;
        const body = Bodies.rectangle(x, y, chipWidth, chipHeight, {
          chamfer: { radius: 14 },
          restitution: 0.32,
          friction: 0.5,
          frictionAir: 0.022,
          density: 0.0018,
          angle: (Math.random() - 0.5) * 0.3,
        });
        World.add(engine.world, body);
        element.style.visibility = "visible";
        return [{ body, width: chipWidth, height: chipHeight }];
      });

      const mouse = Mouse.create(arena);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.18,
          damping: 0.18,
          render: { visible: false },
        },
      });
      World.add(engine.world, mouseConstraint);
      Events.on(mouseConstraint, "startdrag", () => {
        arena.style.cursor = "grabbing";
      });
      Events.on(mouseConstraint, "enddrag", () => {
        arena.style.cursor = "grab";
      });

      const runner = Runner.create();
      Runner.run(runner, engine);

      let animationFrame = 0;
      const tick = (): void => {
        for (const [index, state] of states.entries()) {
          const element = chipRefs.current[index];
          if (!element) continue;
          const { x, y } = state.body.position;
          element.style.transform = `translate3d(${x - state.width / 2}px, ${y - state.height / 2}px, 0) rotate(${state.body.angle}rad)`;
        }
        animationFrame = requestAnimationFrame(tick);
      };
      animationFrame = requestAnimationFrame(tick);

      const resizeObserver = new ResizeObserver(() => {
        const nextWidth = arena.clientWidth;
        const nextHeight = arena.clientHeight;
        if (nextWidth === width && nextHeight === height) return;
        width = nextWidth;
        height = nextHeight;
        Body.setPosition(floor, {
          x: width / 2,
          y: height + WALL_THICKNESS / 2,
        });
        Body.setPosition(leftWall, { x: -WALL_THICKNESS / 2, y: height / 2 });
        Body.setPosition(rightWall, {
          x: width + WALL_THICKNESS / 2,
          y: height / 2,
        });
      });
      resizeObserver.observe(arena);

      cleanup = () => {
        cancelAnimationFrame(animationFrame);
        resizeObserver.disconnect();
        Runner.stop(runner);
        World.clear(engine.world, false);
        Engine.clear(engine);
      };
    };

    void initialize();
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [resetKey]);

  return (
    <section className="flex flex-col gap-3 lg:col-span-2" aria-labelledby="stack-heading">
      <h2 id="stack-heading" className="text-sm font-semibold uppercase tracking-[0.1em] text-[#52657A] dark:text-[#A9B7C9]">
        Technology stack
      </h2>
      <div className="relative h-64 overflow-hidden rounded-xl border border-[#253B53]/10 bg-white dark:border-white/10 dark:bg-[#101C2C] sm:h-72">
        <div
          ref={measureRef}
          aria-hidden="true"
          className="pointer-events-none invisible absolute -left-[10000px] top-0 flex gap-2"
        >
          {CHIPS.map((chip) => (
            <ChipPill key={`measure-${chip.label}`} chip={chip} />
          ))}
        </div>
        <div
          ref={arenaRef}
          aria-hidden="true"
          className="absolute inset-0 cursor-grab select-none"
          style={{ touchAction: "none" }}
        >
          {CHIPS.map((chip, index) => (
            <span
              key={`${resetKey}-${chip.label}`}
              ref={(element) => {
                chipRefs.current[index] = element;
              }}
              className="pointer-events-none invisible absolute left-0 top-0 inline-flex whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold shadow-md will-change-transform sm:text-base"
              style={{
                backgroundColor: chip.background,
                color: chip.foreground,
                transform: "translate3d(-9999px, -9999px, 0)",
              }}
            >
              {chip.label}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setResetKey((current) => current + 1)}
          aria-label="Reset technology stack"
          title="Reset stack"
          className="focus-ring absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#253B53]/15 bg-white text-[#253B53] shadow-sm transition-colors hover:border-[#3978C6] dark:border-white/20 dark:bg-[#172334] dark:text-white"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <ul className="sr-only" aria-label="Technologies in this stack">
        {CHIPS.map((chip) => <li key={chip.label}>{chip.label}</li>)}
      </ul>
    </section>
  );
}

function ChipPill({ chip }: { chip: (typeof CHIPS)[number] }): ReactNode {
  return (
    <span
      className="inline-flex whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold sm:text-base"
      style={{ backgroundColor: chip.background, color: chip.foreground }}
    >
      {chip.label}
    </span>
  );
}