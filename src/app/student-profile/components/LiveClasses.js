"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaFilePdf,
  FaBullhorn,
  FaVideo,
  FaExternalLinkAlt,
  FaBookOpen,
  FaLink,
} from "react-icons/fa";

import { useGetStudentClassLInks } from "@/Hooks/useGetStudentClassLinks";
import { useGetStudentNotes } from "@/Hooks/useGetStudentNotes";
import { useGetStudentBatchById } from "@/Hooks/useGetStudentBatchById";
import { useAnnouncementByBatchId } from "@/Hooks/useAnnouncementByBatchId";
import capitalizeFirstLetter from "@/Utils/captilizeFirstLetter";
import { formatISTDateTime } from "@/Utils/formatDate";
import PdfViewer from "@/Utils/pdfViewer";

import Modal from "@/app/Components/ui/Modals";
import Loading from "@/app/Components/ui/Loading";
import { NotesSkeleton } from "@/app/Skeletons/NotesSkeleton";
import { ClassLinksSkeleton } from "@/app/Skeletons/ClassesSkeleton";
import { AnnouncementsSkeleton } from "@/app/Skeletons/AnnouncementSkeleton";

import PortalCard from "@/app/Components/portal-ui/PortalCard";
import PortalBadge from "@/app/Components/portal-ui/PortalBadge";
import PortalButton from "@/app/Components/portal-ui/PortalButton";
import PortalEmptyState from "@/app/Components/portal-ui/PortalEmptyState";

export default function LiveClasses() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("notes");
  const batchId = searchParams.get("batchId");

  const { data: classLinks, isLoading: classLoading } = useGetStudentClassLInks(batchId, activeTab);
  const { data: notes, isLoading: notesLoading } = useGetStudentNotes(batchId, activeTab);
  const { data: batch, isLoading: batchLoading } = useGetStudentBatchById(batchId);
  const { data: announcements, isLoading: annoucementLoading } = useAnnouncementByBatchId(batchId, activeTab);

  const [pdfOpen, setPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  if (batchLoading) return <Loading />;

  return (
    <div className="space-y-8">
      {/* Batch Executive Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[32px] bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
      >
        <div className="flex-1">
          <span className="inline-flex rounded-full bg-yellow-400/15 border border-yellow-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
            Live Batch Environment
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              {batch?.name || "My Batch"}
            </span>
          </h1>
          <p className="mt-1 text-slate-300 font-medium text-sm max-w-xl">
            {batch?.course?.title || "Language Course"}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 backdrop-blur-md text-xs font-bold text-slate-200 border border-white/10">
            <FaUserTie className="text-yellow-400" />
            <span>
              Trainers:{" "}
              {batch?.trainers?.map((t) => capitalizeFirstLetter(t.fullName)).join(", ") || "Not Assigned"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full lg:w-72">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Course</p>
            <p className="mt-1 text-xs font-extrabold text-yellow-300 truncate">{batch?.course?.title}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Trainers</p>
            <p className="mt-1 text-base font-extrabold text-yellow-300">{batch?.trainers?.length || 0}</p>
          </div>
        </div>
      </motion.div>

      {/* Content Section Tabs Switcher */}
      <div className="rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xs">
        <div className="grid grid-cols-3 gap-1">
          <button
            onClick={() => setActiveTab("notes")}
            className={`flex items-center justify-center gap-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "notes"
                ? "bg-yellow-400 text-slate-950 shadow-xs"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FaBookOpen />
            <span>Class Notes</span>
          </button>

          <button
            onClick={() => setActiveTab("links")}
            className={`flex items-center justify-center gap-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "links"
                ? "bg-yellow-400 text-slate-950 shadow-xs"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FaLink />
            <span>Class Links</span>
          </button>

          <button
            onClick={() => setActiveTab("announcements")}
            className={`flex items-center justify-center gap-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "announcements"
                ? "bg-yellow-400 text-slate-950 shadow-xs"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FaBullhorn />
            <span>Updates</span>
          </button>
        </div>
      </div>

      {/* Notes Tab Content */}
      {!notesLoading && activeTab === "notes" && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Study Materials & Notes</h2>

          {notes && notes.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {notes.map((note) => (
                <PortalCard key={note._id} padding="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex gap-2 mb-2">
                        <PortalBadge variant="info" size="sm">Note #{note?.noteNumber || "-"}</PortalBadge>
                        <PortalBadge variant={note?.visibility === "public" ? "active" : "blocked"} size="sm">
                          {note?.visibility}
                        </PortalBadge>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base">{note?.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{note?.description}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600 text-lg">
                        <FaFilePdf />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold text-slate-800">
                          {note?.file?.originalName || "Class Document"}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {new Date(note.createdAt).toLocaleDateString("en-IN")}
                        </p>
                      </div>
                    </div>

                    <PortalButton
                      size="sm"
                      variant="yellowOutline"
                      onClick={() => {
                        setPdfUrl(note?.file?.url);
                        setPdfOpen(true);
                      }}
                    >
                      View PDF
                    </PortalButton>
                  </div>
                </PortalCard>
              ))}
            </div>
          ) : (
            <PortalEmptyState
              icon={FaBookOpen}
              title="No Notes Uploaded"
              description="Your instructor hasn't uploaded notes for this batch yet."
            />
          )}
        </div>
      )}
      {notesLoading && <NotesSkeleton />}

      {/* Class Links Tab Content */}
      {!classLoading && activeTab === "links" && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Live Meeting Links & Recordings</h2>

          {classLinks && classLinks.length > 0 ? (
            <div className="space-y-4">
              {classLinks.map((link) => (
                <PortalCard key={link._id} padding="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex gap-2 mb-2">
                        <PortalBadge variant="info" size="sm">Class #{link.classNumber || "-"}</PortalBadge>
                        <PortalBadge variant={link.status} size="sm">{link.status}</PortalBadge>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base">{link.title}</h4>
                      <p className="text-xs text-yellow-700 font-semibold mt-1">
                        Scheduled: {formatISTDateTime(link.meetingDate)} ({link.durationMinutes} mins)
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={link.meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-2xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-xs"
                      >
                        <FaExternalLinkAlt /> Join Live Meeting
                      </a>
                      {link.recordingUrl && (
                        <a
                          href={link.recordingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 min-h-[44px] px-4 rounded-2xl bg-blue-50 text-blue-700 font-bold text-xs hover:bg-blue-100 transition-colors"
                        >
                          🎥 Recording
                        </a>
                      )}
                    </div>
                  </div>
                </PortalCard>
              ))}
            </div>
          ) : (
            <PortalEmptyState
              icon={FaVideo}
              title="No Class Links Available"
              description="No live meeting links have been added for this batch."
            />
          )}
        </div>
      )}
      {classLoading && <ClassLinksSkeleton />}

      {/* Announcements Tab Content */}
      {!annoucementLoading && activeTab === "announcements" && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Batch Announcements & Updates</h2>

          {announcements && announcements.length > 0 ? (
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <PortalCard key={announcement._id} padding="p-5">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-800 text-xl border border-yellow-300">
                      <FaBullhorn />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        {announcement?.pinned && (
                          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 font-bold text-amber-800">
                            📌 Pinned
                          </span>
                        )}
                        <span>{formatISTDateTime(announcement?.createdAt)}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base mt-1">{announcement?.title}</h4>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed whitespace-pre-wrap">
                        {announcement?.message}
                      </p>
                    </div>
                  </div>
                </PortalCard>
              ))}
            </div>
          ) : (
            <PortalEmptyState
              icon={FaBullhorn}
              title="No Batch Announcements"
              description="No specific announcements posted for this batch yet."
            />
          )}
        </div>
      )}
      {annoucementLoading && <AnnouncementsSkeleton />}

      {/* PDF Modal Viewer */}
      <Modal isOpen={pdfOpen} onClose={() => setPdfOpen(false)}>
        <PdfViewer url={pdfUrl} />
      </Modal>
    </div>
  );
}