import React from 'react'

export default function DeveloperCredit() {
  return (
    <>
      {/* COPYRIGHT */}
        <div className="mt-14 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Inquisitive Mind Academy. All Rights Reserved.
        </div>
  <div className="  py-4">
  <p className="text-center text-xs text-slate-500">
    Designed & Developed with ❤️ by{" "}
    <a
      href="https://rohitdevstack.online"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[#D6451B] transition cursor-pointer hover:text-yellow-600"
    >
      Rohit Kumar
    </a>
  </p>
</div>
    </>
  )
}
