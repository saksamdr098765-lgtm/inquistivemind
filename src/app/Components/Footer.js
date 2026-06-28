"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaBookOpen,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";

const links = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Courses", path: "/courses", icon: FaBookOpen },
  { name: "About", path: "/about", icon: FaInfoCircle },
  { name: "Contact", path: "/contact", icon: FaPhoneAlt },
];

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white text-slate-900">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.06),transparent_60%)]" />

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <img
          src="/icon1.png"
          alt=""
          className="h-[420px] w-[420px] object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* TOP GRID */}
        <div className="grid gap-14 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <img
                src="/icon1.png"
                className="h-14 w-14 object-contain"
                alt=""
              />

              <div>
                <h3 className="text-xl font-bold">
                  Inquisitive Mind Academy
                </h3>

                <p className="mt-1 text-[10px] tracking-[0.35em] text-slate-500">
                  LANGUAGE • COMMUNICATION • CONFIDENCE
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-lg leading-relaxed text-slate-600">
              Empowering learners through English and French training, real
              conversations, live mentorship, and structured fluency systems
              designed for real-world communication.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex gap-4 text-lg">

              {[FaFacebook, FaInstagram, FaLinkedin, FaYoutube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-500 hover:shadow-md"
                  >
                    <Icon />
                  </div>
                )
              )}

            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold">Quick Links</h4>

            <div className="mt-5 space-y-2 text-sm text-slate-600">
              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-amber-50 hover:text-amber-600"
                  >
                    <Icon className="text-amber-500" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold">Contact</h4>

            <div className="mt-5 space-y-4 text-sm text-slate-600">

              <div className="flex gap-3">
                <FaPhone className="mt-1 text-amber-500" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-amber-500" />
                <span>support@academy.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-amber-500" />
                <span>India • Online & Offline Classes</span>
              </div>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-slate-200" />

        {/* CTA */}
        <div className="text-center">

          <div className="text-[10px] tracking-[0.35em] text-slate-400">
            BUILDING CONFIDENT COMMUNICATORS
          </div>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Speak with Confidence.
            <span className="block bg-gradient-to-r from-amber-500 via-yellow-400 to-sky-400 bg-clip-text text-transparent">
              Learn Without Limits.
            </span>
          </h2>

          <button
            onClick={() => router.push("/find-tutor")}
            className="mt-8 rounded-full bg-amber-500 px-8 py-3 font-medium text-white shadow-md shadow-amber-200 transition hover:bg-amber-600 hover:-translate-y-0.5"
          >
            Enroll Now
          </button>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Inquisitive Mind Academy. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}