"use client";

import PortalLoading from "../portal-ui/PortalLoading";

export default function Loading({ type, title, subtitle }) {
  return <PortalLoading type={type} title={title} subtitle={subtitle} />;
}