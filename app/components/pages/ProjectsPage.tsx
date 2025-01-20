import React from "react";

const ProjectsPage = () => {
  return (
    <div className="w-full p-10 pt-16 flex flex-col gap-10">
      <div className="flex gap-5 items-center">
        <h1 className="text-5xl font-bold">Projects</h1>
      </div>
      <div className="space-y-5">
        <div className="border-b border-gray-300 pb-5">
          <h2 className="text-3xl font-semibold">Momentum</h2>
          <p className="text-sm text-gray-500">Momentum is momentum, no one can deny this, no one.</p>
        </div>
        <div className="border-b border-gray-300 pb-3">
          <h2 className="text-3xl font-semibold">Momentum</h2>
          <p className="text-sm text-gray-500">Momentum is momentum, no one can deny this, no one.</p>
        </div>
        <div className="border-b border-gray-300 pb-3">
          <h2 className="text-3xl font-semibold">Momentum</h2>
          <p className="text-sm text-gray-500">Momentum is momentum, no one can deny this, no one.</p>
        </div>
        <div className="border-b border-gray-300 pb-3">
          <h2 className="text-3xl font-semibold">Momentum</h2>
          <p className="text-sm text-gray-500">Momentum is momentum, no one can deny this, no one.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
