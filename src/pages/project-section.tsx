"use client";

import CircularGallery from "@/app/components/Animation/CircularGallery";
import Card from "@/components/ui/card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Yayasan Hidayatullah Gorontalo",
      description: "Landing Page",
      image: "/assets/projects/yayasan-hidayatullah.png",
      link: "https://yayasan-hidayatullah-gorontaloutara.vercel.app/",
      tech: "React JS, TailwindCSS",
    },
    {
      title: "SportOn",
      description: "Simple E-Commerce SportOn",
      image: "/assets/projects/sporton.png",
      link: "https://sporton-fe-eta.vercel.app/",
      tech: "NextJS, TypeScript, Tailwind, Zustand",
    },
    {
      title: "Samudra Gate Logistics",
      description: "Company Profile",
      image: "/assets/projects/companyprofile-samudra.png",
      link: "https://companyprofile-samudragatelogistics.netlify.app/",
      tech: "HTML, CSS, Javascript",
    },
    {
      title: "LaundryKu",
      description: "Laundry Management System",
      image: "/assets/projects/laundryku.png",
      link: "https://github.com/FerryAndikaFirmansyah/laundryku-app",
      tech: "React JS, Tailwind, Java SpringBoot, MySQL",
    },
    {
      title: "PetShop Zaman Now",
      description: "Simple E-Commerce PetShop",
      image: "/assets/projects/petshop-zamannow.png",
      link: "https://petshopzn-fe.vercel.app/",
      tech: "React JS, Vite, Bootstrap, Sequelize, Express, PostgreeSQL",
    },
  ];

  return (
    <section
      id="project"
      className="relative py-24 bg-[#0B0F14] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Projects
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          All of projects showcasing my expertise in website developer
        </p>
      </div>
      {/* ===== Circular Gallery ===== */}
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          scrollSpeed={2}
        />
        {/* <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.4)", // level gelap
            pointerEvents: "none",
          }}
        /> */}
      </div>

      {/* ===== Title ===== */}
      <div className="max-w-6xl mx-auto px-6 mt-20 text-center">
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          This is a showcase project, You can access all of my projects in this
          card
        </p>
      </div>

      {/* ===== Project Cards ===== */}
      <div className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
