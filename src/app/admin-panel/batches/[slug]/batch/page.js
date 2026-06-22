"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaBookOpen,
  FaLink,
  FaPlus,
  FaEdit,
  FaTrash,
  FaExternalLinkAlt,
  FaFilePdf,
  FaSpinner,
} from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { useAdminGetAllNotes } from "@/Hooks/useAdminGetNotes";
import Modal from "@/app/Components/ui/Modals";
import PdfViewer from "@/Utils/pdfViewer";
import { usedeleteNotesMutation } from "@/app/mutations/notesMutation";
import { useAdminGetAllLinks } from "@/Hooks/useAdminGetClassLinks";
import { formatISTDateTime } from "@/Utils/formatDate";
import { useDeleteClassLinkMutation } from "@/app/mutations/classLinkMutation";

export default function BatchDetailsPage() {
    const searchParams=useSearchParams()
    const batchId=searchParams.get("batchId")
    const {data:notes,isLoading}=useAdminGetAllNotes(batchId)
    const {data:classLinks}=useAdminGetAllLinks(batchId)
    const [pdfOpen,setPdfOpen]=useState(false)
    const [pdfUrl,setPdfUrl]=useState("")
    const [activeTab, setActiveTab] = useState("notes");
    const router=useRouter()
    const deleteNoteMutation=usedeleteNotesMutation()
    const deleteClassLinkMutation=useDeleteClassLinkMutation()
 if(!batchId || isLoading) return 
  // Dummy Data
  const batch = {
    name: "Morning IELTS Batch",
    course: "IELTS Mastery",
    status: "Active",
    students: 42,
    trainers: 3,
    notes: 12,
    links: 7,
  };

  // const notes = [
  //   {
  //     _id: 1,
  //     title: "Grammar Basics",
  //     description:
  //       "Important grammar concepts for beginners.",
  //     fileName: "grammar.pdf",
  //   },

  //   {
  //     _id: 2,
  //     title: "Speaking Notes",
  //     description:
  //       "Practice speaking exercises and examples.",
  //     fileName: "speaking.pdf",
  //   },
  // ];

  const links = [
    {
      _id: 1,
      title: "Zoom Class #12",
      description:
        "Live speaking practice session.",
      meetingDate: "24 Jun 2026",
      meetingLink: "#",
    },

    {
      _id: 2,
      title: "Weekend Doubt Session",
      description:
        "Open discussion and Q&A.",
      meetingDate: "27 Jun 2026",
      meetingLink: "#",
    },
  ];

  return (
    <div className="py-28">
    <div className="mx-auto max-w-7xl space-y-8 px-2 ">
      {/* Hero */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          rounded-[32px]
          bg-gradient-to-r
          from-[#D6451B]
          to-orange-500
          p-8
          text-white
          shadow-xl
        "
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Batch Details
            </span>

            <h1 className="mt-5 text-4xl font-bold">
              {batch.name}
            </h1>

            <p className="mt-3 text-orange-100">
              {batch.course}
            </p>
          </div>

          <span
            className="
              rounded-full
              bg-white/20
              px-5 py-3
              font-semibold
            "
          >
            {batch.status}
          </span>
        </div>
      </motion.div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      

        <StatCard
          title="Notes"
          value={notes?.length}
          icon={<FaBookOpen />}
          color="bg-blue-50 text-blue-600"
        />

        <StatCard
          title="Class Links"
          value={batch.links}
          icon={<FaLink />}
          color="bg-orange-50 text-[#D6451B]"
        />
      </div>

      {/* Tabs */}

      <div className="flex gap-3">
        <button
          onClick={() => setActiveTab("notes")}
          className={`
            rounded-2xl px-6 py-3 font-medium transition
            ${
              activeTab === "notes"
                ? "bg-[#D6451B] text-white"
                : "bg-white border border-slate-200"
            }
          `}
        >
          Notes
        </button>

        <button
          onClick={() => setActiveTab("links")}
          className={`
            rounded-2xl px-6 py-3 font-medium transition
            ${
              activeTab === "links"
                ? "bg-[#D6451B] text-white"
                : "bg-white border border-slate-200"
            }
          `}
        >
          Class Links
        </button>
      </div>

      {/* Notes */}

      {activeTab === "notes" && (
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Notes
              </h2>

              <p className="mt-2 text-slate-500">
                Manage study materials for this
                batch
              </p>
            </div>

            <button
           onClick={()=>{router.push(`/admin-panel/add-notes?batchId=${batchId}`)}}
              className="
                flex items-center gap-2
                rounded-2xl
                bg-[#D6451B]
                px-5 py-3
                text-white
              "
            >
              <FaPlus />
              Add Note
            </button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {notes.map((note) => (
              <div
                key={note._id}
                className="
                  rounded-3xl
                  border border-slate-200
                  p-6 transition
                  hover:border-[#D6451B]
                "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      {note.title}
                    </h3>

                    <p className="mt-2 text-slate-500">
                      {note.description}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="
                        rounded-xl
                        bg-orange-50
                        px-4 py-2
                        text-[#D6451B]
                      "
                    >
                      <FaEdit />
                    </button>

                    <button
                    onClick={()=>{deleteNoteMutation.mutate(note._id)}}
                    disabled={deleteNoteMutation.isPending}
                      className="
                        rounded-xl
                        bg-red-50
                        px-4 py-2
                        text-red-600
                      "
                    >
                     {deleteNoteMutation.isPending &&
   deleteNoteMutation.variables === note._id ? (
    <FaSpinner className="animate-spin" />
  ) : (
    <FaTrash />
  )}
                     
                    </button>
                  </div>
                </div>

                <div
                  className="
                    mt-6 flex items-center
                    justify-between
                    border-t border-slate-200
                    pt-5
                  "
                >
                  <div className="flex items-center gap-3">
                    <FaFilePdf className="text-red-500" />

                    <span className="text-sm font-medium">
                      {note.fileName}
                    </span>
                  </div>

                  <button
                  onClick={()=>{setPdfUrl(note?.file?.url);setPdfOpen(true)}}
                    className="
                      rounded-xl
                      bg-blue-50
                      px-4 py-2
                      text-blue-600
                    "
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Class Links */}

      {activeTab === "links" && (
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Class Links
              </h2>

              <p className="mt-2 text-slate-500">
                Manage online meetings and
                recordings
              </p>
            </div>

            <button
             onClick={()=>{router.push(`/admin-panel/add-classLink?batchId=${batchId}`)}}
              className="
                flex items-center gap-2
                rounded-2xl
                bg-[#D6451B]
                px-5 py-3
                text-white
              "
            >
              <FaPlus />
              Add Link
            </button>
          </div>

          <div className="mt-8 space-y-5">
            {classLinks?.map((link) => (
              <div
                key={link._id}
                className="
                  rounded-3xl
                  border border-slate-200
                  p-6 transition
                  hover:border-[#D6451B]
                "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      {link.title}
                    </h3>

                    <p className="mt-2 text-slate-500">
                      {link.description}
                    </p>

                    <p className="mt-3 text-sm font-medium text-[#D6451B]">
                      {formatISTDateTime(link.meetingDate)}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                  
                      className="
                        rounded-xl
                        bg-orange-50
                        px-4 py-2
                        text-[#D6451B]
                          cursor-pointer
                      "
                    >
                      <FaEdit />
                    </button>

                    <button
                        onClick={()=>{deleteClassLinkMutation.mutate(link._id)}}
                    disabled={deleteClassLinkMutation.isPending}
                      className="
                        rounded-xl
                        bg-red-50
                        px-4 py-2
                        text-red-600
                        cursor-pointer
                      "
                    >
                           {deleteClassLinkMutation.isPending &&
   deleteClassLinkMutation.variables === link._id ? (
    <FaSpinner className="animate-spin" />
  ) : (
    <FaTrash />
  )}
                    </button>
                  </div>
                </div>

                <div
                  className="
                    mt-6 border-t
                    border-slate-200
                    pt-5
                  "
                >
                  <a
                  href={link.meetingLink}
                    className="
                    w-fit
                      flex items-center gap-2
                      rounded-xl
                      bg-green-50
                      px-4 py-3
                      text-green-600
                    "
                  >
                    <FaExternalLinkAlt />
                    Join Meeting
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    <Modal
     isOpen={pdfOpen}
      onClose={() => setPdfOpen(false)}>
      <PdfViewer url={pdfUrl}></PdfViewer>
      

    </Modal>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="
        rounded-[30px]
        border border-slate-200
        bg-white
        p-6
        shadow-lg
      "
    >
      <div
        className={`
          flex h-14 w-14 items-center
          justify-center rounded-2xl
          text-2xl ${color}
        `}
      >
        {icon}
      </div>

      <h2 className="mt-6 text-4xl font-bold">
        {value}
      </h2>

      <p className="mt-2 text-slate-500">
        {title}
      </p>
    </motion.div>
  );
}