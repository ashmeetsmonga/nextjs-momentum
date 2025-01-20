import React from "react";
import ProjectsPage from "@/app/components/pages/ProjectsPage";
import { getProjects } from "@/app/utils/apiHandlers";

const page = async () => {
  const data = await getProjects();
  return <ProjectsPage projects={data} />;
};

export default page;
