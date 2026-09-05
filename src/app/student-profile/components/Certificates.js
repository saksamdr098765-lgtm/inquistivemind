"use client";

import { motion } from "framer-motion";
import { FaAward, FaDownload, FaEye } from "react-icons/fa";
import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";

const certificates = [
  {
    id: 1,
    course: "French General Language",
    level: "Intermediate B1",
    issued: "15 June 2026",
    certificateNo: "IMA-2026-0001",
    instructor: "Sakshi Goel",
    status: "Issued",
  },
  {
    id: 2,
    course: "Business French & Conversation",
    level: "Advanced B2",
    issued: "02 April 2026",
    certificateNo: "IMA-2026-0002",
    instructor: "Sakshi Goel",
    status: "Issued",
  },
];

export default function Certificates() {
  return (
    <div className="space-y-8">
      {/* Hero Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-6 sm:p-8 text-white shadow-xl flex items-center gap-5"
      >
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 border border-white/30 text-3xl text-white backdrop-blur-md shadow-xs">
          <FaAward />
        </div>

        <div className="relative">
          <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Achievements
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            My Course Certificates
          </h1>
          <p className="mt-1 text-orange-100 font-medium text-sm">
            View, verify, and download your accredited academy certificates.
          </p>
        </div>
      </motion.div>

      {/* Certificates Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((item) => (
          <PortalCard key={item.id} padding="p-0" hoverable className="overflow-hidden">
            {/* Top Banner */}
            <div className="bg-slate-900 border-b border-slate-800 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-black text-white">{item.course}</h3>
                <p className="text-xs text-yellow-400 font-bold mt-1">{item.level}</p>
              </div>
              <FaAward className="text-4xl text-yellow-400/40" />
            </div>

            {/* Certificate Details */}
            <div className="p-6 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 font-semibold uppercase">Issue Date</span>
                  <span className="font-bold text-slate-800">{item.issued}</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 font-semibold uppercase">Instructor</span>
                  <span className="font-bold text-slate-800">{item.instructor}</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-yellow-50/60 border border-yellow-200/60">
                  <span className="text-yellow-800 font-bold uppercase">Certificate ID</span>
                  <span className="font-mono font-extrabold text-yellow-900">{item.certificateNo}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <PortalBadge variant="active">{item.status}</PortalBadge>

                <div className="flex gap-2">
                  <PortalButton size="sm" variant="outline" icon={FaEye}>
                    Preview
                  </PortalButton>
                  <PortalButton size="sm" icon={FaDownload}>
                    Download PDF
                  </PortalButton>
                </div>
              </div>
            </div>
          </PortalCard>
        ))}
      </div>
    </div>
  );
}