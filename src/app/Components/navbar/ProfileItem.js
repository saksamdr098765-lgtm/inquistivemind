 import Link from "next/link";
 const ProfileItem = ({
  href,
  icon: Icon,
  title,
}) => (
  <Link
    href={href}
className="flex items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-yellow-50"  >
    <Icon className="text-yellow-500" />

    <span className="text-sm font-medium">
      {title}
    </span>
  </Link>
);
export default ProfileItem