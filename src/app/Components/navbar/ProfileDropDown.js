import { AnimatePresence, motion } from 'framer-motion'
import React, { memo } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import Image from 'next/image'
import ProfileItem from './ProfileItem'

 function ProfileDropDown({profileOpen,user,profileItems,handleLogout}) {
  return (
    <>
     {/* Dropdown */}
      <AnimatePresence>
        {profileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.98,
            }}
           transition={{
  duration: 0.2,
  ease: "easeOut",
}}
            className="absolute right-0 mt-4 w-80 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
          >
            {/* Header */}
<div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 text-white">

  <div className="flex items-center gap-4">

    {user.profileImage.url ? (
     <Image
  src={user.profileImage.url}
  alt={user.fullName}
  width={64}
  height={64}
  className="rounded-full border-2 border-white object-cover"
  
/>
    ) : (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-bold backdrop-blur">
        {user.fullName.charAt(0)}
      </div>
    )}

    <div>

      <h2 className="text-lg font-semibold">
        {user.fullName}
      </h2>

      <p className="text-sm text-yellow-100">
        {user.email}
      </p>

      <span className="mt-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-medium capitalize">
        {user.role}
      </span>

    </div>

  </div>

</div>
<div className="space-y-1 p-3">

  {profileItems.map((item) => (
    <ProfileItem
      key={item.title}
      {...item}
    />
  ))}

</div>
<div className="border-t border-slate-100 p-3">

  <button
  onClick={handleLogout}
    className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50"
  >
    <FaSignOutAlt />

    <span  className="font-medium">
      Logout
    </span>

  </button>

</div>
          </motion.div>
        )}
      </AnimatePresence>
      </>
  )
}
export default memo(ProfileDropDown)