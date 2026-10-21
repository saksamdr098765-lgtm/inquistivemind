import BookFreeTrialClient from "./BookFreeTrialClient";

export const metadata = {
  title: "Book Free Trial Class | Inquisitive Mind Academy Chandigarh",
  description:
    "Reserve your free 30-minute live trial class for French (A1-C2), Spoken English, or School Tuition at Inquisitive Mind Academy. Zero fees, zero obligation.",
  alternates: {
    canonical: "/book-free-trial",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BookFreeTrialPage() {
  return (
    <main className="relative min-h-screen overflow-hidden overflow-x-clip bg-gradient-to-b from-amber-50/40 via-white to-slate-50/60 pt-28 pb-20 text-slate-900">
      {/* Background Architectural Patterns matching Home Page */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(250,204,21,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none absolute left-0 sm:-left-10 top-24 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 sm:-right-10 top-60 h-80 w-80 rounded-full bg-yellow-200/20 blur-3xl" />

      <div className="relative z-10">
        <BookFreeTrialClient />
      </div>
    </main>
  );
}
