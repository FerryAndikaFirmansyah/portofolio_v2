"use client";

import Aurora from "@/app/components/Animation/Aurora";
import {
  IconArrowUpRight,
  IconClipboardCopy,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

// ===== Header Image Component =====
const CertificateHeader = ({
  image,
  link,
}: {
  image: string;
  link?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full h-full rounded-xl overflow-hidden group"
    >
      <img
        src={image}
        alt="project"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <span className="flex items-center gap-2 text-white text-sm font-semibold">
          View Certificates <IconArrowUpRight size={16} />
        </span>
      </div>
    </a>
  );
};

export default function ProjectSection() {
  const items = [
    {
      title: "Web Programming",
      description: "Yayasan PLAN International",
      image: "assets/certificates/wp-fyep.png",
      link: "https://lms.kitakerja.id/mod/customcert/view.php?id=1432&downloadown=1",
      header: (
        <CertificateHeader
          image="assets/certificates/wp-fyep.png"
          link="https://lms.kitakerja.id/mod/customcert/view.php?id=1432&downloadown=1"
        />
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "FullStack Web Developer",
      description: "Course-Net Indonesia",
      image: "assets/certificates/fullstack-coursenet.png",
      link: "https://coursenet.s3.ap-southeast-3.amazonaws.com/Course-Net-Advanced/prod/member/CompetencyCertificateFerry%20Andika%20Firmansyah-36504.pdf",
      header: (
        <CertificateHeader
          image="assets/certificates/fullstack-coursenet.png"
          link="https://coursenet.s3.ap-southeast-3.amazonaws.com/Course-Net-Advanced/prod/member/CompetencyCertificateFerry%20Andika%20Firmansyah-36504.pdf"
        />
      ),
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Software Engineer",
      description: "RevoU",
      image: "assets/certificates/software-engineer.png",
      link: "https://certificates.revou.co/ferry-andika-firmansyah-certificate-attendance-sefc.pdf",
      header: (
        <CertificateHeader
          image="assets/certificates/software-engineer.png"
          link="https://certificates.revou.co/ferry-andika-firmansyah-certificate-attendance-sefc.pdf"
        />
      ),
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    // {
    //   title: "Data Analytics",
    //   description: "RevoU",
    //   image: "assets/certificates/data-analyst.png",
    //   link: "https://certificates.revou.co/ferry-andika-firmansyah-certificate-attendance-dafc.pdf",
    //   header: (
    //     <CertificateHeader
    //       image="assets/certificates/data-analyst.png"
    //       link="https://certificates.revou.co/ferry-andika-firmansyah-certificate-attendance-dafc.pdf"
    //     />
    //   ),
    //   icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    // },
    // {
    //   title: "Portofolio V2",
    //   description: "Web Portofolio using NextJs, Tailwind, Typescript",
    //   image: "assets/projects/portofolio-v2.png",
    //   link: "#",
    //   header: (
    //     <CertificateHeader image="assets/projects/portofolio-v2.png" link="#" />
    //   ),
    //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    // },
    // {
    //   title: "LaundryKu",
    //   description: "Laundry WebApp using React, JavaSpringboot, MySQL",
    //   image: "assets/projects/laundryku.png",
    //   link: "https://github.com/FerryAndikaFirmansyah/laundryku-app",
    //   header: (
    //     <CertificateHeader
    //       image="assets/projects/laundryku.png"
    //       link="https://github.com/FerryAndikaFirmansyah/laundryku-app"
    //     />
    //   ),
    //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    // },
  ];

  return (
    <section id="certificates" className="py-20">
      <Aurora
        colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
        blend={0.7}
        amplitude={1.0}
        speed={1}
      />
      <h3 className="pb-5 text-4xl text-center font-semibold text-white">
        Certificates
      </h3>
      <p className="pb-10 text-center text-slate-300">
        All Certificates I haved from learning any tech
      </p>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
