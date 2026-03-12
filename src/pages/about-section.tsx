"use client";

import PixelSnow from "@/app/components/Animation/PixelSnow";
import TextPressure from "@/app/components/Animation/TextPressure";
import ProfileCard from "@/app/components/ProfileCard/ProfileCard";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <PixelSnow
        color="#A5B4FC"
        flakeSize={0.01}
        pixelResolution={200}
        speed={1}
        density={0.25}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <TextPressure
              text="Hello, I'm Ferry"
              textColor="#FFFFFF"
              strokeColor="#1F2937"
              minFontSize={28}
            />

            <motion.p
              className="
                mt-8
                mx-auto lg:mx-0
                max-w-xl
                text-base
                sm:text-lg
                leading-relaxed
                bg-gradient-to-r
                from-slate-400 via-white to-slate-400
                bg-[length:200%_100%]
                bg-clip-text text-transparent
              "
              animate={{ backgroundPosition: "200% 50%" }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <b>
                I am a Web Developer with a strong interest in building clean,
                efficient, and user-focused web applications
              </b>
              . I enjoy transforming ideas into functional digital products
              while maintaining a balance between performance, usability, and
              visual clarity.
              <br />
              <br />
              My primary technology stack includes{" "}
              <b>React, Next.js, Tailwind CSS, Node.js, and MySQL</b>. I focus
              mainly on front-end development with a growing understanding of
              fullstack workflows.
              <br />
              <br />
              <b>My career goal is to become a Fullstack Developer</b>,
              expanding my technical expertise while contributing to meaningful
              projects.
            </motion.p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-center lg:justify-end">
            <div className="scale-90 sm:scale-95 lg:scale-100">
              <ProfileCard
                name="Ferry Andika Firmansyah"
                handle="Ferry AF"
                title="Web Developer"
                status="Open to Work"
                avatarUrl="/assets/profilecard/pict1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
