"use client";

import { Timeline } from "@/components/ui/timeline";
import { experienceData } from "@/data/experienceData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full overflow-clip">
      <Timeline data={experienceData} />
    </section>
  );
}
