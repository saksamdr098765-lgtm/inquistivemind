"use client"

import { FaArrowRight } from "react-icons/fa"

export default function ScrollTopButton() {
  return (
  
              <button
               onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}
                className="flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-white transition hover:bg-yellow-600"
              >
                Book Free Demo
                <FaArrowRight />
              </button>
  )
}
