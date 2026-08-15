"use client";

import { event } from "@/lib/analytics";

export default function TrackedElement({
  as: Component = "div",
  label,
  category = "Engagement",
  action = "element_click",
  onClick,
  children,
  className,
  ...props
}) {
  const handleClick = (e) => {
    const computedLabel =
      label || (typeof children === "string" ? children : "element");

    event({
      action,
      category,
      label: computedLabel,
      value: Date.now(),
    });

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Component onClick={handleClick} className={className} {...props}>
      {children}
    </Component>
  );
}
