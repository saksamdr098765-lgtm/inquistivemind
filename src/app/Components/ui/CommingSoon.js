import React from 'react'
import { FaLock } from 'react-icons/fa'

export default function CommingSoon() {
  return (
     <div className="absolute inset-0 z-20 flex items-center justify-center backdrop-blur-[3px] bg-white/60">
       <div className="flex flex-col items-center gap-3">
         <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-500 text-white shadow-xl">
           <FaLock className="text-xl" />
         </div>
   
         <div className="rounded-full border border-orange-200 bg-white px-5 py-2 shadow-md">
           <span className="bg-gradient-to-r from-yellow-500 to-yellow-500 bg-clip-text text-sm font-bold text-transparent uppercase tracking-wider">
             Coming Soon
           </span>
         </div>
   
         <p className="max-w-[220px] text-center text-sm text-slate-600">
           We're building something exciting for your learning journey.
         </p>
       </div>
     </div>
  )
}
