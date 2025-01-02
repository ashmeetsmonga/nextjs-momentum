import Card from "@/app/components/Card/Card";
import { LayoutList, ListChecks, Pickaxe, SquareChartGantt } from "lucide-react";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="w-full p-10 pt-16 flex flex-col gap-10">
      <div className="w-full">
        <h1 className="text-5xl font-bold">Momentum: Track Your Tasks</h1>
        <p className="font-light text-sm">Momentum is a powerful task management app designed to help teams organize, track, and deliver projects efficiently.</p>
        <div className="w-[300px] mt-5 space-y-2 text-sm">
          <div className="flex gap-10 items-center justify-between">
            <p>Created By</p>
            <p className="py-1 px-2 bg-orange-100 rounded-lg font-medium">Ashmeet Singh Monga</p>
          </div>
          <div className="flex gap-10 items-center justify-between">
            <p>Due Date</p>
            <p className="p-1 bg-green-100 rounded-lg font-medium">30th Jan, 2025</p>
          </div>
        </div>
      </div>

      {/* Board */}
      <div className="w-full flex-grow bg-gray-100 rounded-lg p-5">
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
          <div>
            <Card type="TODO" />
          </div>
          <div>
            <Card type="IN_PROGRESS" />
          </div>
          <div>
            <Card type="REVIEW" />
          </div>
          <div>
            <Card type="DONE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
