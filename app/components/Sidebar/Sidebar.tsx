import { FolderDot } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen space-y-4 py-4 px-5">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Momentum</h1>
      </div>
      <div className="border-t border-gray-400 pt-4">
        <Link href={"/project"} className="flex gap-4 items-center cursor-pointer">
          <FolderDot />
          <p>Projects</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
