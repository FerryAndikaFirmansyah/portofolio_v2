"use client";

import {
  IconCertificate,
  IconCode,
  IconHome,
  IconMail,
} from "@tabler/icons-react";

export const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-slate-400 hover:text-white transition-colors" />
    ),
    href: "#hero",
  },
  {
    title: "Projects",
    icon: (
      <IconCode className="h-full w-full text-slate-400 hover:text-white transition-colors" />
    ),
    href: "#project",
  },
  {
    title: "Certificates",
    icon: (
      <IconCertificate className="h-full w-full text-slate-400 hover:text-white transition-colors" />
    ),
    href: "#certificates",
  },
  {
    title: "Contacts",
    icon: (
      <IconMail className="h-full w-full text-slate-400 hover:text-white transition-colors" />
    ),
    href: "#contact",
  },
];
