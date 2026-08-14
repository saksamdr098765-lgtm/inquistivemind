import Link from "next/link";
import { FiChevronRight, FiHome } from "react-icons/fi";

export default function Breadcrumb({ blog }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 overflow-x-auto py-2">
      <ol className="flex min-w-max items-center gap-2 text-xs sm:text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg px-1.5 py-1 text-slate-500 transition-colors hover:text-amber-600"
          >
            <FiHome className="h-4 w-4 shrink-0 text-amber-500" />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <FiChevronRight className="h-4 w-4 text-slate-300" />
        </li>

        <li>
          <Link
            href="/blogs"
            className="rounded-lg px-1.5 py-1 text-slate-500 transition-colors hover:text-amber-600 font-medium"
          >
            Blogs
          </Link>
        </li>

        <li>
          <FiChevronRight className="h-4 w-4 text-slate-300" />
        </li>

        <li
          className="max-w-[200px] truncate font-semibold text-amber-900 sm:max-w-xs lg:max-w-md"
          title={blog.title}
        >
          {blog.title}
        </li>
      </ol>
    </nav>
  );
}
