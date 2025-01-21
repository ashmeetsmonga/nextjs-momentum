"use client";

import { addTask, updateProjectDetails } from "@/app/utils/apiHandlers";
import clearCachesByServerAction from "@/app/utils/serverActions";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FC, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TaskPriority, TaskStatus } from "@prisma/client";
import DatePicker from "./DatePicker/DatePicker";

interface EditTaskDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  task: Task | null;
}

const EditTaskDialog: FC<EditTaskDialogProps> = ({ open, setOpen, task }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);

  // const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
  //   console.log("Ashmeet projectId", projectId);
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const data = Object.fromEntries(formData.entries());
  //   const formObj = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value instanceof File ? value.name : String(value)]));

  //   if (!formObj.title || !formObj.description || !formObj.status || !formObj.priority) {
  //     return toast.error("Please specify all fields");
  //   }

  //   const toastId = toast.loading("Adding task");
  //   addTask(formObj.title, formObj.description, projectId, formObj.status, formObj.priority)
  //     .then((data) => {
  //       toast.success("Task created successfully", { id: toastId });
  //       clearCachesByServerAction("/project/[projectId]", "page");
  //       setOpen(false);
  //     })
  //     .catch((e) => toast.error("Something went wrong, please try after some time", { id: toastId }));
  // };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-fit">
        <DialogHeader className="w-[700px] ">
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={() => {}}>
          <div className="w-full space-y-4 mt-4">
            <div>
              <input
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-2xl font-semibold w-full border-none outline-none focus:outline-none"
                placeholder="Task Title..."
              />
            </div>
            <div className="flex gap-4">
              <div>
                <Select onValueChange={(value) => setStatus(value)} value={status} name="status">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="">
                    {Object.values(TaskStatus).map((status, idx) => (
                      <SelectItem key={idx} value={status} className="capitalize">
                        {status.replace("_", " ").toLocaleLowerCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select name="priority">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue className="capitalize" placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent className="capitalize">
                    {Object.values(TaskPriority).map((status, idx) => (
                      <SelectItem key={idx} value={status} className="capitalize">
                        {status.replace("_", " ").toLocaleLowerCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <DatePicker date={date} setDate={setDate} />
              </div>
            </div>
            <div>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" placeholder="Description" rows={5} />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskDialog;
