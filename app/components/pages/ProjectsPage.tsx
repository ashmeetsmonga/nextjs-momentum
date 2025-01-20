import { Trash2 } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import DeleteProjectAlert from "../DeleteProjectAlert";

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage: FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <div className="w-full p-10 pt-16 flex flex-col gap-10">
      <div className="flex gap-5 items-center">
        <h1 className="text-5xl font-bold">Projects</h1>
      </div>
      <div className="space-y-5">
        {projects.map((project) => (
          <div className="flex gap-4 items-center border-b border-gray-300 pb-5 pr-5" key={project.id}>
            <Link href={`/project/${project.id}`} className="flex-grow">
              <div className="">
                <h2 className="text-3xl font-semibold">{project.name}</h2>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
            </Link>
            <DeleteProjectAlert projectId={project.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
