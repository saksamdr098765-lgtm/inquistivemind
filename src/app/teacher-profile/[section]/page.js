import React from "react";
import TeacherClient from "./TeacherClient";

export default async function page({ params }) {
  const { section } = await params;
  return <TeacherClient section={section} />;
}
