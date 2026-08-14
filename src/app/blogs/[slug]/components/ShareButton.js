"use client";

import { useState } from "react";
import {
  FiCheck,
  FiCopy,
  FiFacebook,
  FiLinkedin,
  FiShare2,
  FiTwitter,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ShareButtons({ blog }) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== "undefined" ? window.location.href : "";
  const shareText = blog.title;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const nativeShare = async () => {
    if (!navigator.share) return;
    try {
      await navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url,
      });
    } catch {}
  };

  return (
    <section className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-amber-100/80 bg-gradient-to-br from-amber-50/30 via-white to-orange-50/20 px-6 py-10 lg:px-10 lg:py-12 shadow-xl shadow-amber-500/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.08),transparent_60%)]" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <span className="inline-flex rounded-full border border-amber-200 bg-amber-100/80 px-4 py-1.5 text-xs font-bold tracking-wide text-amber-900">
            Share Guide
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Found this article helpful?
          </h2>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Share this guide with friends, classmates, and fellow language learners.
          </p>
        </div>

        <div className="w-full lg:w-auto">
          <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap">
            {typeof navigator !== "undefined" && navigator.share && (
              <button
                onClick={nativeShare}
                className="flex h-12 w-full items-center justify-center rounded-2xl bg-amber-500 text-slate-950 font-bold shadow-md transition-all duration-300 hover:scale-105 hover:bg-amber-400 sm:w-12"
                aria-label="Share"
              >
                <FiShare2 className="h-5 w-5" />
              </button>
            )}

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${shareText}\n${url}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md transition-transform duration-300 hover:scale-105 sm:w-12"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-md transition-transform duration-300 hover:scale-105 sm:w-12"
              aria-label="Share on Facebook"
            >
              <FiFacebook className="h-5 w-5" />
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#0A66C2] text-white shadow-md transition-transform duration-300 hover:scale-105 sm:w-12"
              aria-label="Share on LinkedIn"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                shareText
              )}&url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 text-white shadow-md transition-transform duration-300 hover:scale-105 sm:w-12"
              aria-label="Share on X"
            >
              <FiTwitter className="h-5 w-5" />
            </a>
          </div>

          <button
            onClick={copyLink}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-amber-200 bg-white px-5 py-3 text-xs font-bold text-slate-800 transition-all duration-300 hover:bg-amber-50 hover:text-amber-900"
          >
            {copied ? (
              <>
                <FiCheck className="text-amber-600 text-base" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <FiCopy className="text-amber-600 text-base" />
                <span>Copy Page Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}