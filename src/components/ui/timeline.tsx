"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-dark-800 font-sans px-4 md:px-10"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto py-20 text-center items-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-white">
          Experience
        </h2>
        <p className="mt-3 text-slate-300">
          A brief overview of my professional journey.
        </p>
      </div>

      {/* TIMELINE */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-32">
        {data.map((item, index) => (
          <div
            key={index}
            className="
              grid
              grid-cols-[1fr_40px_1fr]
              gap-6
              items-start
              pt-24
            "
          >
            {/* LEFT */}
            <div className="text-right pr-6">
              <h3 className="text-lg md:text-xl font-bold text-stone-200">
                {item.title}
              </h3>
            </div>

            {/* CENTER DOT */}
            <div className="relative flex justify-center">
              <div
                className="
                h-4 w-4 rounded-full
                bg-neutral-900
                border border-neutral-700
                z-10
              "
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="pl-6">{item.content}</div>
          </div>
        ))}

        {/* CENTER LINE (ANIMATED) */}
        <div
          style={{ height }}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            top-0
            w-[2px]
            overflow-hidden
            bg-gradient-to-b
            from-transparent
            via-neutral-700
            to-transparent
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
          "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="
              absolute top-0 inset-x-0
              w-[2px]
              bg-gradient-to-t
              from-purple-500
              via-blue-500
              to-transparent
              rounded-full
            "
          />
        </div>
      </div>
    </section>
  );
};
