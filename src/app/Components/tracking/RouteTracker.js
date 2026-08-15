"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/lib/analytics";

function RouteTrackerContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams?.toString();
    const url = pathname + (query ? `?${query}` : "");
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

export default function RouteTracker() {
  return (
    <Suspense fallback={null}>
      <RouteTrackerContent />
    </Suspense>
  );
}
