"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { FC } from "react";
import toast from "react-hot-toast";
import { deleteProject } from "../utils/apiHandlers";
import clearCachesByServerAction from "../utils/serverActions";

interface DeleteProjectAlertProps {
  projectId: string;
}

const DeleteProjectAlert: FC<DeleteProjectAlertProps> = ({ projectId }) => {
  const handleDelete = () => {
    const toastId = toast.loading("Deleting project and its tasks");
    deleteProject(projectId)
      .then((data) => {
        clearCachesByServerAction("/projects", "page");
        toast.success("Project deleted successfully", { id: toastId });
      })
      .catch((error) => {
        toast.error("Something went wrong", { id: toastId });
        console.log(error);
      });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Trash2 className="cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone. This will permanently delete your project and all tasks associated with it.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProjectAlert;
