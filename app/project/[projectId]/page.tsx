import Project from "@/app/pages/Project";
import { getProjectDetails } from "@/app/utils/apiHandlers";
import React from "react";

const ProjectPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const projectId = (await params).projectId;
  const data = await getProjectDetails(projectId);
  console.log(data);

  return <Project project={data} />;
};

export default ProjectPage;
