"use client";

import { addProject, addTask } from "@/app/utils/apiHandlers";
import clearCachesByServerAction from "@/app/utils/serverActions";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import toast from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "./DatePicker/DatePicker";
import { Plus } from "lucide-react";

const CreateProjectDialog = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const formObj = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value instanceof File ? value.name : String(value)]));

    if (!formObj.title || !formObj.description) {
      return toast.error("Please specify all fields");
    }

    const toastId = toast.loading("Creating project");
    addProject(formObj.title, formObj.description)
      .then((data) => {
        toast.success(data.message, { id: toastId });
        clearCachesByServerAction("/projects", "page");
        setOpen(false);
      })
      .catch((e) => toast.error("Something went wrong, please try after some time", { id: toastId }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Plus className="cursor-pointer" size={30} />
      </DialogTrigger>
      <DialogContent className="max-w-fit">
        <DialogHeader className="w-[700px] ">
          <DialogTitle>Add a new project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSave}>
          <div className="w-full space-y-4 mt-4">
            <div>
              <input name="title" className="text-2xl font-semibold w-full border-none outline-none focus:outline-none" placeholder="Project Name..." />
            </div>
            <div className="flex gap-4">
              <div>
                <DatePicker date={date} setDate={setDate} />
              </div>
            </div>
            <div>
              <Textarea name="description" placeholder="Description" rows={5} />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectDialog;
