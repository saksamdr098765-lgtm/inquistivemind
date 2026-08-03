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

  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "";

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
    <section className="relative mt-16 overflow-hidden rounded-[2rem] bg-white px-6 py-14 lg:mt-20 lg:px-8 lg:py-16">
      {/* Background (Matches Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Content */}
        <div className="max-w-xl">
          <span className="inline-flex rounded-full border border-yellow-100 bg-yellow-50 px-4 py-2 text-sm font-semibold tracking-wide text-yellow-700">
            Share Article
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
            Found this article helpful?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Share this article with friends, classmates, and anyone
            interested in learning English, French, IELTS, or improving
            their academic skills.
          </p>
        </div>

        {/* Share Buttons */}
        <div className="w-full lg:w-auto">
          <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap">
            {typeof navigator !== "undefined" && navigator.share && (
              <button
                onClick={nativeShare}
                className="flex h-12 w-full items-center justify-center rounded-2xl bg-yellow-500 text-white transition-all duration-300 hover:scale-105 hover:bg-[#D6451B] sm:w-12"
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
              className="flex h-12 w-full items-center justify-center rounded-2xl bg-green-500 text-white transition-transform duration-300 hover:scale-105 sm:w-12"
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
              className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#1877F2] text-white transition-transform duration-300 hover:scale-105 sm:w-12"
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
              className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#0A66C2] text-white transition-transform duration-300 hover:scale-105 sm:w-12"
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
              className="flex h-12 w-full items-center justify-center rounded-2xl bg-black text-white transition-transform duration-300 hover:scale-105 sm:w-12"
              aria-label="Share on X"
            >
              <FiTwitter className="h-5 w-5" />
            </a>
          </div>

          <button
            onClick={copyLink}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700"
          >
            {copied ? (
              <>
                <FiCheck />
                Copied
              </>
            ) : (
              <>
                <FiCopy />
                Copy Link
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}