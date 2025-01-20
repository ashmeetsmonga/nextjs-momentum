import ProjectPage from "@/app/components/pages/ProjectPage";
import { getProjectDetails } from "@/app/utils/apiHandlers";
import React from "react";

const page = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const projectId = (await params).projectId;
  const data = await getProjectDetails(projectId);
  console.log(data);

  return <ProjectPage project={data} />;
};

export default page;
