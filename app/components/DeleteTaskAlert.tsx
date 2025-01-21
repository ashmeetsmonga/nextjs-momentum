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
import { FC } from "react";
import toast from "react-hot-toast";
import { deleteProject } from "../utils/apiHandlers";
import clearCachesByServerAction from "../utils/serverActions";

interface DeleteTaskAlertProps {
  taskId: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteTaskAlert: FC<DeleteTaskAlertProps> = ({ taskId, open, setOpen }) => {
  const handleDelete = () => {
    const toastId = toast.loading("Deleting task");
    deleteProject(taskId)
      .then((data) => {
        clearCachesByServerAction("/project/[projectId]", "page");
        toast.success(data.message, { id: toastId });
      })
      .catch((error) => {
        toast.error("Something went wrong", { id: toastId });
        console.log(error);
      });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone. This will permanently delete the task.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTaskAlert;
