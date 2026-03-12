"use client";

import { GridScan } from "@/app/components/Animation/GridScan";
import ScrollVelocity from "@/app/components/Animation/ScrollVelocity";
import SplitText from "@/app/components/Animation/SplitText";
import TrueFocus from "@/app/components/Animation/TrueFocus";
import { FloatingDock } from "@/components/ui/floating-dock";

import { links } from "../data/links";

export default function HeroSection() {
  return (
    <>
      <section id="hero" className="relative min-h-screen overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#1F2937"
            gridScale={0.1}
            scanColor="#FFFFFF"
            scanOpacity={0.25}
            enablePost
            bloomIntensity={0.45}
            chromaticAberration={0.0015}
            noiseIntensity={0.01}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="flex flex-col items-center text-center pointer-events-none">
            <SplitText
              text="Welcome to my Portfolio"
              className="text-5xl font-semibold tracking-tight"
              delay={70}
              duration={1.5}
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="mt-5 pointer-events-auto">
              <TrueFocus
                sentence="WebDeveloper FullstackDeveloper"
                blurAmount={4}
                borderColor="#A5B4FC"
                animationDuration={0.45}
                pauseBetweenAnimations={1.2}
              />
            </div>
          </div>
          <div className="cursor-pointer fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <FloatingDock
              items={links}
              desktopClassName="
                scale-[0.75]
                bg-[#121826]/70
                backdrop-blur-xl
                border border-white/10
                shadow-2xl
                "
              mobileClassName="bg-[#121826] border border-white/10 shadow-xl"
            />
          </div>
        </div>
      </section>

      <ScrollVelocity
        texts={["Web Developer", "Fullstack Engineer"]}
        velocity={90}
        className="text-slate-500"
      />
    </>
  );
}
