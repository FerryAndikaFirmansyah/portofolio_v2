"use client";

import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ===== Title ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight">Contact Me</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Have a project idea, collaboration opportunity, or just want to say
            hello? Feel free to reach out. I’m always open to discussing new
            ideas, creative projects, and exciting opportunities.
          </p>
        </div>

        {/* ===== Grid 2 Columns ===== */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* ================= LEFT — CONTACT INFO ================= */}
          <div className="rounded-2xl border border-[#1F2937] bg-[#0B0F19] p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <p className="text-slate-400 mb-8 leading-relaxed">
              You can contact me through the following platforms. I usually
              respond within 24 hours.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ferryandika089@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-[#121826] border border-[#1F2937] group-hover:border-slate-400 transition">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium">ferryandika089@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="https://wa.me/6285888811049"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-[#121826] border border-[#1F2937] group-hover:border-slate-400 transition">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone / WhatsApp</p>
                  <p className="font-medium">+6285888811049</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/ferry.af_"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-[#121826] border border-[#1F2937] group-hover:border-slate-400 transition">
                  <Instagram size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Instagram</p>
                  <p className="font-medium">@ferry.af_</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ferry-andika-firmansyah10"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-[#121826] border border-[#1F2937] group-hover:border-slate-400 transition">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="font-medium">Ferry Andika Firmansyah</p>
                </div>
              </a>
            </div>
          </div>

          {/* ================= RIGHT — MESSAGE FORM ================= */}
          <div className="rounded-2xl border border-[#1F2937] bg-[#0B0F19] p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm text-slate-400">Your Name</label>
                <input
                  type="text"
                  placeholder="your name"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#121826] border border-[#1F2937] focus:outline-none focus:border-slate-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-slate-400">Email Address</label>
                <input
                  type="email"
                  placeholder="your email"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#121826] border border-[#1F2937] focus:outline-none focus:border-slate-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-slate-400">Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#121826] border border-[#1F2937] focus:outline-none focus:border-slate-400 transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-900 border border-slate-600 hover:opacity-90 transition font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
