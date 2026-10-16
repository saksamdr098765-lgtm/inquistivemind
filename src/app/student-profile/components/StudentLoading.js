"use client";

import PortalLoading from "@/app/Components/portal-ui/PortalLoading";

export default function StudentLoading({ type, title, subtitle }) {
  return <PortalLoading type={type} title={title} subtitle={subtitle} />;
}