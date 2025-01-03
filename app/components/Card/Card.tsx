import { TASK_BORDER_COLORS } from "@/constants";
import React, { FC } from "react";

interface CardProps {
  type: "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE";
}

const Card: FC<CardProps> = ({ type }) => {
  return (
    <div className={`w-full bg-white rounded-lg p-4 border ${TASK_BORDER_COLORS[type]} space-y-2`}>
      <h2 className="font-medium text-lg">Implement the Design System</h2>
      <p className="text-gray-500 tracking-wide text-xs">Create and integrate a cohesive design system to ensure consistency, scalability, and efficiency across all UI components and interfaces.</p>
      <div className="flex">
        <div className="rounded-full px-1.5 py-1.5 bg-red-700 text-white text-xs font-medium border-2 border-white">AS</div>
        <div className="rounded-full px-1.5 py-1.5 bg-blue-700 text-white text-xs font-medium border-2 border-white -ml-1.5">HS</div>
        <div className="rounded-full px-1.5 py-1.5 bg-green-700 text-white text-xs font-medium border-2 border-white -ml-1.5">RK</div>
      </div>
    </div>
  );
};

export default Card;
