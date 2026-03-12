"use client";

import { motion } from "framer-motion";
import { techStack } from "../data/techStack";

export default function SkillsSection() {
  return (
    <section id="tech-stack" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Tools & Tech Stack
            </h2>

            <p className="mt-4 text-slate-400 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
              Technologies I use to build scalable, maintainable, and
              high-performance web applications.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map(({ name, icon: Icon }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="
                group
                flex items-center gap-3
                h-12 px-4 rounded-lg
                border border-white/10
                bg-white/[0.03]
                hover:bg-white/[0.07]
                transition-all duration-300
              "
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon
                    size={18}
                    className="text-slate-400 group-hover:text-white transition"
                  />
                </motion.div>

                <span className="text-sm text-slate-300 group-hover:text-white transition">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
