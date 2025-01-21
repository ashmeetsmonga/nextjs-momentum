import { TASK_BORDER_COLORS } from "@/constants";
import { Pencil } from "lucide-react";
import React, { FC } from "react";

interface CardProps {
  task: Task;
  openEditTaskDialog: (task: Task) => void;
}

const Card: FC<CardProps> = ({ task, openEditTaskDialog }) => {
  return (
    <div className={`w-full bg-white rounded-lg p-4 pt-2 border relative ${TASK_BORDER_COLORS[task.status as keyof typeof TASK_BORDER_COLORS]} space-y-2`}>
      <button className="absolute top-3 right-3 cursor-pointer" onClick={() => openEditTaskDialog(task)}>
        <Pencil size={15} className="text-gray-500" />
      </button>
      <h2 className="font-medium text-lg">{task.title}</h2>
      <p className="text-gray-500 tracking-wide text-xs">{task.description}</p>
      <div className="py-2">
        <div className="border border-gray-200 w-full" />
      </div>
      <div className="flex">
        <div className="rounded-lg px-1.5 py-1.5 bg-red-100 text-xs font-medium">{task.creator.name}</div>
      </div>
    </div>
  );
};

export default Card;
