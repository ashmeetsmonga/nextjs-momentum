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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "../DatePicker/DatePicker";
import { Textarea } from "@/components/ui/textarea";

interface CreateTaskDialogProps {
  projectId: string;
}

const CreateTaskDialog: FC<CreateTaskDialogProps> = ({ projectId }) => {
  const [open, setOpen] = useState(false);

  const handleSave = () => {};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="text-gray-500 cursor-pointer">
          <Button>Add Task</Button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-fit">
        <DialogHeader className="w-[700px] ">
          <DialogTitle>Add a new task</DialogTitle>
        </DialogHeader>
        <div className="w-full space-y-4 mt-4">
          <div>
            <input id="title" className="text-2xl font-semibold w-full border-none outline-none focus:outline-none" placeholder="Task Title" />
          </div>
          <div className="flex gap-4">
            <div>
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem value="todo">Todo</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <DatePicker />
            </div>
          </div>
          <div>
            <Textarea placeholder="Description" rows={5} />
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

export default CreateTaskDialog;
