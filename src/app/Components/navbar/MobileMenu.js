import React, { memo } from 'react'
import { AnimatePresence,motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaSignOutAlt, FaTimes } from 'react-icons/fa';

 function MobileMenu({open,closeMenu,user,links,profileItems,handleLogout}) {
  return (
   <>
       <AnimatePresence>
  {open && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.28 }}
      className="fixed inset-0 z-[60] bg-white overf lg:hidden"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

  <Link
    href="/"
    onClick={closeMenu}
    className="flex items-center gap-3"
  >
   <Image
  src="/icon1.webp"
  alt="Inquisitive Mind Academy"
  width={40}
  height={40}
  priority
/>

    <div>

      <h2 className="font-bold">
        Inquisitive Mind
      </h2>

      <p className="text-[10px] tracking-[0.35em] text-yellow-500">
        ACADEMY
      </p>

    </div>

  </Link>

  <button
    onClick={closeMenu}
    className="rounded-full p-2 hover:bg-slate-100"
  >
    <FaTimes size={22} />
  </button>

</div>
<div className="px-6 pt-6">

  {user ? (

    <div className="rounded-3xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-sky-400 p-6 text-white shadow-xl">

      <div className="flex items-center gap-4">

        {user.profileImage.url ? (
         <Image
  src={user.profileImage.url}
  alt={user.fullName}
  width={64}
  height={64}
  className="rounded-full border-2 border-white object-cover object-top shrink-0"
  
/>
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-bold">
            {user.fullName[0]}
          </div>
        )}

        <div>

          <h2 className="text-lg font-semibold">
            {user.fullName}
          </h2>

          <p className="text-sm text-yellow-100">
            {user.email}
          </p>

          <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs capitalize">
            {user.role}
          </span>

        </div>

      </div>

    </div>

  ) : (

    <div className="space-y-3">

      <Link
        href="/login"
        onClick={closeMenu}
        className="block rounded-2xl border py-4 text-center font-semibold"
      >
        Login
      </Link>

      <Link
        href="/signup"
        onClick={closeMenu}
className="block rounded-2xl bg-yellow-400 py-4 text-center font-semibold text-slate-900 transition hover:bg-yellow-500"      >
        Enroll Now
      </Link>

    </div>

  )}

</div>
<div className="flex h-[calc(100vh-80px)] flex-col">

  {/* Scrollable Content */}
  <div className="flex-1 overflow-y-auto px-6 py-6">

    <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
      Navigation
    </h3>

    <div className="space-y-2">
      {links.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          onClick={closeMenu}
          className="flex items-center rounded-2xl px-4 py-4 font-medium transition hover:bg-yellow-50 hover:text-yellow-600"
        >
          {item.name}
        </Link>
      ))}
    </div>

    {user && (
      <>
        <h3 className="mt-8 mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Account
        </h3>

        <div className="space-y-2">
          {profileItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeMenu}
className="flex items-center gap-4 rounded-2xl px-4 py-4 font-medium transition hover:bg-yellow-50"              >
           <Icon className="text-yellow-500" />

                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </>
    )}
  </div>

  {/* Bottom */}
  <div className="border-t border-slate-200 bg-white p-6">

    {user ? (
      <button onClick={handleLogout} className="flex w-full items-center justify-center gap-3 rounded-2xl border border-red-200 py-4 font-semibold text-red-600 transition hover:bg-red-50">
        <FaSignOutAlt />
        Logout
      </button>
    ) : (
      <Link
        href="/login"
className="block rounded-2xl bg-yellow-400 py-4 text-center font-semibold text-slate-900 transition hover:bg-yellow-500"      >
        Login
      </Link>
    )}

    <p className="mt-6 text-center text-sm text-slate-400">
      © 2026 Inquisitive Mind Academy
    </p>

  </div>

</div>
    </motion.div>
  )}
</AnimatePresence>
   </>
  )
}
export default memo(MobileMenu)