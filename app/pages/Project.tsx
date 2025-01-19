import React, { FC } from "react";
import { LayoutList, ListChecks, Pencil, Pickaxe, SquareChartGantt } from "lucide-react";
import Card from "../components/Card/Card";
import EditProjectDialog from "../components/EditProjectDialog/EditProjectDialog";
import CreateTaskDialog from "../components/CreateTaskDialog/CreateTaskDialog";

interface ProjectProps {
  project: Project;
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="w-full p-10 pt-16 flex flex-col gap-10">
      <div className="w-full">
        <div className="flex gap-5 items-center">
          <h1 className="text-5xl font-bold">{project.name}</h1>
          <EditProjectDialog name={project.name} description={project.description} projectId={project.id} />
        </div>
        <p className="text-gray-500 text-sm mt-2">{project.description}</p>
        <div className="w-[300px] mt-5 space-y-2 text-sm">
          <div className="flex gap-10 items-center justify-between">
            <p className="text-gray-500">Created By</p>
            <p className="py-1 px-2 bg-orange-100 rounded-lg font-medium">{project.owner.name}</p>
          </div>
          <div className="flex gap-10 items-center justify-between">
            <p className="text-gray-500">Due Date</p>
            <p className="p-1 bg-green-100 rounded-lg font-medium">30th Jan, 2025</p>
          </div>
        </div>
      </div>

      {/* Board */}
      <div>
        <div className="w-full flex justify-end">
          <CreateTaskDialog projectId={project.id} />
        </div>
        <div className="w-full flex-grow bg-gray-100 rounded-lg p-5 mt-3">
          <div className="px-4 py-2 bg-white rounded-lg flex justify-around font-semibold">
            <p className="text-gray-500 flex gap-2">
              <LayoutList />
              Todo
            </p>
            <p className="text-blue-500 flex gap-2">
              <Pickaxe />
              In Progress
            </p>
            <p className="text-orange-500 flex gap-2">
              <SquareChartGantt />
              Review
            </p>
            <p className="text-green-500 flex gap-2">
              <ListChecks />
              Done
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-5">
            <div className="space-y-2">
              {project.tasks
                .filter((task) => task.status === "TODO")
                .map((task, id: number) => (
                  <Card key={id} task={task} />
                ))}
            </div>
            <div className="space-y-2">
              {project.tasks
                .filter((task) => task.status === "IN_PROGRESS")
                .map((task, id: number) => (
                  <Card key={id} task={task} />
                ))}
            </div>
            <div className="space-y-2">
              {project.tasks
                .filter((task) => task.status === "REVIEW")
                .map((task, id: number) => (
                  <Card key={id} task={task} />
                ))}
            </div>
            <div className="space-y-2">
              {project.tasks
                .filter((task) => task.status === "DONE")
                .map((task, id: number) => (
                  <Card key={id} task={task} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
