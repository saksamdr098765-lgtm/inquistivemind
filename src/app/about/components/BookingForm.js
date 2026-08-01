"use client"
import SITE_CONFIG from "@/app/siteConfig";
import { trackWhatsAppClick } from "@/lib/traking";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function BookingForm() {
      const [form, setForm] = useState({
        name: "",
        phone: "",
        course: "english",
      });
    
      const { whatsappNumber,phone } = SITE_CONFIG;
    

     const handleChange = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const message = `
    *New Demo Class Request*
    
    👤 Name: ${form.name}
    📞 Phone: ${form.phone}
    📚 Course: ${form.course}
        `;
    
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`;
   
          trackWhatsAppClick("book-demo")
        window.open(whatsappUrl, "_blank");
      };
  return (
   <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg sm:p-8">
  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
    Register For Free Demo
  </h2>

  <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
    Book your free class and speak with our academic advisors.
  </p>

  <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
    <input
      type="text"
      name="name"
      autoComplete="name"
      required
      placeholder="Full Name"
      value={form.name}
      onChange={handleChange}
      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base outline-none transition-colors focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
    />

    <input
      type="tel"
      name="phone"
      autoComplete="tel"
      inputMode="numeric"
      pattern="[0-9]{10}"
      maxLength={10}
      required
      placeholder="Phone Number"
      value={form.phone}
      onChange={handleChange}
      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base outline-none transition-colors focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
    />
<label htmlFor="course" className="sr-only">
  Select Course
</label>
    <select
      name="course"
      required
      
      id="course"
      value={form.course}
      onChange={handleChange}
      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base outline-none transition-colors focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
    >
      <option value="english">Spoken English</option>
      <option value="ielts">IELTS Preparation</option>
      <option value="french">French Language</option>
      <option value="school">School Classes (1st-12th)</option>
    </select>

    <button
      type="submit"
      className="w-full rounded-xl bg-yellow-400 px-6 py-3.5 font-semibold text-slate-900 transition-colors hover:bg-yellow-500"
    >
      Book Free Demo Class
    </button>

    <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-center text-sm text-slate-500">
      <FaPhoneAlt className="shrink-0" />
      <span>Call / WhatsApp:</span>
      <span className="font-semibold text-slate-900">{phone}</span>
    </div>
  </form>
</div>
  )
}
