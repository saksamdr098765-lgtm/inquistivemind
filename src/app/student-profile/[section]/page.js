import React from "react";
import StudentClient from "./StudentClient";

export default async function page({ params }) {
  const { section } = await params;
  return <StudentClient section={section} />;
}
