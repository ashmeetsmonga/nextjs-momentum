"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { FC, useState } from "react";

interface EditProjectDialogProps {
  name: string;
  description: string;
}

const EditProjectDialog: FC<EditProjectDialogProps> = ({ name, description }) => {
  const [inputName, setInputName] = useState(name);
  const [inputDescription, setInputDescription] = useState(description);

  const handleSave = () => {
    console.log(inputName, inputDescription);
  };

  return (
    <Dialog>
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
