"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  X,
  Calendar,
  Clock,
  Sparkles,
  Phone,
  User,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

export default function BookingModal({
  isOpen = false,
  tutor,
  selectedSlot,
  selectedDay,
  onClose,
}) {
  const [studentName, setStudentName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [gradeLevel, setGradeLevel] = useState("Class 10");
  const [learningGoal, setLearningGoal] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !tutor) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentPhone || studentPhone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Free trial demo booked successfully!");
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStudentName("");
    setStudentPhone("");
    setLearningGoal("");
    onClose();
  };

  const handleWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hello Inquisitive Mind Academy! I have booked a free trial class for ${studentName || "Student"} with ${tutor.name} (${tutor.primarySubject}) for ${selectedDay || "this week"} at ${selectedSlot || "preferred time"}. Please confirm my booking!`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 15 }}
          transition={{ type: "spring", stiffness: 350, damping: 26 }}
          className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-20"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-amber-50/60 via-yellow-50/30 to-white">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 font-bold text-sm shadow-xs">
                🎓
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Book Free 1-on-1 Trial Class
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  With {tutor.name} • {tutor.primarySubject}
                </p>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-6">
            {isSubmitted ? (
              /* Success Confirmation Screen with Confetti effect */
              <div className="text-center py-6 space-y-4">
                {/* Custom Confetti Particles */}
                <div className="relative flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-3xl shadow-sm">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-slate-900">
                    Trial Class Booked!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Our academic coordinator will reach out to you within 30 minutes on{" "}
                    <strong className="text-slate-900">+91 {studentPhone}</strong> to confirm your slot with {tutor.name}.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs font-semibold text-slate-800 space-y-1 text-left max-w-sm mx-auto">
                  <p><strong>Subject:</strong> {tutor.primarySubject}</p>
                  <p><strong>Instructor:</strong> {tutor.name}</p>
                  <p><strong>Preferred Day:</strong> {selectedDay || "Flexible"}</p>
                  <p><strong>Time Slot:</strong> {selectedSlot || "Flexible (Coordinator will confirm)"}</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                  <button
                    type="button"
                    onClick={handleWhatsAppConfirmation}
                    className="px-4 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Confirm Instantly via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Preselected Slot Pill */}
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-yellow-50/80 border border-yellow-200 text-xs font-semibold text-yellow-950">
                  <Calendar className="h-4 w-4 text-yellow-700 shrink-0" />
                  <span>
                    Selected: <strong>{selectedDay || "Earliest Available"}</strong> • {selectedSlot || "Flexible Time"}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Student Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={studentPhone}
                        onChange={(e) => setStudentPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="10-digit mobile number"
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Class / Level
                      </label>
                      <select
                        value={gradeLevel}
                        onChange={(e) => setGradeLevel(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:bg-white focus:outline-none focus:border-yellow-400"
                      >
                        <option value="Class 1-5">Class 1–5 (Primary)</option>
                        <option value="Class 6-8">Class 6–8 (Middle)</option>
                        <option value="Class 9-10">Class 9–10 (Boards)</option>
                        <option value="Class 11-12">Class 11–12 (Senior)</option>
                        <option value="Adult Learner">Adult / Hobby</option>
                        <option value="Exam Prep">DELF / Competitive</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Learning Mode
                      </label>
                      <select
                        defaultValue={tutor.mode === "Home" ? "home" : "online"}
                        className="w-full px-3 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:bg-white focus:outline-none focus:border-yellow-400"
                      >
                        <option value="online">Live 1-on-1 Online</option>
                        <option value="home">Home Tutoring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Specific Topics or Learning Goals (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={learningGoal}
                      onChange={(e) => setLearningGoal(e.target.value)}
                      placeholder="e.g. Focus on French speaking & grammar revision before unit test"
                      className="w-full px-3.5 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[46px] rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-bold text-sm shadow-md shadow-yellow-200 flex items-center justify-center gap-2 cursor-pointer transition"
                  >
                    {isSubmitting ? (
                      <span>Scheduling trial demo...</span>
                    ) : (
                      <span>Confirm Free Trial Demo Class</span>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">
                    Free trial demo • Our academic coordinator will call to confirm your slot
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
