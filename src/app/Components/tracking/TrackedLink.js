"use client";

import Link from "next/link";
import { event } from "@/lib/analytics";

export default function TrackedLink({
  href,
  label,
  category = "Navigation",
  onClick,
  children,
  className,
  ...props
}) {
  const handleClick = (e) => {
    const computedLabel =
      label || (typeof children === "string" ? children : String(href));

    event({
      action: "link_click",
      category,
      label: computedLabel,
      value: Date.now(),
    });

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
