"use client";

import { updateProjectDetails } from "@/app/utils/apiHandlers";
import clearCachesByServerAction from "@/app/utils/serverActions";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { FC, useState } from "react";
import toast from "react-hot-toast";

interface EditProjectDialogProps {
  name: string;
  description: string;
  projectId: string;
}

const EditProjectDialog: FC<EditProjectDialogProps> = ({ name, description, projectId }) => {
  const [inputName, setInputName] = useState(name);
  const [inputDescription, setInputDescription] = useState(description);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    const toastId = toast.loading("Updating project details");
    updateProjectDetails(inputName, inputDescription, projectId)
      .then((data) => {
        setOpen(false);
        clearCachesByServerAction("/project/[projectId]", "page");
        toast.dismiss(toastId);
      })
      .catch((e) => {
        toast.error("Unable to update project details", { id: toastId });
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="text-gray-500 cursor-pointer">
          <Pencil />
        </div>
      </DialogTrigger>
      <DialogContent className="w-[1000px]">
        <DialogHeader>
          <DialogTitle>Edit Project Details</DialogTitle>
        </DialogHeader>
        <div className="w-full grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" value={inputName} onChange={(e) => setInputName(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" className="col-span-3" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProjectDialog;
