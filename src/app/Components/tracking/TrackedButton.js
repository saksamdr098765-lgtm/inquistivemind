"use client";

import { event } from "@/lib/analytics";

export default function TrackedButton({
  label,
  category = "Interaction",
  onClick,
  children,
  className,
  type = "button",
  ...props
}) {
  const handleClick = (e) => {
    const computedLabel =
      label || (typeof children === "string" ? children : "button");

    event({
      action: "button_click",
      category,
      label: computedLabel,
      value: Date.now(),
    });

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button type={type} onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  );
}
