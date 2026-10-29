"use client";

import TrackedLink from "../tracking/TrackedLink";

const ProfileItem = ({ href, icon: Icon, title }) => (
  <TrackedLink
    href={href}
    label={`Profile Menu: ${title}`}
    category="Header Profile"
    className="flex items-center gap-3 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-700 transition hover:bg-yellow-50 hover:text-yellow-700"
  >
    {Icon && <Icon className="text-yellow-600 text-sm shrink-0" />}
    <span className="truncate">{title}</span>
  </TrackedLink>
);

export default ProfileItem;
